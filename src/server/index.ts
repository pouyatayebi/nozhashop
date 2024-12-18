// import { neon } from "@neondatabase/serverless"
// import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "@/server/schema"

// const sql = neon(process.env.POSTGRES_URL!)
// export const db = drizzle(sql, { schema, logger: true })


import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle(process.env.DATABASE_URL!,{ schema, logger: true });

