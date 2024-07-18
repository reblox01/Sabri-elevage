/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { SecondSquareIcon, SquareIcon, TriangleIcon } from "../icons";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                Sabri Élevage est une entreprise dédiée à l'élevage et à la vente de dindes vivants
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                Depuis notre fondation en 2004
                  <br /> <br />
                  Nous nous sommes imposés comme un leader dans le domaine de l'aviculture, 
                  offrant des dindes de haute qualité, élevées dans des conditions optimales pour 
                  garantir leur santé et leur bien-être.
                </p>

                
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div
                    className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
                  >
                    <Image
                      src="/images/about/about6.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                    <Image
                      src="/images/about/about-image5.jpg"
                      alt="about image"
                      fill
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <span className="block text-5xl font-extrabold text-white">
                        20
                      </span>
                      <span className="block text-base font-semibold text-white">
                      Nous avons
                      </span>
                      <span className="block text-base font-medium text-white text-opacity-70">
                      Années d'expérience
                      </span>
                    </div>
                    <div>
                      <span className="absolute left-0 top-0 -z-10">
                        <SecondSquareIcon />
                      </span>
                      <span className="absolute right-0 top-0 -z-10">
                        <TriangleIcon />
                      </span>
                      <span className="absolute bottom-0 right-0 -z-10">
                        <SquareIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
