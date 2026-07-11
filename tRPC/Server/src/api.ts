import express from "express";
import cors from "cors";

import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const t = initTRPC.create();
const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    console.log("Hello Console");
    return "Hi returning";
  }),
  logToServer: t.procedure
    .input((v) => {
      if (typeof v === "string") return v;
      throw new Error("Invalid Input: Expected a string");
    })
    .mutation((req) => {
      console.log(`Client says: ${req.input}`);
      return true;
    }),
});

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/trpc", createExpressMiddleware({ router: appRouter }));
app.listen(3000, () => {
  console.log("Server Running");
});
export type AppRouter = typeof appRouter;
