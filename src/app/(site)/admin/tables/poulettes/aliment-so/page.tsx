// import Breadcrumb from "@/components/Common/Breadcrumb";
import AlimentSO from "@/components/Admin/Tables/Poulettes/Aliment-SO";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mostafa PC | Sabri Élevage",
  description: "This is Mostapha PC Tableau Aliment SO",
};

const AlimentSoPage = () => {
  return (
    <main>
      <AlimentSO />
    </main>
  );
};

export default AlimentSoPage;
