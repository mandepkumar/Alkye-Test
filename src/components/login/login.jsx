import { WizardForm, WizardSections } from "react-multistep-wizard-form";
import AppLogo from "../app-logo";
import LoginStep1 from "./login-steps/login-step1";
import LoginStep2 from "./login-steps/login-step2";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";

const Login = () => {
  const [formData, setFormData] = useState({});
  const { user, setUser } = useAuth();
  const getValue = (id) => formData[id] ?? "";
  const handleOnChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  const handleSubmitForm = () => {
    fetch("https://untitled-twkmuar27a-uc.a.run.app/api/login/", {
      method: "POST",
      headers: {
        "Context-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
    console.log("handle", formData, user);
  };
  return (
    <div className="bg-gray py-10 md:py-16 px-8 md:px-12 ">
      <div className="bg-secondary py-10 md:py-16 px-8 md:px-12 rounded-3xl max-w-screen-xl">
        <AppLogo className="pb-8 md:pb-14" />
        <WizardForm onSubmitWizardForm={handleSubmitForm}>
          <WizardSections>
            <LoginStep1 getValue={getValue} handleOnChange={handleOnChange} />
            <LoginStep2 getValue={getValue} handleOnChange={handleOnChange} />
          </WizardSections>
        </WizardForm>
      </div>
    </div>
  );
};

export default Login;
