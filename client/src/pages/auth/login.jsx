import CommonForm from "@/components/common/Form";
import { loginFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";

const initialState = {
  email: "",
  password: "",
};
const AuthLogin = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [formdata, setFormData] = useState(initialState);

  function onSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(formdata)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
      console.log(data);
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center ">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p>
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formdata}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthLogin;
