import Aliment2sa from "@/components/Admin/Tables/Poulettes/Aliment-2-SA";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mostafa PC | Sabri Élevage",
  description: "This is Mostapha PC Tableau Aliment 2 SA",
};

const Aliment2saPage = () => {
  return (
    <main>
      <Aliment2sa />
    </main>
  );
};

export default Aliment2saPage;
