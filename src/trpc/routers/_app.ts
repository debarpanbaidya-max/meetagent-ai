//import { agentsRouter } from '@/modules/agents/server/procedures';

import { agentsRouter } from '@/Modules/agents/server/procedures';
import { createTRPCRouter } from '../init';
import { meetingsRouter } from '@/Modules/meetings/server/procedures';
import { meetings } from '@/db/schema';

export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: meetingsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;