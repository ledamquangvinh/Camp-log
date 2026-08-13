import { NextResponse } from "next/server";

import sql from "@/app/lib/db";
import { campsites } from "@/app/lib/placeholder-data";

async function seedCampsite() {
  await sql`
    CREATE TABLE IF NOT EXISTS campsites(
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      cover_image VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;

  const insertCampsites = await Promise.all(
    campsites.map(
      (campsite) => sql`
        INSERT INTO campsites(
          slug,
          name,
          location,
          description,
          cover_image
        )
        VALUES(
          ${campsite.slug},
          ${campsite.name},
          ${campsite.location},
          ${campsite.description},
          ${campsite.coverImage}
        )
        ON CONFLICT (id)
        DO NOTHING;
      `,
    ),
  );

  return insertCampsites;
  
}

export async function GET() {
  await seedCampsite();

  return Response.json({
    message: "Database seeded successfully",
  });
}
