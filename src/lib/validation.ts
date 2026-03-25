import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1).max(200),
  company: z.string().min(1).max(200),
  email: z.string().email().max(320),
  phone: z.string().min(4).max(30),
  service: z.string().max(100).optional(),
  message: z.string().max(5000).optional(),
});

export const healthCheckSchema = z.object({
  name: z.string().min(1).max(200),
  company: z.string().min(1).max(200),
  email: z.string().email().max(320),
  phone: z.string().min(4).max(30),
  employees: z.string().max(50).optional(),
  currentProvider: z.string().max(200).optional(),
  painPoint: z.string().max(200).optional(),
  preferredTime: z.string().max(100).optional(),
});
