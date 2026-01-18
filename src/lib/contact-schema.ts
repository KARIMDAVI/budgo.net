import { z } from 'zod';

export const contactFormSchema = z.object({
  projectType: z.enum(['ios', 'web', 'design', 'other'], {
    message: 'Please select a project type',
  }),
  budget: z.enum(['<5k', '5k-10k', '10k-25k', '>25k'], {
    message: 'Please select a budget range',
  }),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  details: z.string().min(10, 'Please provide some project details'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const STEPS = [
  { id: 'type', title: 'Select Environment' },
  { id: 'budget', title: 'Resource Allocation' },
  { id: 'details', title: 'Project Config' },
  { id: 'review', title: 'Pre-flight Check' },
] as const;
