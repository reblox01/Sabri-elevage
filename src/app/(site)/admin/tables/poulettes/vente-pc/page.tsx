// import Breadcrumb from "@/components/Common/Breadcrumb";
import VentePC from "@/components/Admin/Tables/Poulettes/Vente-PC";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mostafa PC | Sabri Élevage",
  description: "This is Mostapha PC Tableau Vente PC",
};

const VentePcPage = () => {
  return (
    <main>
      <VentePC />
    </main>
  );
};

export default VentePcPage;
