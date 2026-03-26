// IMPORT LODGE IMAGES (Only import files that exist)
import lodge1 from "../assets/images/lodge/lodge1.jpg";
import lodge2 from "../assets/images/lodge/lodge2.jpg";
import lodge3 from "../assets/images/lodge/lodge3.jpg";

// Aditya Lodge Branch Images
import AdityaBranch1 from "../assets/images/lodge/AdityaBranch1.jpg";
import AdityaBranch2 from "../assets/images/lodge/AdityaBranch2.jpg";
import AdityaBranch3 from "../assets/images/lodge/AdityaBranch3.jpg";

// Rahul Lodge Branch Images
import RahulBranch1 from "../assets/images/lodge/RahulBranch1.jpg";
import RahulBranch2 from "../assets/images/lodge/RahulBranch2.jpg";
import RahulBranch3 from "../assets/images/lodge/RahulBranch3.jpg";

// Sonu Lodge Branch Images
import SonuBranch1 from "../assets/images/lodge/SonuBranch1.jpg";
import SonuBranch2 from "../assets/images/lodge/SonuBranch2.jpg";
import SonuBranch3 from "../assets/images/lodge/SonuBranch3.jpg";

// Aditya Lodge Room Images
import adityaRoom1 from "../assets/images/lodge/AdityaRoom1.jpg";
import adityaRoom2 from "../assets/images/lodge/AdityaRoom2.jpg";
import adityaRoom3 from "../assets/images/lodge/AdityaRoom3.jpg";

// Rahul Lodge Room Images
import rahulRoom1 from "../assets/images/lodge/RahulRoom1.jpg";
import rahulRoom2 from "../assets/images/lodge/RahulRoom2.jpg";
import rahulRoom3 from "../assets/images/lodge/RahulRoom3.jpg";

// Sonu Lodge Room Images
import sonuRoom1 from "../assets/images/lodge/SonuRoom1.jpg";
import sonuRoom2 from "../assets/images/lodge/SonuRoom2.jpg";
import sonuRoom3 from "../assets/images/lodge/SonuRoom3.jpg";

// Placeholder URLs for missing images
const lodgePlaceholders = {
  // Main lodge images
  lodge4: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  lodge5: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  lodge6: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  
  // New lodges branch images
  heritageBranch1: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  heritageBranch2: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  heritageBranch3: "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  
  metroBranch1: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  metroBranch2: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  metroBranch3: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  
  royalBranch1: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  royalBranch2: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  royalBranch3: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  
  // New lodges room images
  heritageRoom1: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  heritageRoom2: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  heritageRoom3: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  
  metroRoom1: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  metroRoom2: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  metroRoom3: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  
  royalRoom1: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  royalRoom2: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  royalRoom3: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
};

