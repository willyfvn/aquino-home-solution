export const BUSINESS = {
  name: "Aquino Home Solutions",
  phone: "(603) 408-4073",
  phoneRaw: "16034084073",
  whatsapp: "16034084073",
  email: "info@aquinohomesolutions.com",
  city: "Lowell",
  state: "MA",
  zip: "01850",
  address: "Lowell, MA 01850",
  description:
    "Licensed & insured HVAC and water heater specialists serving Lowell, MA and surrounding communities.",
  hours: {
    weekdays: "Mon–Fri: 7:00 AM – 7:00 PM",
    saturday: "Sat: 8:00 AM – 5:00 PM",
    sunday: "Sun: Emergency calls only",
  },
};

export const SERVICES = [
  {
    id: "air-conditioning",
    title: "AC – Air Conditioning",
    description: "High-efficiency cooling for homes and businesses.",
    icon: "Wind",
  },
  {
    id: "furnace",
    title: "Furnace",
    description: "Expert furnace installation and maintenance.",
    icon: "Flame",
  },
  {
    id: "boiler",
    title: "Boiler Systems",
    description: "High-performance boiler solutions built to last.",
    icon: "Gauge",
  },
  {
    id: "plumbing",
    title: "Plumbing Installation",
    description: "Full-service plumbing for new builds, renovations, and repairs.",
    icon: "Droplets",
  },
  {
    id: "emergency",
    title: "Emergency Service",
    description: "Urgent response when you have no heat or no hot water.",
    icon: "AlertTriangle",
  },
];

export const SERVICE_AREAS = [
  "Lowell",
  "Chelmsford",
  "Billerica",
  "Tewksbury",
  "Dracut",
  "Westford",
  "Dunstable",
  "Groton",
  "Pepperell",
  "Methuen",
  "Lawrence",
  "Haverhill",
  "Nashua",
  "Hudson",
];

export const GOOGLE_REVIEWS = [
  {
    name: "Maria S.",
    rating: 5,
    text: "Aquino Home Solutions installed a new furnace for us and the entire experience was fantastic. They showed up on time, explained everything clearly, and finished the job in one day. Our house has never been warmer!",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Called them for an emergency — no heat on a freezing night. They came out within 2 hours and fixed the issue. Incredibly grateful for their fast response. Highly recommend!",
  },
  {
    name: "Patricia L.",
    rating: 5,
    text: "We had our water heater replaced and the crew was professional from start to finish. Fair pricing, clean work, and they even hauled away the old unit. Five stars all the way.",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Best HVAC company in the Lowell area. They did a full AC installation and it was seamless. The team was courteous, knowledgeable, and left the workspace spotless.",
  },
  {
    name: "Sandra M.",
    rating: 5,
    text: "I've used Aquino for both my heating and water heater needs. Every time they are punctual, honest about pricing, and do excellent work. They've earned a customer for life.",
  },
  {
    name: "Robert K.",
    rating: 5,
    text: "Had a tankless water heater installed. The technician was extremely knowledgeable and walked me through the entire process. Great value for the quality of work provided.",
  },
  {
    name: "Linda C.",
    rating: 5,
    text: "Our AC stopped working in the middle of summer. Aquino came out same day and had it running again in no time. So thankful for their quick and reliable service!",
  },
  {
    name: "Michael B.",
    rating: 5,
    text: "Professional, affordable, and reliable. They did a seasonal tune-up on our HVAC system and found a small issue before it became a big problem. Saved us hundreds.",
  },
  {
    name: "Jennifer W.",
    rating: 5,
    text: "From the first phone call to the finished job, everything was smooth. They replaced our old boiler with a high-efficiency model. Our energy bills dropped noticeably. Thank you!",
  },
  {
    name: "Carlos A.",
    rating: 5,
    text: "Excellent service from start to finish. The team was friendly, explained all our options, and didn't try to upsell us on things we didn't need. Honest and hardworking company.",
  },
];

export const FILE_CONSTRAINTS = {
  maxFiles: 5,
  maxSizeBytes: 5 * 1024 * 1024, // 5MB
  maxSizeMB: 5,
  acceptedTypes: ["image/jpeg", "image/png", "image/webp"],
  acceptedExtensions: ".jpg,.jpeg,.png,.webp",
};

export const RATE_LIMIT = {
  maxRequests: 3,
  windowSeconds: 60,
  cleanupIntervalMs: 10 * 60 * 1000, // 10 minutes
};
