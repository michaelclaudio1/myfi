"use server";

import { CurrencyComboBox } from "@/components/CurrencyComboBox";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="container flex max-w-2xl flex-col items-center justify-between gap-4">
      <div>
        <h1 className="text-center text-3xl">
          Welcome, <span className="ml-2 font-bold">{user.firstName}</span>
        </h1>
        <h2 className="mt-4 text-center text-base text-muted-foreground">
          Let&apos;s get started by adding your first account!
        </h2>

        <h3 className="mt-2 text-center text-sm text-muted-foreground">
          You can always add more later.
        </h3>
      </div>
      <Separator />

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Link Account</CardTitle>
          <CardDescription>Connections are handled with Plaid</CardDescription>
          <CardContent>
            <h1>THIS IS WHERE THE PLAID LINK COMPONENT GOES</h1>
            <h1>REPLACE THE BUTTON BELOW WITH LINK COMPONENT</h1>
            <CurrencyComboBox />
          </CardContent>
        </CardHeader>
      </Card>
      <Separator />
      <Button className="w-full" asChild>
        <Link href={"/dashboard"}>Temporary Button, Go to dashboard</Link>
      </Button>
      <div className="mt-8">
        <Logo />
      </div>
    </div>
  );
}

export default page;
