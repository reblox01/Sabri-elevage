/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { EmailIcon, LocationIcon, PhoneIcon } from '../icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormStatus('sending');

    const templateParams = {
      from_name: formData.user_name,
      to_name: "Sabri Elevage",
      from_email: formData.user_email,
      to_email: "sabrielevage@gmail.com",
      message: formData.message,
    };

    emailjs.send(
      'service_9g2a08u',
      'template_nvclyyi',
      templateParams,
      '8-N_lD0j9AIatgk1n'
    )
    .then((result) => {
      console.log(result.text);
      setFormStatus('success');
    }, (error) => {
      console.log(error.text);
      setFormStatus('error');
    });

    setFormData({
      user_name: '',
      user_email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACTEZ-NOUS
                </span>
                <h2 className="text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  Parlons de votre problème.
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Nous sommes à votre disposition pour répondre à toutes <br /> vos questions et vous accompagner dans vos projets.
                </p>
              </div>
              <div className="mb-12 flex flex-col lg:flex-row lg:space-x-8 lg:mb-0">
                {/* Wrapper for the icons and text */}
                <div className="flex justify-between space-x-4 lg:space-x-8">
                  {/* Location */}
                  <div className="flex items-center">
                    <div className="mr-2 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:w-[70px]">
                      <Link href="#">
                        <LocationIcon />
                      </Link>
                    </div>
                    <span className="max-w-40 text-base text-dark dark:text-white hidden lg:block">
                      401 Broadway, 24th Floor, Maroc
                    </span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center">
                    <div className="mr-2 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:w-[70px]">
                      <Link href="tel:+212600663181">
                        <PhoneIcon />
                      </Link>
                    </div>
                    <span className="text-base text-dark dark:text-white hidden lg:block">
                      +212 600-663-181
                    </span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center">
                    <div className="mr-2 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:w-[70px]">
                      <Link href="mailto:sabrielevage@gmail.com">
                        <EmailIcon />
                      </Link>
                    </div>
                    <span className="text-base text-dark dark:text-white hidden lg:block">
                      sabrielevage@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Envoyez-nous un Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-[22px]">
                  <label htmlFor="fullName" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Nom Complet*
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Adam Gelius"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    required
                  />
                </div>
                <div className="mb-[22px]">
                  <label htmlFor="email" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="example@yourmail.com"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    required
                  />
                </div>
                <div className="mb-[22px]">
                  <label htmlFor="phone" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Téléphone (facultatif)
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+885 1254 5211 552"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[30px]">
                  <label htmlFor="message" className="mb-4 block text-sm text-body-color dark:text-dark-6">
                    Votre Message*
                  </label>
                  <textarea
                    name="message"
                    rows={1}
                    placeholder="saisissez votre message ici"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                    required
                  ></textarea>
                </div>
                <div className="flex flex-wrap items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-6 text-base font-medium text-white transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:ring-offset-dark-1"
                  >
                    {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer Message'}
                  </button>
                  {formStatus === 'success' && (
                    <p className="mt-4 text-sm text-green-500">Message envoyé avec succès!</p>
                  )}
                  {formStatus === 'error' && (
                    <p className="mt-4 text-sm text-red-500">Échec de l'envoi. Veuillez réessayer.</p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
