import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

// Force dotenv to read .env.local instead of the default .env
dotenv.config({ path: './.env.local' });

if (!process.env.DATABASE_URL) {
  console.error("❌ Error: DATABASE_URL is undefined! Check if your variable name in .env.local matches exactly.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

async function test() {
  try {
    const res = await sql`SELECT NOW();`;
    console.log("✅ Success! Server time:", res[0].now);
  } catch (err) {
    console.error("❌ Connection failed:", err);
  }
}

test();
