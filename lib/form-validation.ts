import { z } from "zod";
import { formatE164, validateMobile, type PhoneValue } from "@/lib/phone";

export function validateRequiredName(value: string): string | null {
  const v = value.trim();
  if (!v) return "Please enter your name.";
  if (v.length < 2) return "Name must be at least 2 characters.";
  return null;
}

export function validateEmail(value: string): string | null {
  const v = value.trim();
  if (!v) return "Please enter your email address.";
  if (/\s/.test(v)) return "Email address cannot contain spaces.";
  if (!v.includes("@")) {
    return "Please enter a valid email address (e.g. name@company.com).";
  }

  const [local, domain, ...rest] = v.split("@");
  if (rest.length > 0 || !local || !domain) {
    return "Please enter a valid email address (e.g. name@company.com).";
  }
  if (!domain.includes(".")) {
    return "Please enter a valid email address (e.g. name@company.com).";
  }

  // local@domain.tld — TLD must be letters only (rejects name@12121, name@x.12)
  const emailRe =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;
  if (!emailRe.test(v) || v.endsWith(".")) {
    return "Please enter a valid email address (e.g. name@company.com).";
  }
  return null;
}

export function validateRequiredMessage(value: string, min = 10): string | null {
  const v = value.trim();
  if (!v) return "Please enter your message.";
  if (v.length < min) return `Message must be at least ${min} characters.`;
  return null;
}

export type ContactFormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "phone" | "message", string>
>;

export function validateContactField(
  field: keyof ContactFieldErrors,
  data: ContactFormFields,
  phone: PhoneValue,
): string | null {
  switch (field) {
    case "name":
      return validateRequiredName(data.name);
    case "email":
      return validateEmail(data.email);
    case "phone":
      return validateMobile(phone, { required: true });
    case "message":
      return validateRequiredMessage(data.message, 10);
    default:
      return null;
  }
}

export function validateContactForm(
  data: ContactFormFields,
  phone: PhoneValue,
): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  (["name", "email", "phone", "message"] as const).forEach((field) => {
    const err = validateContactField(field, data, phone);
    if (err) errors[field] = err;
  });
  return errors;
}

export function isContactFormValid(
  data: ContactFormFields,
  phone: PhoneValue,
): boolean {
  return Object.keys(validateContactForm(data, phone)).length === 0;
}

/** Business submission — validate a single zod field by name */
export function validateZodField(
  schema: z.ZodObject<z.ZodRawShape>,
  name: string,
  value: unknown,
): string | null {
  const shape = schema.shape as Record<string, z.ZodTypeAny>;
  const fieldSchema = shape[name];
  if (!fieldSchema) return null;
  const result = fieldSchema.safeParse(value);
  if (result.success) return null;
  return result.error.issues[0]?.message ?? "Invalid value.";
}

export function validateBusinessPhone(phone: PhoneValue): string | null {
  return validateMobile(phone, { required: true });
}

export { formatE164 };
