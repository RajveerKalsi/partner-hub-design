// API Configuration
// Note: Lovable doesn't support .env files. 
// If websiteMappingId is sensitive, consider using Lovable Cloud for secure storage.
// If it's a public identifier, you can store it here directly.

export const API_CONFIG = {
  CONTACT_FORM_ENDPOINT: 'https://dev.anarix.ai/api/auth/d2c-contact-form/submit',
  WEBSITE_MAPPING_ID: '', // Add your websiteMappingId here
} as const;
