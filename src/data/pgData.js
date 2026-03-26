// ==================
// BITTU PG IMAGES
// ==================
import BittuBranch1 from "../assets/images/pg/BittuBranch1.jpg";
import BittuBranch2 from "../assets/images/pg/BittuBranch2.jpg";
import BittuBranch3 from "../assets/images/pg/BittuBranch3.jpg";
import BittuRoom1 from "../assets/images/pg/BittuRoom1.jpg";
import BittuRoom2 from "../assets/images/pg/BittuRoom2.jpg";
import BittuRoom3 from "../assets/images/pg/BittuRoom3.jpg";

// ==================
// RAM PG IMAGES
// ==================
import RamBranch1 from "../assets/images/pg/RamBranch1.jpg";
import RamBranch2 from "../assets/images/pg/RamBranch2.jpg";
import RamBranch3 from "../assets/images/pg/RamBranch3.jpg";
import RamRoom1 from "../assets/images/pg/RamRoom1.jpg";
import RamRoom2 from "../assets/images/pg/RamRoom2.jpg";
import RamRoom3 from "../assets/images/pg/RamRoom3.jpg";

// ==================
// ROHIT PG IMAGES
// ==================
import RohitBranch1 from "../assets/images/pg/RohitBranch1.jpg";
import RohitBranch2 from "../assets/images/pg/RohitBranch2.jpg";
import RohitBranch3 from "../assets/images/pg/RohitBranch3.jpg";
import RohitRoom1 from "../assets/images/pg/RohitRoom1.jpg";
import RohitRoom2 from "../assets/images/pg/RohitRoom2.jpg";
import RohitRoom3 from "../assets/images/pg/RohitRoom3.jpg";

// ==================
// MAIN PG IMAGES
// ==================
import PG1 from "../assets/images/pg/PG1.jpg";
import PG2 from "../assets/images/pg/PG2.jpg";
import PG3 from "../assets/images/pg/PG3.jpg";

// Placeholder images for missing PG files
const pgPlaceholders = {
  // Main PG images
  pg4: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  pg5: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  pg6: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  
  // Premium PG images
  premiumBranch1: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  premiumBranch2: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  premiumBranch3: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  premiumRoom1: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  premiumRoom2: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  premiumRoom3: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  
  // Girls PG images
  girlsBranch1: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  girlsBranch2: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  girlsBranch3: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  girlsRoom1: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  girlsRoom2: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  girlsRoom3: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  
  // Student PG images
  studentBranch1: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  studentBranch2: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  studentBranch3: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  studentRoom1: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  studentRoom2: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  studentRoom3: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
};

