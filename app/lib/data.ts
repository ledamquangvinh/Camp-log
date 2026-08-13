'use server';
import { Campsite } from "./definitions";
import sql  from "./db"

export async function fetchCampsites() {
  try {
    const data = await sql<Campsite[]>`
      SELECT
        id,
        slug,
        name,
        location,
        description,
        cover_image AS "coverImage"
      FROM campsites
    `;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch campsites.");
  }
}

export async function fetchCampsiteBySlug(slug: string) {
  try {
    const data = await sql<Campsite[]>`
      SELECT
        id,
        slug,
        name,
        location,
        description,
        cover_image AS "coverImage"
      FROM campsites
      WHERE slug = ${slug}
    `
    return data[0];
  }catch(error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch campsite by slug")
  }
}

export async function fetchCampsiteById(id: number) {
  try {
    const data = await sql<Campsite[]>`
      SELECT
        id,
        slug,
        name,
        location,
        description,
        cover_image AS "coverImage"
      FROM campsites
      WHERE id = ${id}
    `
    return data[0]
  } catch(error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch campsite by id")
  }
}
