import { SignUp } from "@clerk/nextjs"

export const metadata = {
  title: "Sign Up",
};

const SignupPage = () => {
  return (
    <SignUp forceRedirectUrl="/" signInForceRedirectUrl="/" />
  )
}

export default SignupPage
