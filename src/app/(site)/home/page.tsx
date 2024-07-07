// import Breadcrumb from "@/components/Common/Breadcrumb";
import Home from "@/components/Home";
// import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tableaux | Sabri elevage",
  description: "This is Pourquoi Nous page description",
};

const HomePage = () => {
  return (
    <main>
      <Home searchParams={{
        q: "",
        offset: ""
      }} />
    </main>
  );
};

export default HomePage;
