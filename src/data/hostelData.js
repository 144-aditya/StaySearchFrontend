// ==================
// MONU HOSTEL IMAGES
// ==================
import MonuBranch1 from "../assets/images/hostel/MonuBranch1.jpg";
import MonuBranch2 from "../assets/images/hostel/MonuBranch2.jpg";
import MonuBranch3 from "../assets/images/hostel/MonuBranch3.jpg";
import MonuRoom1 from "../assets/images/hostel/MonuRoom1.jpg";
import MonuRoom2 from "../assets/images/hostel/MonuRoom2.jpg";
import MonuRoom3 from "../assets/images/hostel/MonuRoom3.jpg";

// ==================
// AMAN HOSTEL IMAGES
// ==================
import AmanBranch1 from "../assets/images/hostel/AmanBranch1.jpg";
import AmanBranch2 from "../assets/images/hostel/AmanBranch2.jpg";
import AmanBranch3 from "../assets/images/hostel/AmanBranch3.jpg";
import AmanRoom1 from "../assets/images/hostel/AmanRoom1.jpg";
import AmanRoom2 from "../assets/images/hostel/AmanRoom2.jpg";
import AmanRoom3 from "../assets/images/hostel/AmanRoom3.jpg";

// ==================
// RAVI HOSTEL IMAGES
// ==================
import RaviBranch1 from "../assets/images/hostel/RaviBranch1.jpg";
import RaviBranch2 from "../assets/images/hostel/RaviBranch2.jpg";
import RaviBranch3 from "../assets/images/hostel/RaviBranch3.jpg";
import RaviRoom1 from "../assets/images/hostel/RaviRoom1.jpg";
import RaviRoom2 from "../assets/images/hostel/RaviRoom2.jpg";
import RaviRoom3 from "../assets/images/hostel/RaviRoom3.jpg";

// ==================
// MAIN HOSTEL IMAGES
// ==================
import hotel1 from "../assets/images/hostel/hotel1.jpg";
import hotel2 from "../assets/images/hostel/hotel2.jpg";
import hotel3 from "../assets/images/hostel/hotel3.jpg";

// Placeholder images for missing files - Using better hostel-specific images
const placeholderImages = {
  // For Capital Hostel (ID 7)
  capitalHostel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  capitalRoom1: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  capitalRoom2: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  capitalRoom3: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  capitalBranch1: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  capitalBranch2: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  capitalBranch3: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

  // For Sunrise Hostel (ID 9) - Girls Hostel specific images
  sunriseHostel: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  sunriseRoom1: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  sunriseRoom2: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  sunriseRoom3: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  sunriseBranch1: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  sunriseBranch2: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  sunriseBranch3: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

  // For new hostel 11 - Galaxy Hostel
  galaxyHostel: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  galaxyRoom1: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  galaxyRoom2: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  galaxyRoom3: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  galaxyBranch1: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  galaxyBranch2: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  galaxyBranch3: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

  // For new hostel 12 - Oasis Hostel
  oasisHostel: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  oasisRoom1: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  oasisRoom2: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  oasisRoom3: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  oasisBranch1: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  oasisBranch2: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  oasisBranch3: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

  // General placeholders for other hostels
  hotel4: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  hotel5: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  hotel6: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  hotel8: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  hotel10: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
};

