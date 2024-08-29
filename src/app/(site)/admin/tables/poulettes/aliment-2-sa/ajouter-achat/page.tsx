import AjouterAchat from "@/components/Admin/Tables/Poulettes/Aliment-2-SA/AjouterAchat";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mostafa PC | Sabri Élevage",
  description: "This is Mostapha PC Tableau Aliment Sahil",
};

const AjouterAchatPage = () => {
  return (
    <main>
      <AjouterAchat />
    </main>
  );
};

export default AjouterAchatPage;
