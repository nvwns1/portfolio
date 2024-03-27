import { IFormdata } from "@/components/Intro/Intro";

export function validateFormData(formData: IFormdata) {
  const errors: any = {};

  // Check if name is not empty
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  // Check if email is a valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email.trim())) {
    errors.email = "Invalid email format";
  }

  // Check if description is not empty
  if (!formData.description.trim()) {
    errors.description = "Description is required";
  }

  return errors;
}
