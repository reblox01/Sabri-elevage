/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { CubeIcon } from "../icons";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                Sabri Élevage est votre partenaire de confiance pour l'achat de poulets vivants
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Nous sommes fiers de notre engagement envers la qualité,
                  le bien-être animal et la durabilité.
                  Contactez-nous dès aujourd'hui pour découvrir comment nous 
                  pouvons répondre à vos besoins en volaille vivante et contribuer à votre succès.
                </p>                
              </div>
            </div>

            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              >
                <div className="mt-16">
                  <Image
                    src="/images/hero/hero-image.jpg"
                    alt="hero"
                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                    width={845}
                    height={316}
                  />
                </div>
                <div className="absolute -left-9 bottom-0 z-[-1]">
                  <CubeIcon />
                </div>
                <div className="absolute -right-6 -top-6 z-[-1]">
                  <CubeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
