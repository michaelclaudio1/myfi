// Taken from Clerk documentation

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      fallbackRedirectUrl={"/dashboard"}
      signUpFallbackRedirectUrl={"/wizard"}
    />
  );
}
