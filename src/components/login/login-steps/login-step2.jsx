import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWizardForm } from "react-multistep-wizard-form";

const LoginStep2 = ({ getValue, handleOnChange }) => {
  const { submitWizardForm } = useWizardForm();
  return (
    <>
      <h5>STEP 2</h5>
      <div className="flex flex-wrap">
        <div className="basis-1/2 pr-10 md:pr-12">
          <h3>Create an account to continue</h3>
          <p>
            You’ll be able to log in to Dingoo with this email address and
            passwor
          </p>
        </div>
        <div className="basis-1/2 flex flex-col gap-4">
          <div>
            <Label htmlFor="password">
              Enter a password to create your account with
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Choose a password"
              value={getValue("password")}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex justify-end">
            <Button onClick={submitWizardForm}>Agree & Continue</Button>
          </div>
        </div>
        <p>
          {`Dingoo will use your data to personalise and improve your Dingoo
      experience and to send you information about Dingoo. You can change
      your communication preferences anytime. We may use your data as
      described in our Privacy Policy, including sharing it with The Test of
      Companies. By clicking "Agree & Continue", you agree to our Subscriber
      Agreement and acknowledge that you have read our Privacy Policy and
      Collection Statement.`}
        </p>
      </div>
    </>
  );
};

export default LoginStep2;
