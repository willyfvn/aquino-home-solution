import { z } from "zod";
import { SERVICES, FILE_CONSTRAINTS } from "./constants";

const serviceIds = SERVICES.map((s) => s.id) as [string, ...string[]];

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20)
    .regex(/^[\d\s\-\+\(\)\.]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  zip: z
    .string()
    .length(5, "ZIP code must be 5 digits")
    .regex(/^\d{5}$/, "ZIP code must be 5 digits")
    .optional(),
  service: z.enum(serviceIds, { error: "Please select a service" }),
  message: z.string().max(1000, "Message must be under 1000 characters").optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

export const fileMetaSchema = z.object({
  name: z.string(),
  type: z.enum(["image/jpeg", "image/png", "image/webp"] as [string, ...string[]]),
  size: z
    .number()
    .max(FILE_CONSTRAINTS.maxSizeBytes, `File must be under ${FILE_CONSTRAINTS.maxSizeMB}MB`),
});
