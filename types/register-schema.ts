import * as z from 'zod';

const serviceEnum = z.enum([
  'Web Development',
  'MVP Entwicklung',
  'Prozess Automatisierung',
  'Ich brauche alles',
]);

export const RegisterSchema = z.object({
  service: serviceEnum,
  budget: z.string(),
  description: z.string(),
  deadline: z.string(),
  name: z.string(),
  contactLink: z.string(),
  email: z.string().email(),
  success: z.string().optional(),
});
