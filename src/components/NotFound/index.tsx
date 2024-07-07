/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Oops } from "../icons";

const NotFound = () => {
  return (
    <section className="bg-white py-20 dark:bg-dark-2 lg:py-[110px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-5/12 lg:w-6/12">
            <div className="relative mx-auto aspect-[129/138] max-w-[357px] text-center">
              <Image
                src="/images/404.svg"
                alt="image"
                fill
                className="mx-auto max-w-full dark:hidden"
              />
              <Image
                src="/images/404-dark.svg"
                alt="image"
                fill
                className="mx-auto hidden max-w-full dark:block"
              />
            </div>
          </div>
          <div className="w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12">
            <div>
              <div className="mb-8">
                <Oops />
              </div>
              <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
                Nous ne trouvons pas la page que vous recherchez.
              </h3>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Oups ! La page que vous recherchez n'existe pas. Elle a peut-être été déplacée ou supprimée.
              </p>
              <Link
                href="/"
                className="rounded-md bg-dark px-7 py-3 text-base font-medium text-white transition hover:bg-primary dark:bg-primary dark:hover:bg-primary/80"
              >
                Retourner à la page d'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
