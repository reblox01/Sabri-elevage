/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, ShapeIcon, SpaceIcon, TwitterIcon } from "../icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="container mt-5">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                <Image
                  src="/images/logo/logo-white.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="max-w-full"
                />
              </Link>
              <p className="mb-8 max-w-[270px] text-base text-gray-7">
                Votre partenaire de confiance pour l'achat de poulets vivants.
                Engagés envers la qualité, le bien-être animal et la durabilité.
              </p>
              {/* <div className="-mx-3 flex items-center">
                <a
                  aria-label="social link"
                  href="/#"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <FacebookIcon />
                </a>
                <a
                  aria-label="social link"
                  href="/#"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <TwitterIcon />
                </a>
                <a
                  aria-label="social link"
                  href="/#"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <InstagramIcon />
                </a>
                <a
                  aria-label="social link"
                  href="/#"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <SpaceIcon />
                </a>
              </div> */}
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12  ">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
              <Link href="/" > Accueil</Link>
                
              </h4>
              
            </div>
          </div>
           <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                <Link href="/about" > À propos</Link>
              </h4>
              
            </div>
          </div> 
           <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
              <Link href="/whyUs" >Pourquoi nous</Link>
              </h4>
              
            </div>
          </div> 
           <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
               <Link href="/Contact" >Contact</Link>
              </h4>
              
            </div>
          </div> 
        </div>
      </div>

      <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <div className="my-1">
                <div className="-mx-3 flex items-center justify-center md:justify-start">
                  <a
                    href="/#"
                    className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                  >
                    
                    Privacy policy
                  </a>
                  <a
                    href="/#"
                    className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                  >
                    Legal notice
                  </a>
                  <a
                    href="/#"
                    className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                  >
                    Terms of service
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="my-1 flex justify-center md:justify-end">
                <p className="text-base text-gray-7">
                  © {currentYear}{" "}
                  <a
                    href="/#"
                    rel="nofollow noopner noreferrer"
                    className="text-gray-1 hover:underline"
                  >
                    Sabri Élevage Inc.
                  </a>
                  {" "}Tous droits réservés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-0 top-0 z-[-1] aspect-[95/82] w-full max-w-[570px]">
          <Image src="/images/footer/shape-1.svg" alt="shape" fill />
        </span>

        <span className="absolute bottom-0 right-0 z-[-1] aspect-[31/22] w-full max-w-[372px]">
          <Image src="/images/footer/shape-3.svg" alt="shape" fill />
        </span>

        <span className="absolute right-0 top-0 z-[-1]">
          <ShapeIcon />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
