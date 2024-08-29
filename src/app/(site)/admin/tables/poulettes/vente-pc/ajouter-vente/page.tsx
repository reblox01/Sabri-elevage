import AjouterVente from "@/components/Admin/Tables/Poulettes/Vente-PC/AjouterVente";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mostafa PC | Sabri Élevage",
  description: "This is Mostapha PC Tableau Vente PC",
};

const AjouterVentePage = () => {
  return (
    <main>
      <AjouterVente />
    </main>
  );
};

export default AjouterVentePage;
