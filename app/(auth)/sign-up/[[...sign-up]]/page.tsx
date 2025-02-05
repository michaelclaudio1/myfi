// Taken from Clerk documentation

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      fallbackRedirectUrl={"/wizard"}
      signInFallbackRedirectUrl={"/dashboard"}
    />
  );
}
