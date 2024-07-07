import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Se Connecter | Sabri Élevage",
  description: "Connectez-vous à Sabri Élevage pour gérer votre compte et accéder à nos services spécialisés en élevage de poulets vivants de qualité.",
  keywords: "Sabri Élevage, connexion, élevage de poulets, qualité, bien-être animal, agriculture",
  robots: "noindex, nofollow",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Se Connecter" />

      <Signin />
    </>
  );
};

export default SigninPage;
