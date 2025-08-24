// File: main.ts
import { Elysia } from "elysia";
import 'dotenv/config';
import { cors } from "@elysiajs/cors";
import authRoutes from "./routes/auth";
import {cookie} from "@elysiajs/cookie";

const app = new Elysia()
    .use(cookie())
    .use(cors({
        origin: ['http://localhost:5173'],
        credentials: true
    }))
    .use(authRoutes);

app.listen(3000, () => console.log("App listening on port 3000"));