import { z } from "zod";

export const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Please enter a valid email address");

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number");

export const nameSchema = z
  .string()
  .min(1, "Name is required")
  .max(100, "Name is too long");

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});

export const signupSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  company: z.string().optional(),
  password: passwordSchema,
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;

/**
 * Maps Supabase auth errors to user-friendly messages
 */
export function getAuthErrorMessage(error: string): string {
  const errorMap: Record<string, string> = {
    "Invalid login credentials": "Invalid email or password. Please try again.",
    "Email not confirmed": "Please check your email and confirm your account before signing in.",
    "User already registered": "An account with this email already exists. Please sign in instead.",
    "Password should be at least 6 characters": "Password must be at least 8 characters long.",
    "Unable to validate email address: invalid format": "Please enter a valid email address.",
    "Signup requires a valid password": "Please enter a valid password.",
    "Email rate limit exceeded": "Too many attempts. Please try again later.",
    "For security purposes, you can only request this once every 60 seconds": "Please wait a moment before trying again.",
  };

  // Check for partial matches
  for (const [key, message] of Object.entries(errorMap)) {
    if (error.includes(key)) {
      return message;
    }
  }

  // Check for specific error patterns
  if (error.includes("already registered") || error.includes("already exists")) {
    return "An account with this email already exists. Please sign in instead.";
  }

  if (error.includes("rate limit") || error.includes("too many")) {
    return "Too many attempts. Please try again in a few minutes.";
  }

  if (error.includes("network") || error.includes("fetch")) {
    return "Network error. Please check your connection and try again.";
  }

  return "An unexpected error occurred. Please try again.";
}
