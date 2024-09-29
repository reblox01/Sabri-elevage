import AjouterAchat from "@/components/Admin/Tables/Dindes/Reglement/Ajouter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dindes | Sabri Élevage",
  description: "This is Vente Global Regelement Tableau",
};

const AjouterAchatPage = () => {
  return (
    <main>
      <AjouterAchat />
    </main>
  );
};

export default AjouterAchatPage;
