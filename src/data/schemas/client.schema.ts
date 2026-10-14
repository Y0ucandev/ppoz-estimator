import { z } from 'zod';

export const addressSchema = z.object({
  street: z.string().min(1),
  postalCode: z.string().regex(/^\d{2}-\d{3}$/),
  city: z.string().min(1)
});

export const clientSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  taxId: z
    .string()
    .regex(/^\d{10}$/)
    .optional(),
  address: addressSchema,
  email: z.email().optional(),
  phone: z.string().optional()
});

export const clientListSchema = z.array(clientSchema);
