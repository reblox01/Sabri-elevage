import AjouterAchat from "@/components/Admin/Tables/Poulettes/Reglement/Ajouter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mostafa PC | Sabri Élevage",
  description: "This is Mostapha PC Tableau Reglement",
};

const AjouterAchatPage = () => {
  return (
    <main>
      <AjouterAchat />
    </main>
  );
};

export default AjouterAchatPage;
