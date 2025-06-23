export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

// export const Doctors = [
//   {
//     image: "/assets/images/dr-green.png",
//     name: "John Green",
//   },
//   {
//     image: "/assets/images/dr-cameron.png",
//     name: "Leila Cameron",
//   },
//   {
//     image: "/assets/images/dr-livingston.png",
//     name: "David Livingston",
//   },
//   {
//     image: "/assets/images/dr-peter.png",
//     name: "Evan Peter",
//   },
//   {
//     image: "/assets/images/dr-powell.png",
//     name: "Jane Powell",
//   },
//   {
//     image: "/assets/images/dr-remirez.png",
//     name: "Alex Ramirez",
//   },
//   {
//     image: "/assets/images/dr-lee.png",
//     name: "Jasmine Lee",
//   },
//   {
//     image: "/assets/images/dr-cruz.png",
//     name: "Alyana Cruz",
//   },
//   {
//     image: "/assets/images/dr-sharma.png",
//     name: "Hardik Sharma",
//   },
// ];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "John Green",
    specialization: "Cardiologist", // Heart specialist
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
    specialization: "Dermatologist", // Skin specialist
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
    specialization: "Orthopedic", // Bone & joints specialist
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
    specialization: "Neurologist", // Brain & nervous system
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
    specialization: "Pediatrician", // Child specialist
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
    specialization: "General Physician", // Primary care
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
    specialization: "Gynecologist", // Women's health
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
    specialization: "Psychiatrist", // Mental health
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
    specialization: "ENT Specialist", // Ear, Nose, Throat
  },
];


export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};

 export const reviews = [
  {
    name: "Micheal Gough",
    role: "CEO at Google",
    text: "WeCare has transformed the way we access healthcare. The platform is reliable and easy to use.",
  },
  {
    name: "Sarah Lee",
    role: "Patient",
    text: "Booking appointments is super fast and hassle-free. Great support team as well!",
  },
  {
    name: "Dr. Anil Sharma",
    role: "Cardiologist",
    text: "WeCare provides seamless interaction with patients. The dashboard is intuitive.",
  },
  {
    name: "Priya Verma",
    role: "Patient",
    text: "24/7 support is a life saver! I received medical help during an emergency at midnight.",
  },
  {
    name: "Raj Malhotra",
    role: "Software Engineer",
    text: "WeCare made it easy to find the right specialist without running from clinic to clinic.",
  },
  {
    name: "Dr. Emily Carter",
    role: "Pediatrician",
    text: "The patient management system is top-notch. It saves me hours every week.",
  },
  {
    name: "Anita Desai",
    role: "Patient",
    text: "I love the health tracking features. It helps me stay on top of my wellness goals.",
  },
  {
    name: "Dr. Robert King",
    role: "Orthopedic Surgeon",
    text: "WeCare's telemedicine feature has been a game changer for my practice.",
  },
];

 export const teamMembers = [
  {
    name: "Dr. Anil Mehta",
    role: "Chief Medical Officer",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Dr. Priya Reddy",
    role: "Lead Gynecologist",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dr. Rajiv Sharma",
    role: "Cardiology Specialist",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Dr. Eed Carter",
    role: "Co-Founder / CEO",
    img: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    name: "Dr. Sameer Desai",
    role: "Telemedicine Expert",
    img: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Kiran Malhotra",
    role: "Co-Founder / Tech Architect",
    img: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    name: "Dr. Emily Carter",
    role: "Pediatrician",
    img: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Dr. Raj Malhotra",
    role: "Orthopedic Surgeon",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

export const faqList = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by signing in to your account and choosing your preferred doctor and time slot on the dashboard.",
  },
  {
    question: "Is WeCare a free service?",
    answer:
      "Yes, WeCare provides free primary consultations. However, some specialist appointments may have a nominal fee.",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes, you can cancel or reschedule your appointment from the 'My Appointments' section at least 2 hours before the scheduled time.",
  },
  {
    question: "Are the doctors verified?",
    answer:
      "All doctors on WeCare are verified, experienced professionals with valid medical licenses and certifications.",
  },
  {
    question: "Is my medical data secure?",
    answer:
      "Absolutely. WeCare follows industry-standard encryption and data protection protocols to keep your information private and secure.",
  },
];


