// import Breadcrumb from "@/components/Common/Breadcrumb";
import Dindes from "@/components/Admin/Tables/Dindes";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dindes | Sabri Élevage",
  description: "This is Pourquoi Nous page description",
};

const DindesPage = () => {
  return (
    <main>
      <Dindes searchParams={{
        q: "",
        offset: ""
      }} />
    </main>
  );
};

export default DindesPage;
