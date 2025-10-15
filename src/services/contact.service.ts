import { API_CONFIG } from '@/config/api.config';
import { ContactFormData } from '@/types/contact.types';

interface ContactFormPayload {
  websiteMappingId: string;
  name: string;
  jobTitle: string;
  email: string;
  companyName: string;
  message?: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<void> => {
  const payload: ContactFormPayload = {
    websiteMappingId: API_CONFIG.WEBSITE_MAPPING_ID,
    name: formData.name,
    jobTitle: formData.jobTitle,
    email: formData.email,
    companyName: formData.companyName,
    message: formData.message || undefined,
  };

  const response = await fetch(API_CONFIG.CONTACT_FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to submit contact form');
  }

  return response.json();
};
