import AjouterAchat from "@/components/Admin/Tables/Dindes/Vente-Glo/Ajouter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dindes | Sabri Élevage",
  description: "This is Mostapha PC Tableau Dindes",
};

const AjouterAchatPage = () => {
  return (
    <main>
      <AjouterAchat />
    </main>
  );
};

export default AjouterAchatPage;