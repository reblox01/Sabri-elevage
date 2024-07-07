import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Sabri Élevage",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page non trouvée" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
