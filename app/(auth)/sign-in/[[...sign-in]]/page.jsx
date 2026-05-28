import { SignIn } from '@clerk/nextjs'

export const metadata = {
  title: "Sign In",
};

const SigninPage = () => {
  return (
    <SignIn forceRedirectUrl="/" signUpForceRedirectUrl="/" />
  )
}

export default SigninPage
