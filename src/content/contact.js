// Text and structured content for the Contact page (src/pages/Contact.jsx).

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const PHONE = "+91 96405 47878";
export const EMAIL = "elitehomeinspections.info@gmail.com";

export const contactDetails = [
  { icon: Phone, label: "Call us", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email us", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: "Service area", value: "Hyderabad and surrounding areas" },
  { icon: Clock, label: "Hours", value: "Mon – Sat, 7 AM – 7 PM. Sunday by appointment." },
];

export const propertyTypes = [
  "1BHK flat",
  "2BHK flat",
  "3BHK flat or larger",
  "Villa or independent house",
  "Under construction",
  "Other",
];

export const serviceOptions = [
  "Inspection",
  "Multi Stage Inspection",
  "Dampness Inspection",
  "Not sure yet",
];
