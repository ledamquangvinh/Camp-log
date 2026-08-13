"use server";
import { CampsiteSchema, CreateCampsite, UpdateCampsite } from "./schema";
import sql from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createCampsite(formData: FormData) {
  console.log(Object.fromEntries(formData.entries()));
  const validateFields = CreateCampsite.safeParse({
    slug: formData.get("slug"),
    name: formData.get("name"),
    location: formData.get("location"),
    description: formData.get("description"),
    coverImage: formData.get("coverImage"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields",
    };
  }

  const { slug, name, location, description, coverImage } = validateFields.data;

  try {
    await sql`
      INSERT INTO campsites (slug, name, location, description, cover_image)
      VALUES (${slug}, ${name}, ${location}, ${description}, ${coverImage})
    `;
  } catch (error) {
    // console.error("DATABASE ERROR:", error);
    // throw new Error("Database Error: Failed to create campsite");
    return {
      message: "Database Error: Failed to create campsite",
    };
  }

  revalidatePath("/admin");
  revalidatePath("/campsites");

  redirect("/campsites");
}

export async function updateCampsite(id: number, formData: FormData) {
  const validateFields = CreateCampsite.safeParse({
    slug: formData.get("slug"),
    name: formData.get("name"),
    location: formData.get("location"),
    description: formData.get("description"),
    coverImage: formData.get("coverImage"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields",
    };
  }

  console.log(validateFields.data);

  const { slug, name, location, description, coverImage } = validateFields.data;

  try {
    await sql`
      UPDATE campsites
      SET slug = ${slug}, name = ${name}, location = ${location}, description = ${description}, cover_image = ${coverImage}
      WHERE id = ${id}
    `;
    console.log("Inserted")
  } catch (error) {
    console.error("DATABASE ERROR:", error);
    throw new Error("Database Error: Failed to create campsite");
    // return {
    //   message: "Database Error: Failed to create campsite",
    // };
  }
  revalidatePath("/admin");
  revalidatePath("/campsites");

  redirect("/campsites");
}

export async function deleteCampsite(id: number) {
  await sql`DELETE FROM campsites WHERE id = ${id}`;
  revalidatePath("/admin");
}