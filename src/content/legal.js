// Text for the legal pages (src/pages/Legal.jsx). Written for a Hyderabad
// business under Indian law. Have a lawyer review before relying on it, and
// update LAST_UPDATED whenever the wording changes.

export const LAST_UPDATED = "25 September 2026";

const BUSINESS = "Akshara Elite Home Inspections";
const EMAIL = "elitehomeinspections.info@gmail.com";
const PHONE = "+91 96405 47878";

// Each section: { title, body: [paragraph strings or { list: [...] }] }
export const legalPages = {
  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy",
    summary: "What personal data we collect, why we collect it, and the choices you have.",
    sections: [
      {
        title: "Who we are",
        body: [
          `${BUSINESS} ("we", "us") is a home inspection business based in Hyderabad, Telangana, India. We are responsible for the personal data described in this policy.`,
          `You can reach us at ${EMAIL} or ${PHONE}.`,
        ],
      },
      {
        title: "What we collect",
        body: [
          "We only collect what we need to answer your enquiry and carry out your inspection:",
          {
            list: [
              "Details you give us: your name, phone number, email address, the type and location of the property, and anything you write in a message.",
              "Booking details: the property address, access arrangements and any information you share about the property.",
              "Inspection records: photos and notes of the property's condition. We photograph the property, not people, and avoid personal belongings where we can.",
              "Basic technical data: like most websites, our hosting provider may keep standard server logs (such as IP address, browser type and pages requested) for security and to keep the site running.",
            ],
          },
          "This website does not use analytics, advertising or tracking cookies.",
        ],
      },
      {
        title: "How we use it",
        body: [
          {
            list: [
              "To reply to your enquiry and give you a quote.",
              "To schedule, carry out and follow up on your inspection.",
              "To prepare and send your inspection report.",
              "To keep the records we must keep by law, such as invoices.",
              "To keep our website and systems secure.",
            ],
          },
          "We do not send marketing messages unless you ask us to, and we never sell your personal data.",
        ],
      },
      {
        title: "Consent",
        body: [
          "Under the Digital Personal Data Protection Act, 2023, we use your personal data with your consent, which you give when you contact us or book an inspection, or where the law otherwise allows.",
          "You can withdraw your consent at any time by emailing us. Withdrawing consent does not affect anything we did before, but we may not be able to continue a booking without the details we need.",
        ],
      },
      {
        title: "Who we share it with",
        body: [
          {
            list: [
              "People you ask us to share your report with, such as your agent, lawyer or lender.",
              "Service providers who help us run our business, such as email, hosting and secure file storage. They may only use your data to provide their service to us.",
              "Authorities, where the law requires it.",
            ],
          },
          "Some of these providers may store data outside India. Where they do, we use reputable providers with appropriate safeguards.",
        ],
      },
      {
        title: "How long we keep it",
        body: [
          "We keep enquiry details only as long as needed to respond and follow up. We keep booking records and inspection reports for as long as they are useful to you and as required by law (for example, tax and accounting rules), and then delete them securely.",
        ],
      },
      {
        title: "How we protect it",
        body: [
          "We use reasonable security practices to protect your personal data from loss, misuse and unauthorised access, and limit access to the people who need it to serve you. No method of sending or storing data is completely secure, but we take care to keep yours safe.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "Subject to the law, you can ask us to:",
          {
            list: [
              "tell you what personal data we hold about you and how we use it;",
              "correct, complete or update it;",
              "erase it when it is no longer needed;",
              "withdraw your consent;",
              "nominate someone to act for you if you are unable to.",
            ],
          },
          `Email ${EMAIL} with your request. We aim to respond within 30 days.`,
        ],
      },
      {
        title: "Children",
        body: [
          "Our services are for adults. We do not knowingly collect personal data from anyone under 18.",
        ],
      },
      {
        title: "Grievances",
        body: [
          `If you have a concern about how we handle your personal data, contact our Grievance Officer at ${EMAIL} or ${PHONE}. We will acknowledge your complaint and aim to resolve it within 30 days. If you are not satisfied, you may approach the Data Protection Board of India.`,
        ],
      },
      {
        title: "Changes to this policy",
        body: [
          "We may update this policy from time to time. The date at the top shows when it last changed.",
        ],
      },
    ],
  },

  terms: {
    path: "/terms",
    title: "Terms & Conditions",
    summary: "The terms for booking an inspection with us and using this website.",
    sections: [
      {
        title: "About these terms",
        body: [
          `These terms apply when you use this website or book an inspection with ${BUSINESS}. By booking, you agree to them. Please also read our Privacy Policy and Inspection Disclaimer.`,
        ],
      },
      {
        title: "Our services",
        body: [
          "We carry out visual, non-invasive inspections of residential properties and report on their condition as seen on the day of the visit. The services and checks we offer are described on our Services page.",
        ],
      },
      {
        title: "Quotes and booking",
        body: [
          "Prices shown on this website are flat rates by home size and are a guide. We confirm the final price, date and scope with you when you book. An inspection is booked once we have confirmed it with you by phone, message or email.",
        ],
      },
      {
        title: "Access and your responsibilities",
        body: [
          {
            list: [
              "Make sure we can safely access the property at the agreed time, with permission from the owner, builder or occupant where needed.",
              "Where possible, have electricity and water connected so we can test them.",
              "Tell us about any known issues or safety hazards before the visit.",
            ],
          },
          "If we cannot access all or part of the property, we will note this in the report and those areas will not be inspected.",
        ],
      },
      {
        title: "Rescheduling and cancellation",
        body: [
          "Please let us know as early as possible if you need to reschedule or cancel. If we arrive and cannot carry out the inspection because access is not available, we may charge for the visit. Any charges will be agreed with you when you book.",
        ],
      },
      {
        title: "Payment",
        body: [
          "Payment terms, including when and how to pay, are confirmed when you book.",
        ],
      },
      {
        title: "Your report",
        body: [
          "Your report is prepared for you and the people you choose to share it with. It describes the condition we observed on the day of the inspection. Other people who rely on it without our agreement do so at their own risk.",
        ],
      },
      {
        title: "Limits of an inspection",
        body: [
          "An inspection is not a guarantee or warranty of the property's condition. Please read our Inspection Disclaimer for what an inspection can and cannot cover.",
        ],
      },
      {
        title: "Our liability",
        body: [
          "We carry out every inspection with reasonable care and skill. To the extent the law allows, our total liability for any claim relating to an inspection is limited to the fee you paid for it, and we are not liable for indirect or consequential loss. Nothing in these terms limits liability that cannot be limited by law.",
        ],
      },
      {
        title: "Using this website",
        body: [
          "The content of this website, including text, images and our logo, belongs to us or is used with permission. You may view and share it for personal use, but you may not copy it for commercial use or misuse the website.",
          "We work to keep information on this website accurate and up to date, but it is general information and may change without notice.",
        ],
      },
      {
        title: "Governing law",
        body: [
          "These terms are governed by the laws of India. Any dispute will be subject to the jurisdiction of the courts in Hyderabad, Telangana.",
        ],
      },
      {
        title: "Changes and contact",
        body: [
          `We may update these terms from time to time. The date at the top shows when they last changed. Questions? Email ${EMAIL} or call ${PHONE}.`,
        ],
      },
    ],
  },

  cookies: {
    path: "/cookie-policy",
    title: "Cookie Policy",
    summary: "What this website stores in your browser, and how to control it.",
    sections: [
      {
        title: "The short version",
        body: [
          "This website does not use analytics, advertising or tracking cookies. The only thing it stores in your browser is your cookie choice, so we don't ask you again on every visit.",
        ],
      },
      {
        title: "What cookies are",
        body: [
          "Cookies and similar technologies, such as local storage, are small pieces of data a website saves in your browser. Some are essential for a site to work; others track how you browse.",
        ],
      },
      {
        title: "What we store",
        body: [
          {
            list: [
              "Your consent choice (stored as \"akshara-consent\" in your browser's local storage). It records whether you allow optional cookies and when you chose. It stays until you clear your browser data or change your choice.",
            ],
          },
          "Our fonts and images are served from our own website, so your browser does not contact third-party font or tracking services when you visit.",
          "Our hosting provider may keep standard server logs for security, as described in our Privacy Policy.",
        ],
      },
      {
        title: "Optional cookies",
        body: [
          "We don't use any optional cookies today. If we ever add tools such as website analytics, we will update this policy and only switch them on if you have allowed optional cookies.",
        ],
      },
      {
        title: "Managing your choice",
        body: [
          "You can change your choice at any time on our Consent Preferences page. You can also clear or block cookies and local storage in your browser settings.",
        ],
      },
    ],
  },

  disclaimer: {
    path: "/disclaimer",
    title: "Inspection Disclaimer",
    summary: "What a home inspection can and cannot tell you.",
    sections: [
      {
        title: "A visual, non-invasive inspection",
        body: [
          "Our inspections are visual and non-destructive. We inspect areas that are safely and readily accessible on the day of the visit, using hand tools and testing equipment. We do not open walls, lift flooring, move furniture or belongings, or dismantle fittings.",
        ],
      },
      {
        title: "What may not be found",
        body: [
          {
            list: [
              "Defects hidden behind walls, under floors, above ceilings or behind furniture and fittings.",
              "Problems that only appear at certain times, such as leaks during heavy rain.",
              "Issues in areas we could not access, which we note in the report.",
            ],
          },
        ],
      },
      {
        title: "Not a guarantee",
        body: [
          "An inspection reports the condition we observed on the day. It is not a guarantee, warranty or insurance policy, and conditions can change after the inspection.",
        ],
      },
      {
        title: "Not a specialist certification",
        body: [
          "Our report is not a structural engineer's certificate, a legal title check, a valuation, or a check of building approvals. Where we recommend a specialist, such as a structural engineer or licensed electrician, please consult one before making decisions.",
        ],
      },
      {
        title: "Website information",
        body: [
          "Information on this website is general and for guidance only. It is not advice about any specific property.",
        ],
      },
    ],
  },
};

export const legalNav = [
  { to: legalPages.privacy.path, label: "Privacy Policy" },
  { to: legalPages.terms.path, label: "Terms & Conditions" },
  { to: legalPages.cookies.path, label: "Cookie Policy" },
  { to: legalPages.disclaimer.path, label: "Inspection Disclaimer" },
  { to: "/consent", label: "Consent Preferences" },
];
