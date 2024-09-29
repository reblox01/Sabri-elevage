// import Breadcrumb from "@/components/Common/Breadcrumb";
import Reglement from "@/components/Admin/Tables/Dindes/Reglement";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dindes | Sabri Élevage",
  description: "This is Vente Global Regelement Tableau",
};

const ReglementPage = () => {
  return (
    <main>
      <Reglement />
    </main>
  );
};

export default ReglementPage;
