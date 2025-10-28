// Mock data for Cartique - Frontend only, no backend
export type CarListing = {
  id: string
  name: string
  make: string
  model: string
  year: number
  price: number
  location: string
  city: string
  state: string
  images: string[]
  featured: boolean
  category: string
  specs: {
    engine: string
    horsepower: number
    torque: string
    acceleration: string
    topSpeed: string
    transmission: string
    drivetrain: string
    weight: string
    seats: number
    fuelType: string
  }
  features: string[]
  description: string
  mileage: number
  supplierId: string
  supplierName: string
  supplierAvatar: string
  supplierRating: number
  supplierReviews: number
  views: number
  bookings: number
}

export type Supplier = {
  id: string
  name: string
  email: string
  avatar: string
  joined: string
  rating: number
  reviews: number
  responseTime: string
  verified: boolean
  bio: string
  totalRentals: number
  listingsCount: number
}

export type Customer = {
  id: string
  name: string
  email: string
  avatar: string
  joined: string
  verified: boolean
}

export type Booking = {
  id: string
  carId: string
  carName: string
  carImage: string
  customerId: string
  customerName: string
  supplierId: string
  supplierName: string
  startDate: string
  endDate: string
  totalPrice: number
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled'
  createdAt: string
}

// Mock car listings
export const mockCarListings: CarListing[] = [
  {
    id: "1",
    name: "McLaren 720S Performance",
    make: "McLaren",
    model: "720S",
    year: 2023,
    price: 1495,
    location: "Beverly Hills, CA",
    city: "Beverly Hills",
    state: "CA",
    images: [
      "/placeholder-car-1.jpg",
      "/placeholder-car-2.jpg",
      "/placeholder-car-3.jpg",
    ],
    featured: true,
    category: "Supercar",
    specs: {
      engine: "4.0L Twin-Turbo V8",
      horsepower: 710,
      torque: "568 lb-ft",
      acceleration: "2.8 seconds",
      topSpeed: "212 mph",
      transmission: "7-Speed Dual-Clutch",
      drivetrain: "RWD",
      weight: "3,128 lbs",
      seats: 2,
      fuelType: "Premium Unleaded",
    },
    features: [
      "Carbon Fiber Interior",
      "Track Pack",
      "Sport Exhaust",
      "Ceramic Brakes",
      "Adaptive Suspension",
      "Premium Audio",
    ],
    description:
      "Experience pure automotive excellence with this pristine McLaren 720S. Recently serviced, this supercar delivers breathtaking performance with its 710hp twin-turbo V8. Features include full carbon fiber interior, track pack, and ceramic brakes. Perfect for special occasions or track days.",
    mileage: 4200,
    supplierId: "sup-1",
    supplierName: "John Smith",
    supplierAvatar: "/avatar-1.jpg",
    supplierRating: 4.9,
    supplierReviews: 37,
    views: 1247,
    bookings: 23,
  },
  {
    id: "2",
    name: "Ferrari F8 Tributo",
    make: "Ferrari",
    model: "F8 Tributo",
    year: 2024,
    price: 1750,
    location: "Miami Beach, FL",
    city: "Miami Beach",
    state: "FL",
    images: [
      "/placeholder-car-1.jpg",
      "/placeholder-car-2.jpg",
    ],
    featured: true,
    category: "Supercar",
    specs: {
      engine: "3.9L Twin-Turbo V8",
      horsepower: 710,
      torque: "568 lb-ft",
      acceleration: "2.9 seconds",
      topSpeed: "211 mph",
      transmission: "7-Speed Dual-Clutch",
      drivetrain: "RWD",
      weight: "2,932 lbs",
      seats: 2,
      fuelType: "Premium Unleaded",
    },
    features: [
      "Carbon Fiber Wheels",
      "Sport Exhaust",
      "Racing Seats",
      "Track Telemetry",
    ],
    description:
      "The most powerful V8 in Ferrari history. This 2024 F8 Tributo is barely broken in and ready to deliver an unforgettable driving experience.",
    mileage: 1200,
    supplierId: "sup-2",
    supplierName: "Maria Garcia",
    supplierAvatar: "/avatar-2.jpg",
    supplierRating: 5.0,
    supplierReviews: 52,
    views: 2134,
    bookings: 41,
  },
  {
    id: "3",
    name: "Lamborghini Huracán EVO",
    make: "Lamborghini",
    model: "Huracán EVO",
    year: 2023,
    price: 1350,
    location: "Los Angeles, CA",
    city: "Los Angeles",
    state: "CA",
    images: ["/placeholder-car-1.jpg"],
    featured: false,
    category: "Supercar",
    specs: {
      engine: "5.2L V10",
      horsepower: 631,
      torque: "443 lb-ft",
      acceleration: "2.9 seconds",
      topSpeed: "202 mph",
      transmission: "7-Speed Dual-Clutch",
      drivetrain: "AWD",
      weight: "3,135 lbs",
      seats: 2,
      fuelType: "Premium Unleaded",
    },
    features: ["Sport Exhaust", "Carbon Fiber Package", "Alcantara Interior"],
    description: "Iconic Italian supercar with naturally aspirated V10 symphony.",
    mileage: 6800,
    supplierId: "sup-3",
    supplierName: "David Chen",
    supplierAvatar: "/avatar-3.jpg",
    supplierRating: 4.8,
    supplierReviews: 29,
    views: 892,
    bookings: 18,
  },
  {
    id: "4",
    name: "Porsche 911 Turbo S",
    make: "Porsche",
    model: "911 Turbo S",
    year: 2024,
    price: 1250,
    location: "Scottsdale, AZ",
    city: "Scottsdale",
    state: "AZ",
    images: ["/placeholder-car-1.jpg"],
    featured: true,
    category: "Sports Car",
    specs: {
      engine: "3.8L Twin-Turbo Flat-6",
      horsepower: 640,
      torque: "590 lb-ft",
      acceleration: "2.6 seconds",
      topSpeed: "205 mph",
      transmission: "8-Speed PDK",
      drivetrain: "AWD",
      weight: "3,640 lbs",
      seats: 4,
      fuelType: "Premium Unleaded",
    },
    features: ["Sport Chrono Package", "Carbon Ceramic Brakes", "Burmester Audio"],
    description: "The ultimate everyday supercar. Comfortable yet devastatingly fast.",
    mileage: 3400,
    supplierId: "sup-1",
    supplierName: "John Smith",
    supplierAvatar: "/avatar-1.jpg",
    supplierRating: 4.9,
    supplierReviews: 37,
    views: 1543,
    bookings: 31,
  },
]

