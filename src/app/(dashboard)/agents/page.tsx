import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { AgentsView, AgentsViewError, AgentsViewLoading } from "@/Modules/agents/ui/views/agents-view";
import { Suspense } from "react";
import { LoadingState } from "@/components/loading-state";
//import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import {ErrorBoundary} from "react-error-boundary";
import { AgentsListHeader } from "@/Modules/agents/ui/components/agents-list-header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SearchParams } from "nuqs";
import { loadSearchParams } from "@/Modules/agents/params";
//import { redirect } from "next/dist/server/api-utils";
//import { AgentsListHeader } from "@/Modules/dashboard/ui/components/list-header";

interface Props {
  searchParams: Promise<SearchParams>;
}


const Page = async ({searchParams}:Props) => {
  const filters =await loadSearchParams(searchParams)
  
  const session = await auth.api.getSession({
  headers: await headers(),
});

if (!session) {
  redirect("/sign-in");
}
 const queryClient = getQueryClient();

void queryClient.prefetchQuery(
  trpc.agents.getMany.queryOptions({
    ...filters,
  
  })
);

  return (
    <>
      <AgentsListHeader/>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<AgentsViewLoading />}>
          <ErrorBoundary fallback={<AgentsViewError />}>
            <AgentsView />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
}; 

export default Page;