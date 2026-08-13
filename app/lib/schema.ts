import { z } from "zod";

export const CampsiteSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Name of campsite is required"),
  slug: z.string().min(1, "Slug is required"),
  location: z.string().min(1, "Location is required"),
  description: z.string().min(1, "Description is required"),
  coverImage: z.string().min(1, "Cover image is required"),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const CreateCampsite = CampsiteSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateCampsite = CampsiteSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});