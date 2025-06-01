const resortBrands = [
    {
        id: 1,
        name: "Sandals Resorts",
        logo: "public/vite.svg",
        description: "Sandals Resorts is a luxury all-inclusive resort chain in the Caribbean. It is known for its luxurious accommodations, world-class amenities, and romantic atmosphere.",
        phoneNumber: "555-555-5555",
        priceRange: "$400-$800/night",
        image: "public/images/resort-image-1.webp",
        starRating: 4.5,
        locations: [
            "Jamaica", "Bahamas", "Barbados", "Saint Luica"
        ],
        amenities: [
            "All-inclusive Dining", "Multiple Pools", "Spa Services", "Water Sports", "Golf Courses"
        ],
        resorts: [
            { 
                name: "Sandals Royal Caribbean",
                location: "Montego Bay, Jamaica",
                price: "$450/night",
                rating: 4.7,
                amenities: [
                    "All-inclusive Dining", "Multiple Pools", "Spa Services", "Water Sports", "Golf Courses"
                ],
                images: [
                    "public/vite.svg", "public/vite.svg", "public/vite.svg"
                ]
            },
            {
                name: "Sandals Royal Caribbean",
                location: "Montego Bay, Jamaica",
                price: "$450/night",
                rating: 4.7,
                amenities: [
                    "All-inclusive Dining", "Multiple Pools", "Spa Services", "Water Sports", "Golf Courses"
                ],
            }
            // More Resorts
        ]
    }
    // More Resort Brands
];

export default resortBrands;