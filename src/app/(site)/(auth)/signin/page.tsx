import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Se Connecter | Sabri Élevage",
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
