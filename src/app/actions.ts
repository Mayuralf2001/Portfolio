'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import ContactEmail from '@/emails/contact-email';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type FormState = {
  message: string;
  errors: Record<string, string[] | undefined> | {};
  success: boolean;
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set.');
    return {
      message: 'Email service is not configured. Please contact the administrator.',
      success: false,
      errors: {},
    };
  }

  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;
  
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'mayurtawade94@gmail.com',
      reply_to: email,
      subject: subject,
      react: ContactEmail({ name, email, message }),
    });

    return {
      message: "Thank you! Your message has been sent successfully.",
      success: true,
      errors: {},
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      success: false,
      errors: {},
    };
  }
}