// ==================
// PG DATA - 6 PROPERTIES (Using Placeholders for New PGs)
// ==================
const pgData = [
  {
    id: 1,
    name: "Bittu PG",
    price: "₹3000/month",
    image: PG1,
    branches: [
      BittuBranch1 || pgPlaceholders.premiumBranch1, 
      BittuBranch2 || pgPlaceholders.premiumBranch2, 
      BittuBranch3 || pgPlaceholders.premiumBranch3
    ],
    roomTypes: [
      { type: "2 Sharing Non-AC", image: BittuRoom1 || pgPlaceholders.premiumRoom1, price: "₹3200" },
      { type: "3 Sharing Non-AC", image: BittuRoom2 || pgPlaceholders.premiumRoom2, price: "₹2800" },
      { type: "4 Sharing Non-AC", image: BittuRoom3 || pgPlaceholders.premiumRoom3, price: "₹2500" },
    ],
    details: { 
      type: "Non-AC PG", 
      location: "Vijay Nagar", 
      rating: 4.2,
      contact: "9876543401"
    },
    facilities: ["WiFi", "Food (Veg)", "Parking", "24/7 Water", "Common TV"],
    description: "Budget-friendly PG for students with homely food and good connectivity to Delhi University.",
    address: "25, Vijay Nagar, Near Delhi University, Delhi - 110009"
  },

  {
    id: 2,
    name: "Ram PG",
    price: "₹3500/month",
    image: PG2,
    branches: [
      RamBranch1 || pgPlaceholders.girlsBranch1, 
      RamBranch2 || pgPlaceholders.girlsBranch2, 
      RamBranch3 || pgPlaceholders.girlsBranch3
    ],
    roomTypes: [
      { type: "AC 2 Sharing", image: RamRoom1 || pgPlaceholders.girlsRoom1, price: "₹3800" },
      { type: "AC 3 Sharing", image: RamRoom2 || pgPlaceholders.girlsRoom2, price: "₹3200" },
      { type: "Non-AC 4 Sharing", image: RamRoom3 || pgPlaceholders.girlsRoom3, price: "₹2800" },
    ],
    details: { 
      type: "AC PG", 
      location: "Satya Niketan", 
      rating: 4.5,
      contact: "9876543402"
    },
    facilities: ["WiFi", "Food (Veg/Non-Veg)", "Laundry", "AC Rooms", "Study Room", "Geyser"],
    description: "Premium AC PG with hygienic food options and dedicated study areas for students.",
    address: "12, Satya Niketan, South Campus, Delhi - 110021"
  },

  {
    id: 3,
    name: "Rohit PG",
    price: "₹3300/month",
    image: PG3,
    branches: [
      RohitBranch1 || pgPlaceholders.studentBranch1, 
      RohitBranch2 || pgPlaceholders.studentBranch2, 
      RohitBranch3 || pgPlaceholders.studentBranch3
    ],
    roomTypes: [
      { type: "2 Sharing", image: RohitRoom1 || pgPlaceholders.studentRoom1, price: "₹3500" },
      { type: "3 Sharing", image: RohitRoom2 || pgPlaceholders.studentRoom2, price: "₹3000" },
      { type: "4 Sharing", image: RohitRoom3 || pgPlaceholders.studentRoom3, price: "₹2700" },
    ],
    details: { 
      type: "Non-AC PG", 
      location: "Mukherjee Nagar", 
      rating: 4.3,
      contact: "9876543403"
    },
    facilities: ["WiFi", "Food (Veg)", "Power Backup", "Library", "Medical Assistance", "Monthly Cleaning"],
    description: "Reliable PG with power backup facility, perfect for competitive exam aspirants.",
    address: "8, Mukherjee Nagar, Delhi - 110009"
  },

  // NEW PG 4 (using placeholder images)
  {
    id: 4,
    name: "Premium PG",
    price: "₹5000/month",
    image: pgPlaceholders.pg4, // Using placeholder
    branches: [
      pgPlaceholders.premiumBranch1, 
      pgPlaceholders.premiumBranch2, 
      pgPlaceholders.premiumBranch3
    ],
    roomTypes: [
      { type: "AC Single Room", image: pgPlaceholders.premiumRoom1, price: "₹6500" },
      { type: "AC 2 Sharing", image: pgPlaceholders.premiumRoom2, price: "₹5000" },
      { type: "AC 3 Sharing", image: pgPlaceholders.premiumRoom3, price: "₹4500" },
    ],
    details: { 
      type: "Premium AC PG", 
      location: "Greater Kailash", 
      rating: 4.8,
      contact: "9876543404"
    },
    facilities: ["WiFi", "Food (Multi-cuisine)", "AC Rooms", "Gym", "Laundry", "Housekeeping", "CCTV Security"],
    description: "Luxury PG with gym facilities and multi-cuisine food options for working professionals.",
    address: "E-12, Greater Kailash Part-1, Delhi - 110048"
  },

  //  NEW PG 5 (using placeholder images)
  {
    id: 5,
    name: "Girls PG",
    price: "₹4500/month",
    image: pgPlaceholders.pg5, // Using placeholder
    branches: [
      pgPlaceholders.girlsBranch1, 
      pgPlaceholders.girlsBranch2, 
      pgPlaceholders.girlsBranch3
    ],
    roomTypes: [
      { type: "2 Sharing AC", image: pgPlaceholders.girlsRoom1, price: "₹4800" },
      { type: "3 Sharing", image: pgPlaceholders.girlsRoom2, price: "₹4200" },
      { type: "4 Sharing", image: pgPlaceholders.girlsRoom3, price: "₹3800" },
    ],
    details: { 
      type: "Girls Only PG", 
      location: "Safdarjung", 
      rating: 4.7,
      contact: "9876543405"
    },
    facilities: ["WiFi", "Food (Veg)", "24/7 Security", "Warden", "Common TV", "Study Room", "Geyser"],
    description: "Safe and secure girls PG with 24/7 security and female warden. Perfect for students and working women.",
    address: "14, Safdarjung Enclave, Delhi - 110016"
  },

  // NEW PG 6 (using placeholder images)
  {
    id: 6,
    name: "Student PG",
    price: "₹2800/month",
    image: pgPlaceholders.pg6, // Using placeholder
    branches: [
      pgPlaceholders.studentBranch1, 
      pgPlaceholders.studentBranch2, 
      pgPlaceholders.studentBranch3
    ],
    roomTypes: [
      { type: "3 Sharing", image: pgPlaceholders.studentRoom1, price: "₹2800" },
      { type: "4 Sharing", image: pgPlaceholders.studentRoom2, price: "₹2400" },
      { type: "6 Sharing Dorm", image: pgPlaceholders.studentRoom3, price: "₹2000" },
    ],
    details: { 
      type: "Budget Student PG", 
      location: "Kamla Nagar", 
      rating: 4.0,
      contact: "9876543406"
    },
    facilities: ["WiFi", "Food (Basic Veg)", "Study Room", "Library", "Bicycle Parking", "Common Kitchen"],
    description: "Ultra-budget PG for students with basic amenities. Perfect for those preparing for competitive exams.",
    address: "22, Kamla Nagar, Delhi - 110007"
  }
];

export default pgData;