// ==================
// HOSTEL DATA - 12 PROPERTIES (Fixed Images for ID 7 & 9)
// ==================
const hostelData = [
  {
    id: 1,
    name: "Monu Hostel",
    price: "₹4000/month",
    image: hotel1,
    branches: [MonuBranch1 || placeholderImages.capitalBranch1, MonuBranch2 || placeholderImages.capitalBranch2, MonuBranch3 || placeholderImages.capitalBranch3],
    roomTypes: [
      { type: "2 Sharing", image: MonuRoom1 || placeholderImages.capitalRoom1, price: "₹4500" },
      { type: "3 Sharing", image: MonuRoom2 || placeholderImages.capitalRoom2, price: "₹4000" },
      { type: "4 Sharing", image: MonuRoom3 || placeholderImages.capitalRoom3, price: "₹3500" },
    ],
    details: { 
      type: "Non-AC Hostel", 
      location: "Near Delhi University", 
      rating: 4.2,
      contact: "9876543210"
    },
    facilities: ["WiFi", "Mess", "Study Room", "Laundry", "24/7 Water"],
    description: "Best hostel for students near Delhi University with all basic amenities.",
    address: "15, Vijay Nagar, Near Delhi University, Delhi - 110009"
  },

  {
    id: 2,
    name: "Aman Hostel",
    price: "₹5000/month",
    image: hotel2,
    branches: [AmanBranch1 || placeholderImages.galaxyBranch1, AmanBranch2 || placeholderImages.galaxyBranch2, AmanBranch3 || placeholderImages.galaxyBranch3],
    roomTypes: [
      { type: "AC 2 Sharing", image: AmanRoom1 || placeholderImages.galaxyRoom1, price: "₹6000" },
      { type: "AC 3 Sharing", image: AmanRoom2 || placeholderImages.galaxyRoom2, price: "₹5500" },
      { type: "Non-AC 4 Sharing", image: AmanRoom3 || placeholderImages.galaxyRoom3, price: "₹4500" },
    ],
    details: { 
      type: "AC Hostel", 
      location: "South Campus", 
      rating: 4.5,
      contact: "9876543211"
    },
    facilities: ["WiFi", "Mess", "Laundry", "AC Rooms", "Gym", "TV Room"],
    description: "Premium AC hostel with modern facilities and gym access.",
    address: "22, Satya Niketan, South Campus, Delhi - 110021"
  },

  {
    id: 3,
    name: "Ravi Hostel",
    price: "₹4500/month",
    image: hotel3,
    branches: [RaviBranch1 || placeholderImages.oasisBranch1, RaviBranch2 || placeholderImages.oasisBranch2, RaviBranch3 || placeholderImages.oasisBranch3],
    roomTypes: [
      { type: "2 Sharing", image: RaviRoom1 || placeholderImages.oasisRoom1, price: "₹4800" },
      { type: "3 Sharing", image: RaviRoom2 || placeholderImages.oasisRoom2, price: "₹4200" },
      { type: "4 Sharing", image: RaviRoom3 || placeholderImages.oasisRoom3, price: "₹3800" },
    ],
    details: { 
      type: "Non-AC Hostel", 
      location: "North Campus", 
      rating: 4.0,
      contact: "9876543212"
    },
    facilities: ["WiFi", "Mess", "Parking", "Library", "Medical Room"],
    description: "Affordable hostel with parking facility and library access.",
    address: "45, Maurice Nagar, North Campus, Delhi - 110007"
  },

  {
    id: 4,
    name: "Ganga Hostel",
    price: "₹5500/month",
    image: placeholderImages.hotel4,
    branches: [placeholderImages.capitalBranch1, placeholderImages.capitalBranch2, placeholderImages.capitalBranch3],
    roomTypes: [
      { type: "Single Room", image: placeholderImages.capitalRoom1, price: "₹7500" },
      { type: "2 Sharing AC", image: placeholderImages.capitalRoom2, price: "₹6000" },
      { type: "3 Sharing", image: placeholderImages.capitalRoom3, price: "₹5000" },
    ],
    details: { 
      type: "Premium Hostel", 
      location: "Connaught Place", 
      rating: 4.7,
      contact: "9876543213"
    },
    facilities: ["WiFi", "Mess", "AC", "Gym", "Swimming Pool", "Cafeteria"],
    description: "Luxury hostel with swimming pool and premium facilities.",
    address: "8, Kasturba Gandhi Marg, Connaught Place, Delhi - 110001"
  },

  {
    id: 5,
    name: "Royals Hostel",
    price: "₹6000/month",
    image: placeholderImages.hotel5,
    branches: [placeholderImages.galaxyBranch1, placeholderImages.galaxyBranch2, placeholderImages.galaxyBranch3],
    roomTypes: [
      { type: "AC Single", image: placeholderImages.galaxyRoom1, price: "₹8500" },
      { type: "AC 2 Sharing", image: placeholderImages.galaxyRoom2, price: "₹6500" },
      { type: "Non-AC 3 Sharing", image: placeholderImages.galaxyRoom3, price: "₹5500" },
    ],
    details: { 
      type: "Luxury Hostel", 
      location: "Greater Kailash", 
      rating: 4.8,
      contact: "9876543214"
    },
    facilities: ["WiFi", "Mess", "AC", "Gym", "Game Room", "Laundry", "CCTV"],
    description: "Royal experience with game room and 24/7 security.",
    address: "D-12, Greater Kailash Part-1, Delhi - 110048"
  },

  {
    id: 6,
    name: "Heritage Hostel",
    price: "₹3500/month",
    image: placeholderImages.hotel6,
    branches: [placeholderImages.oasisBranch1, placeholderImages.oasisBranch2, placeholderImages.oasisBranch3],
    roomTypes: [
      { type: "4 Sharing", image: placeholderImages.oasisRoom1, price: "₹3500" },
      { type: "6 Sharing Dorm", image: placeholderImages.oasisRoom2, price: "₹2800" },
      { type: "8 Sharing Dorm", image: placeholderImages.oasisRoom3, price: "₹2500" },
    ],
    details: { 
      type: "Budget Hostel", 
      location: "Old Delhi", 
      rating: 3.8,
      contact: "9876543215"
    },
    facilities: ["WiFi", "Mess", "Common Room", "Hot Water", "24/7 Security"],
    description: "Budget-friendly hostel for students with basic amenities.",
    address: "12, Chandni Chowk, Old Delhi, Delhi - 110006"
  },

  // - Now has proper hostel image
  {
    id: 7,
    name: "Capital Hostel",
    price: "₹7000/month",
    image: placeholderImages.capitalHostel, // ✅ Fixed: Now has hostel image
    branches: [placeholderImages.capitalBranch1, placeholderImages.capitalBranch2, placeholderImages.capitalBranch3],
    roomTypes: [
      { type: "AC Single", image: placeholderImages.capitalRoom1, price: "₹9000" },
      { type: "AC 2 Sharing", image: placeholderImages.capitalRoom2, price: "₹7000" },
      { type: "Executive Suite", image: placeholderImages.capitalRoom3, price: "₹12000" },
    ],
    details: { 
      type: "Executive Hostel", 
      location: "Dwarka", 
      rating: 4.9,
      contact: "9876543216"
    },
    facilities: ["WiFi", "Mess", "AC", "Gym", "Library", "Conference Room", "Room Service"],
    description: "Executive hostel for working professionals with conference facilities.",
    address: "Sector 12, Dwarka, Delhi - 110075"
  },

  {
    id: 8,
    name: "Youth Hostel",
    price: "₹3000/month",
    image: placeholderImages.hotel8,
    branches: [placeholderImages.sunriseBranch1, placeholderImages.sunriseBranch2, placeholderImages.sunriseBranch3],
    roomTypes: [
      { type: "6 Sharing Dorm", image: placeholderImages.sunriseRoom1, price: "₹3000" },
      { type: "8 Sharing Dorm", image: placeholderImages.sunriseRoom2, price: "₹2500" },
      { type: "10 Sharing Dorm", image: placeholderImages.sunriseRoom3, price: "₹2000" },
    ],
    details: { 
      type: "Dormitory Hostel", 
      location: "Paharganj", 
      rating: 3.5,
      contact: "9876543217"
    },
    facilities: ["WiFi", "Mess", "Common Kitchen", "Lockers", "Travel Desk", "Tour Assistance"],
    description: "Perfect for backpackers and travelers on budget near New Delhi Railway Station.",
    address: "Arakashan Road, Paharganj, Delhi - 110055"
  },

  //  Now has proper hostel image
  {
    id: 9,
    name: "Sunrise Hostel",
    price: "₹4800/month",
    image: placeholderImages.sunriseHostel, // ✅ Fixed: Now has hostel image
    branches: [placeholderImages.sunriseBranch1, placeholderImages.sunriseBranch2, placeholderImages.sunriseBranch3],
    roomTypes: [
      { type: "3 Sharing", image: placeholderImages.sunriseRoom1, price: "₹4800" },
      { type: "4 Sharing", image: placeholderImages.sunriseRoom2, price: "₹4200" },
      { type: "6 Sharing", image: placeholderImages.sunriseRoom3, price: "₹3500" },
    ],
    details: { 
      type: "Girls Hostel", 
      location: "Safdarjung", 
      rating: 4.6,
      contact: "9876543218"
    },
    facilities: ["WiFi", "Mess", "Security", "Common Room", "Study Area", "24/7 Warden", "CCTV"],
    description: "Safe and secure girls hostel with 24/7 security and warden.",
    address: "14, Safdarjung Development Area, Delhi - 110016"
  },

  {
    id: 10,
    name: "Metro Hostel",
    price: "₹5200/month",
    image: placeholderImages.hotel10,
    branches: [placeholderImages.galaxyBranch1, placeholderImages.oasisBranch2, placeholderImages.capitalBranch3],
    roomTypes: [
      { type: "2 Sharing AC", image: placeholderImages.galaxyRoom1, price: "₹6000" },
      { type: "3 Sharing", image: placeholderImages.oasisRoom2, price: "₹5200" },
      { type: "4 Sharing", image: placeholderImages.capitalRoom3, price: "₹4500" },
    ],
    details: { 
      type: "Metro Connected Hostel", 
      location: "Rajiv Chowk", 
      rating: 4.4,
      contact: "9876543219"
    },
    facilities: ["WiFi", "Mess", "AC", "Metro Access", "Shopping Complex", "Food Court", "ATM"],
    description: "Hostel connected to metro station with shopping complex access.",
    address: "H-Block, Connaught Place, Rajiv Chowk, Delhi - 110001"
  },

  
  {
    id: 11,
    name: "Galaxy Hostel",
    price: "₹6500/month",
    image: placeholderImages.galaxyHostel,
    branches: [placeholderImages.galaxyBranch1, placeholderImages.galaxyBranch2, placeholderImages.galaxyBranch3],
    roomTypes: [
      { type: "AC Single", image: placeholderImages.galaxyRoom1, price: "₹8000" },
      { type: "AC 2 Sharing", image: placeholderImages.galaxyRoom2, price: "₹6500" },
      { type: "AC 3 Sharing", image: placeholderImages.galaxyRoom3, price: "₹5500" },
    ],
    details: { 
      type: "Premium AC Hostel", 
      location: "Saket", 
      rating: 4.7,
      contact: "9876543220"
    },
    facilities: ["WiFi", "Mess", "AC Rooms", "Gym", "TV Lounge", "Laundry", "Cafeteria", "24/7 Security"],
    description: "Modern premium hostel with AC rooms and state-of-the-art facilities.",
    address: "M-12, Saket, Delhi - 110017"
  },

  //  NEW HOSTEL 12
  {
    id: 12,
    name: "Oasis Hostel",
    price: "₹3800/month",
    image: placeholderImages.oasisHostel,
    branches: [placeholderImages.oasisBranch1, placeholderImages.oasisBranch2, placeholderImages.oasisBranch3],
    roomTypes: [
      { type: "3 Sharing", image: placeholderImages.oasisRoom1, price: "₹3800" },
      { type: "4 Sharing", image: placeholderImages.oasisRoom2, price: "₹3200" },
      { type: "6 Sharing Dorm", image: placeholderImages.oasisRoom3, price: "₹2800" },
    ],
    details: { 
      type: "Budget Friendly Hostel", 
      location: "Laxmi Nagar", 
      rating: 4.1,
      contact: "9876543221"
    },
    facilities: ["WiFi", "Mess", "Common Kitchen", "Study Room", "Laundry", "24/7 Water"],
    description: "Affordable and comfortable hostel for students and working professionals.",
    address: "23, Laxmi Nagar, Delhi - 110092"
  }
];

export default hostelData;