import { Response } from "@/types/response";
import { AnimalIcon, DurabiliteIcon, QualityIcon, TraceabilityIcon } from "../icons";

const responsesData: Response[] = [
  {
    id: 1,
    icon: (
      <QualityIcon />
    ),
    title: "Qualité",
    paragraph: "Nos dindes sont élevées avec soin et attention, garantissant ainsi des dindes robustes et en bonne santé pour nos clients. Nous mettons un point d'honneur à maintenir des standards élevés de qualité à chaque étape de l'élevage, pour offrir des produits irréprochables.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <AnimalIcon />
    ),
    title: "Bien-être animal",
    paragraph: "Nous veillons à ce que nos dindes soient élevées dans des conditions optimales, avec un accès à des espaces extérieurs, une alimentation équilibrée, et des soins vétérinaires réguliers. Nous croyons fermement que le bien-être de nos volailles est primordial pour assurer leur santé et leur robustesse.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
      <DurabiliteIcon />
    ),
    title: "Durabilité",
    paragraph: "Nous adoptons des pratiques agricoles durables pour minimiser notre impact sur l'environnement et favoriser la biodiversité. Nous nous engageons à utiliser des méthodes respectueuses de l'environnement, afin de préserver les ressources naturelles pour les générations futures.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: (
      <TraceabilityIcon /> 
    ),
    title: "Traçabilité",
    paragraph: "Nous assurons une traçabilité complète de nos dindes, de l'élevage à la vente, offrant ainsi transparence et confiance à nos clients. Chaque étape du processus est rigoureusement contrôlée pour garantir la qualité et la sécurité de nos produits.",
    btn: "Learn More",
    btnLink: "/#",
  },
];
export default responsesData;
