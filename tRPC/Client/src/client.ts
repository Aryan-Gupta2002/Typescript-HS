import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../Server/src/api";
const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

async function main() {
  console.log("Hello from main");
  const result = await client.logServer.mutate("Hello There I am a string");
  console.log(result);
}
main();
