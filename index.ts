import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json({ message: "Hello from n8n pipeline test" }));

export default app;
