import AjouterAchat from "@/components/Admin/Tables/Poulettes/Poussins/AjouterAchat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mostafa PC | Sabri Élevage",
  description: "This is Mostapha PC Tableau Poussins",
};

const AjouterAchatPage = () => {
  return (
    <main>
      <AjouterAchat />
    </main>
  );
};

export default AjouterAchatPage;
