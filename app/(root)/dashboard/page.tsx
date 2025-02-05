import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import CreateTransactionDialog from "./_components/createTransactionDialog";
import Overview from "./_components/Overview";
import History from "./_components/History";

async function page() {
  // Ensure user is signed in
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  //  Check user's settings exists, if not redirect them to set them
  //
  //  Eventually, this will check that the user has at least 1 bank
  //  connected to their account when Plaid gets implemented
  const userSettings = await prisma.userSettings.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!userSettings) {
    redirect("/wizard");
  }

  return (
    <div className="h-full w-full bg-background">
      <div className="border-b bg-card w-full">
        <div className="container flex flex-wrap items-center justify-between gap-6 p-8">
          <p className="text-3xl font-bold">
            {user.firstName ? `Hello, ${user.firstName}!` : `Welcome Back!`}
          </p>
          <div className="flex items-center gap-3">
            <CreateTransactionDialog
              trigger={
                <Button
                  variant={"outline"}
                  className="border-emerald-500 bg-emerald-950 text-white hover:bg-emerald-700 hover:text-white"
                >
                  New income
                </Button>
              }
              type="income"
            />
            <CreateTransactionDialog
              trigger={
                <Button
                  variant={"outline"}
                  className="border-rose-500 bg-rose-950 text-white hover:bg-rose-700 hover:text-white"
                >
                  New expense
                </Button>
              }
              type="expense"
            />
          </div>
        </div>
      </div>
      <Overview userSettings={userSettings} />
      <History userSettings={userSettings} />
    </div>
  );
}

export default page;
