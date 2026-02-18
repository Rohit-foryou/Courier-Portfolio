export type ChatResponse = {
  message: string;
  options: string[];
};

export const chatResponses: Record<string, ChatResponse> = {
  greeting: {
    message:
      "Hi 👋 I’m the Kamlesh Mailing Assistant. I can help you with India Post mailing services without queues or confusion.",
    options: [
      "Speed Post & Registered Post",
      "Bulk / Business Mail",
      "Why choose Kamlesh Mailing?",
      "Contact details",
    ],
  },

  "Speed Post & Registered Post": {
    message:
      "We handle Speed Post and Registered Post through our authorized India Post franchise.\n\n✔ No long queues\n✔ Correct documentation\n✔ Tracking assistance\n✔ PAN India reach",
    options: ["Pricing info", "Bulk / Business Mail", "Contact details"],
  },

  "Bulk / Business Mail": {
    message:
      "We support bulk mailing for law firms, banks, and businesses.\n\nWe manage sorting, submission, and tracking assistance so you save time.",
    options: ["Who we serve", "Contact details"],
  },

  "Why choose Kamlesh Mailing?": {
    message:
      "We’re an authorized Post Office Franchise trusted by businesses.\n\n✔ Save time\n✔ Avoid confusion\n✔ Reliable India Post handling",
    options: ["Speed Post & Registered Post", "Contact details"],
  },

  "Who we serve": {
    message:
      "Our priority clients include:\n• Legal & law firms\n• Banks\n• Businesses\n• Individuals with regular mailing needs",
    options: ["Contact details"],
  },

  "Pricing info": {
    message:
      "India Post pricing is standardized.\n\nWe help you select the correct service and handle the process smoothly. Final pricing is confirmed at our office.",
    options: ["Contact details"],
  },

  "Contact details": {
    message:
      "📍 Uttam Nagar, New Delhi\n📞 +91-8383866968\n✉️ akhileshpr125@gmail.com\n\nYou can also visit our Contact page.",
    options: [],
  },
};