export const mockSuppliers: Supplier[] = [
  {
    id: "sup-1",
    name: "John Smith",
    email: "john@example.com",
    avatar: "/avatar-1.jpg",
    joined: "March 2024",
    rating: 4.9,
    reviews: 37,
    responseTime: "1 hour",
    verified: true,
    bio: "Exotic car enthusiast with 5+ years of experience sharing premium vehicles. All cars are meticulously maintained and tracked.",
    totalRentals: 156,
    listingsCount: 3,
  },
  {
    id: "sup-2",
    name: "Maria Garcia",
    email: "maria@example.com",
    avatar: "/avatar-2.jpg",
    joined: "January 2024",
    rating: 5.0,
    reviews: 52,
    responseTime: "30 minutes",
    verified: true,
    bio: "Miami-based supercar collector. Passionate about delivering unforgettable driving experiences.",
    totalRentals: 203,
    listingsCount: 4,
  },
  {
    id: "sup-3",
    name: "David Chen",
    email: "david@example.com",
    avatar: "/avatar-3.jpg",
    joined: "June 2024",
    rating: 4.8,
    reviews: 29,
    responseTime: "2 hours",
    verified: true,
    bio: "LA native with a collection of European exotics. Always available for questions.",
    totalRentals: 89,
    listingsCount: 2,
  },
]

export const mockCustomer: Customer = {
  id: "cust-1",
  name: "Alex Johnson",
  email: "alex@example.com",
  avatar: "/avatar-customer.jpg",
  joined: "February 2024",
  verified: true,
}

export const mockBookings: Booking[] = [
  {
    id: "BK-12345",
    carId: "1",
    carName: "McLaren 720S Performance",
    carImage: "/placeholder-car-1.jpg",
    customerId: "cust-1",
    customerName: "Alex Johnson",
    supplierId: "sup-1",
    supplierName: "John Smith",
    startDate: "2025-11-01",
    endDate: "2025-11-04",
    totalPrice: 4633,
    status: "confirmed",
    createdAt: "2025-10-20",
  },
  {
    id: "BK-12346",
    carId: "2",
    carName: "Ferrari F8 Tributo",
    carImage: "/placeholder-car-1.jpg",
    customerId: "cust-1",
    customerName: "Alex Johnson",
    supplierId: "sup-2",
    supplierName: "Maria Garcia",
    startDate: "2025-12-15",
    endDate: "2025-12-18",
    totalPrice: 5439,
    status: "pending",
    createdAt: "2025-10-22",
  },
]

export const categories = [
  "Convertible",
  "Supercar",
  "SUV",
  "Sedan",
  "Sports Car",
  "Electric",
  "Vintage",
  "Track Car",
]

export const makes = [
  "Ferrari",
  "Lamborghini",
  "McLaren",
  "Porsche",
  "Aston Martin",
  "Bentley",
  "Rolls-Royce",
  "Mercedes-AMG",
  "BMW M",
  "Audi Sport",
]
