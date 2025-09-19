// src/utils/dataLayer.ts

// Define a type for the window object to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Define a base structure for our events
interface EventData {
  event: string;
  category: string;
  action: string;
  label?: string;
  [key: string]: any;
}

/**
 * Pushes an event to the Google Tag Manager dataLayer.
 * Ensures window.dataLayer is available.
 */
export const pushToDataLayer = (data: EventData) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      // Clear previous user_data to avoid accidental carryover
      'user_data': undefined, 
      ...data,
    });
  }
};

// --- Specific Event Functions ---

/**
 * Event for generic button or link clicks.
 * @param action The specific action or name of the click (e.g., "Start My Project").
 * @param category The section/category of the click (e.g., "Hero", "Services").
 * @param label An optional label for more details (e.g., the URL, "WhatsApp Icon").
 */
export const trackClick = (category: string, action: string, label?: string) => {
  pushToDataLayer({
    event: 'custom_click',
    category,
    action,
    label,
  });
};


/**
 * The main conversion event for lead generation.
 * This should be fired upon successful form submission.
 * @param formData The data submitted by the user.
 */
export const trackLeadGeneration = (formData: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
}) => {
  pushToDataLayer({
    event: 'generate_lead',
    category: 'Conversion',
    action: 'Contact Form Submit',
    label: `Service: ${formData.service || 'Not Specified'}`,
    
    // --- Data for Enhanced Conversions ---
    // GTM and Ads platforms will automatically detect and hash this data.
    // Ensure user has given consent before collecting and sending.
    user_data: {
      email: formData.email,
      phone_number: formData.phone.replace(/[^0-9+]/g, ''), // Clean phone number
      // address: {
      //   first_name: formData.name.split(' ')[0],
      //   last_name: formData.name.split(' ').slice(1).join(' ')
      // } // Uncomment and adapt if you collect address fields
    },
    service_interest: formData.service || 'Not Specified',
    company_name: formData.company || 'Not Specified'
  });
};