const lodgeData = [
  {
    id: 1,
    name: "Aditya Lodge",
    price: "₹3000/night",
    image: lodge1,
    branches: [
      AdityaBranch1 || lodgePlaceholders.heritageBranch1, 
      AdityaBranch2 || lodgePlaceholders.heritageBranch2, 
      AdityaBranch3 || lodgePlaceholders.heritageBranch3
    ],
    roomTypes: [
      { type: "Standard Room", image: adityaRoom1 || lodgePlaceholders.heritageRoom1, price: "₹2500" },
      { type: "Deluxe Room", image: adityaRoom2 || lodgePlaceholders.heritageRoom2, price: "₹3500" },
      { type: "Executive Suite", image: adityaRoom3 || lodgePlaceholders.heritageRoom3, price: "₹4500" },
    ],
    details: { 
      type: "AC Lodge", 
      location: "Karol Bagh", 
      rating: 4.3,
      contact: "9876543301"
    },
    facilities: ["WiFi", "Parking", "Restaurant", "24/7 Reception", "Room Service"],
    description: "Comfortable AC lodge in the heart of Karol Bagh with excellent connectivity.",
    address: "12, Ajmal Khan Road, Karol Bagh, Delhi - 110005"
  },
  {
    id: 2,
    name: "Rahul Lodge",
    price: "₹2800/night",
    image: lodge2,
    branches: [
      RahulBranch1 || lodgePlaceholders.metroBranch1, 
      RahulBranch2 || lodgePlaceholders.metroBranch2, 
      RahulBranch3 || lodgePlaceholders.metroBranch3
    ],
    roomTypes: [
      { type: "Basic Room", image: rahulRoom1 || lodgePlaceholders.metroRoom1, price: "₹2000" },
      { type: "AC Room", image: rahulRoom2 || lodgePlaceholders.metroRoom2, price: "₹3500" },
      { type: "Family Room", image: rahulRoom3 || lodgePlaceholders.metroRoom3, price: "₹5000" },
    ],
    details: { 
      type: "AC/Non-AC Lodge", 
      location: "Paharganj", 
      rating: 4.0,
      contact: "9876543302"
    },
    facilities: ["WiFi", "Parking", "Restaurant", "Travel Desk", "Laundry"],
    description: "Affordable lodge near New Delhi Railway Station, perfect for travelers.",
    address: "34, Arakashan Road, Paharganj, Delhi - 110055"
  },
  {
    id: 3,
    name: "Sonu Lodge",
    price: "₹3200/night",
    image: lodge3,
    branches: [
      SonuBranch1 || lodgePlaceholders.royalBranch1, 
      SonuBranch2 || lodgePlaceholders.royalBranch2, 
      SonuBranch3 || lodgePlaceholders.royalBranch3
    ],
    roomTypes: [
      { type: "Single AC", image: sonuRoom1 || lodgePlaceholders.royalRoom1, price: "₹3200" },
      { type: "Double AC", image: sonuRoom2 || lodgePlaceholders.royalRoom2, price: "₹4500" },
      { type: "Triple AC", image: sonuRoom3 || lodgePlaceholders.royalRoom3, price: "₹6000" },
    ],
    details: { 
      type: "AC Lodge", 
      location: "Connaught Place", 
      rating: 4.5,
      contact: "9876543303"
    },
    facilities: ["WiFi", "Parking", "Restaurant", "Bar", "Conference Room"],
    description: "Premium lodge in Connaught Place with business facilities and fine dining.",
    address: "F-15, Connaught Place, Delhi - 110001"
  },

  // NEW LODGE 4 (using placeholder image)
  {
    id: 4,
    name: "Heritage Lodge",
    price: "₹4000/night",
    image: lodgePlaceholders.lodge4, // Using placeholder instead of import
    branches: [
      lodgePlaceholders.heritageBranch1, 
      lodgePlaceholders.heritageBranch2, 
      lodgePlaceholders.heritageBranch3
    ],
    roomTypes: [
      { type: "Heritage Room", image: lodgePlaceholders.heritageRoom1, price: "₹4000" },
      { type: "Royal Suite", image: lodgePlaceholders.heritageRoom2, price: "₹6000" },
      { type: "Presidential Suite", image: lodgePlaceholders.heritageRoom3, price: "₹8000" },
    ],
    details: { 
      type: "Heritage Property", 
      location: "Chandni Chowk", 
      rating: 4.7,
      contact: "9876543304"
    },
    facilities: ["WiFi", "Parking", "Heritage Restaurant", "Spa", "Cultural Shows", "Guided Tours"],
    description: "Experience royal heritage with modern amenities in the heart of Old Delhi.",
    address: "18, Chandni Chowk, Delhi - 110006"
  },

  // NEW LODGE 5 (using placeholder image)
  {
    id: 5,
    name: "Metro Lodge",
    price: "₹3500/night",
    image: lodgePlaceholders.lodge5, // Using placeholder instead of import
    branches: [
      lodgePlaceholders.metroBranch1, 
      lodgePlaceholders.metroBranch2, 
      lodgePlaceholders.metroBranch3
    ],
    roomTypes: [
      { type: "Budget Room", image: lodgePlaceholders.metroRoom1, price: "₹2500" },
      { type: "Standard AC", image: lodgePlaceholders.metroRoom2, price: "₹3500" },
      { type: "Deluxe AC", image: lodgePlaceholders.metroRoom3, price: "₹4500" },
    ],
    details: { 
      type: "Metro Connected Lodge", 
      location: "Rajiv Chowk", 
      rating: 4.4,
      contact: "9876543305"
    },
    facilities: ["WiFi", "Parking", "Food Court", "Metro Access", "Shopping Arcade", "24/7 Reception"],
    description: "Direct metro connectivity with easy access to all major attractions in Delhi.",
    address: "Metro Pillar 45, Rajiv Chowk Metro Station, Delhi - 110001"
  },

  //  NEW LODGE 6 (using placeholder image)
  {
    id: 6,
    name: "Royal Lodge",
    price: "₹5000/night",
    image: lodgePlaceholders.lodge6, // Using placeholder instead of import
    branches: [
      lodgePlaceholders.royalBranch1, 
      lodgePlaceholders.royalBranch2, 
      lodgePlaceholders.royalBranch3
    ],
    roomTypes: [
      { type: "Royal Room", image: lodgePlaceholders.royalRoom1, price: "₹5000" },
      { type: "Executive Suite", image: lodgePlaceholders.royalRoom2, price: "₹7000" },
      { type: "Royal Suite", image: lodgePlaceholders.royalRoom3, price: "₹10000" },
    ],
    details: { 
      type: "Luxury Lodge", 
      location: "Greater Kailash", 
      rating: 4.9,
      contact: "9876543306"
    },
    facilities: ["WiFi", "Valet Parking", "Fine Dining", "Spa", "Swimming Pool", "Gym", "Butler Service"],
    description: "Ultimate luxury experience with world-class amenities and personalized service.",
    address: "M-25, Greater Kailash Part-2, Delhi - 110048"
  }
];

export default lodgeData;