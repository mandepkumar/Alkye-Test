import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWizardForm } from "react-multistep-wizard-form";

const LoginStep1 = ({ getValue, handleOnChange }) => {
  const { nextWizardStep } = useWizardForm();
  return (
    <>
      <h5>STEP 1</h5>
      <div className="flex flex-wrap">
        <div className="basis-1/2 pr-10 md:pr-12">
          <h2>Enter your email address to continue</h2>
          <p>
            Log in to your account. If you don’t have one, you will be prompted
            to create one
          </p>
        </div>
        <div className="basis-1/2 flex flex-col gap-4">
          <Input
            id="username"
            type="email"
            placeholder="Email"
            value={getValue("username")}
            onChange={handleOnChange}
          />
          <div className="flex justify-end">
            <Button onClick={nextWizardStep}>Continue</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginStep1;
