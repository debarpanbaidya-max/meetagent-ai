import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { SignUpView } from "@/Modules/ui/views/sign-up-view";
//import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }

  return <SignUpView />;
};

export default Page;

//http://localhost:3000/sign-up
// to  

//http://localhost:3000/auth/sign-up 