const resortBrands = [
    {
        // Sandals Resorts
        id: 1,
        name: "Sandals Resorts",
        logo: "public/images/brands/Sandals/Sandals-logo.jpg",
        description: "Step into a world where paradise is not just a destination but a way of life. Escape to one of 18 Sandals Resorts in the Caribbean, where your tropical oasis awaits. Nestled along the pristine beaches of Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados, Curaçao, and Saint Vincent and The Grenadines, Sandals all-inclusive resorts are more than just a place to stay – they're a sanctuary of the perfect blend of relaxation and adventure. Each day is filled with endless possibilities, so prepare to immerse yourself in the vibrant culture and breathtaking landscapes.\n\nExperience the thrill of exhilarating land and water sports, or perfect your swing on championship golf courses with complimentary green fees. Dive into crystal-clear waters to discover an underwater paradise with PADI® certified scuba diving. Each retreat features a variety of specialty restaurants that take you on a culinary journey around the world, offering gourmet cuisine crafted to suit all tastes. Savor the finest wines and premium liquors at unique bars where every sip is a taste of paradise. Let the magic of the islands sweep you away as you indulge in the ultimate getaway. From the moment you arrive, you'll feel the embrace of island hospitality and the promise of unforgettable memories. Your Caribbean getaway is calling.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Sandals/sandals-hero.jpg",
        starRating: 4.5,
        locations: [
            "Jamaica", "Bahamas", "Barbados", "Saint Luica"
        ],
        resorts: [
            { 
                name: "Sandals Dunn's River",
                location: "Ocho Rios, Jamaica",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 55% Off",
                    "Up to $605 Instant Credit",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/dunns-river.jpg"
                ]
            },
            {
                name: "Sandals Montego Bay",
                location: "Montego Bay, Jamaica",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 65% Off",
                    "Up to $605 Instant Credit",
                    "1 Free Night",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/montego-bay.jpg"
                ]
            },
            {
                name: "Sandals Negril",
                location: "Negril, Jamaica",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 65% Off",
                    "Up to $605 Instant Credit",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/negril.jpg"
                ]
            },
            {
                name: "Sandals Ochi",
                location: "Ocho Rios, Jamaica",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 65% Off",
                    "Up to $605 Instant Credit",
                    "1 Free Night",
                    "FOMO - Fear of Missing Ochi - Book One of the 2 or 4 Bedroom Villas and Receive $350 Experience Credit, Welcome Package, VIP Beach Club Day, Private Poolside Cabana and More!",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/ochi.png"
                ]
            },
            {
                name: "Sandals Royal Caribbean",
                location: "Montego Bay, Jamaica",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 65%",
                    "Up to $605 Instant Credit",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/royal-caribbean.jpg"
                ]
            },
            {
                name: "Sandals Royal Plantation",
                location: "Ocho Rios, Jamaica",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Up to 60% Off",
                    "Up to $605 Instant Credit",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/royal-plantation.jpg"
                ]
            },
            {
                name: "Sandals South Coast",
                location: "Whitehouse, Jamaica",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 65% Off",
                    "Up to $605 Instant Credit",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/south-coast.jpg"
                ]
            },
            {
                name: "Sandals Barbados",
                location: "St. Lawrence Gap, Barbados",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Up to 60% Off",
                    "Up to $1,000 Instant Credit",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/barbados.jpg"
                ]
            },
            {
                name: "Sandals Grande Antigua",
                location: "Saint Johns, Antigua",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 65% Off",
                    "Up to $635 Instant Credit",
                    "1 Free Night",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/antigua-aerial.jpg"
                ]
            },
            {
                name: "Sandals Grande St. Lucian",
                location: "Gros-Islet, Saint Lucia",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 65% Off",
                    "Up to $635 Instant Credit",
                    "1 Free Night",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/grande-st-lucian.jpeg"
                ]
            },
            {
                name: "Sandals Grenada",
                location: "St. George's, Grenada",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 65% Off",
                    "Up to $1,000 Instant Credit",
                    "1 Free Night",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/grenada.jpg"
                ]
            },
            {
                name: "Sandals Halcyon Beach",
                location: "Castries, St. Lucia",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 65% Off",
                    "Up to $635 Instant Credit",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/halcyon-beach.jpg"
                ]
            },
            {
                name: "Sandals Regency La Toc",
                location: "Castries, Saint Lucia",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 65% Off",
                    "Up to $635 Instant Credit",
                    "1 Free Night",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/latoc.jpg"
                ]
            },
            {
                name: "Sandals Royal Bahamian",
                location: "Nassau, Bahamas",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save up to 65% Off",
                    "Up to $1,000 Instant Credit",
                    "Select Room Categories Include Convertible Mini Cooper Adventure Drive & $250 Dine Out Credit",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/royal-bahamian.jpg"
                ]
            },
            {
                name: "Sandals Royal Barbados",
                location: "St. Lawrence Gap, Barbados",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 65% Off",
                    "Up to $1,000 Instant Credit",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/royal-barbados.jpg"
                ]
            },
            {
                name: "Sandals Royal Curaçao",
                location: "Santa Barbara, Curaçao",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 55% Off",
                    "Up to $1,000 Instant Credit",
                    "Select Room Categories Include Convertible Mini Cooper Adventure Drive & $250 Dine Out Credit",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/royal-curacaohear.jpg"
                ]
            },
            {
                name: "Sandals Saint Vincent and the Grenadines",
                location: "Saint Vincent",
                price: "Call for Special Pricing",
                rating: 4.7,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults-Only",
                    "Free Catamaran Cruise for Two On 5+ Nights",
                    "Save Up to 55% Off",
                    "Up to $1,000 Instant Credit",
                    "Service Personnel Discount: Save an Additional 10%"
                ],
                images: [
                    "/images/brands/Sandals/saint-vincent.jpg"
                ]
            }
        ]
    },
    // More Resort Brands
    {
        // Playa Resorts
        id: 2,
        name: "Playa Resorts",
        logo: "public/images/brands/Playa/Playa-logo.jpg",
        description: "Playa Resorts offer a vacation along breathtaking coastlines and the promise of luxury. Each destination under the Playa Resorts umbrella offers a slice of paradise, stretching from the pristine beaches of Mexico to the charming coasts of the Dominican Republic and Jamaica. Whether you choose the sophisticated elegance of Hyatt Ziva and Zilara, the welcoming ambiance of Hilton All-Inclusive Resorts, or another of Playa's enticing brands, there's an idyllic retreat just for you.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Playa/playa-hero.jpg",
        starRating: 4.5,
        locations: [
            "Dominican Republic", "Jamaica", "Mexico"
        ],
        resorts: [
            {
                name: "Jewel Grande Montego Bay Resort & Spa",
                location: "Montego Bay, Jamaica",
                price: "~$400/night",
                rating: 5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Unlimited Adult Beverages", "Unlimited Access to All Restaurants", "Beachfront", "Water Sports"
                ],
                images: [
                    "/images/brands/Playa/montego-bay.jpg"
                ]
            },
            { 
                name: "Paraiso de la Bonita",
                location: "Rivieria Maya, Mexico",
                price: "~$450/night",
                rating: 4,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive Dining", "Adults Only", "Luxury", "Water Sports", "Golf Courses"
                ],
                images: [
                    "/images/brands/Playa/la-bonita.jpg"
                ]
            },
            { 
                name: "Seadust Cancun Family Resort",
                location: "Cancun, Mexico",
                price: "~$450/night",
                rating: 4,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive Dining", "Mini-Golf", "Zip lines", "Water Sports", "Show and Theater Productions", "Kids Club"
                ],
                images: [
                    "/images/brands/Playa/ocean-front.jpg"
                ]
            },
            { 
                name: "Hyatt Zilara Cancun",
                location: "Cancun, Mexico",
                price: "~$450/night",
                rating: 5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "Oceanfront Dining", "Multiple Pools", "Microbrewery", "3 Infinity Pools", "Spa Services"
                ],
                images: [
                    "/images/brands/Playa/zilara-cancun.jpg"
                ]
            },
        ]
    },
    {
        // Couples Resorts
        id: 3,
        name: "Couples Resorts",
        logo: "public/images/brands/Couples/couples-logo.png",
        description: "Four legendary resorts, one guiding philosophy: romance is effortless when everything is included. From Ocho Rios to Negril, each of our oceanfront resorts is the setting for unforgettable, made-for-two memories. Whether it's another round of golf, an extra splash of rum, or a longer sunset sail, we love nothing more than going above and beyond to create the ultimate all-inclusive romantic getaway.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Couples/Couples-Resorts-hero.webp",
        starRating: 4.5,
        locations: [
            "Jamaica"
        ],
        resorts: [
            {
                name: "Couples Tower Isle",
                location: "Negril, Jamaica",
                price: "~$450/night",
                rating: 5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive", "Private Au Naturel Beach", "Oasis Spa & Signature Oasis Spa Villas"
                ],
                images: [
                    "/images/brands/Couples/tower-isle.jpg"
                ]
            },
            {
                name: "Couples Sans Souci",
                location: "Ocho Rios, Jamaica",
                price: "~$450/night",
                rating: 5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive", "Sports & Fitness Facilities", "Charlie's Spa & Hibiscus Spa", "3 Swimming Pools & 3 Jacuzzis"
                ],
                images: [
                    "/images/brands/Couples/sans-souci.jpg"
                ]
            },
            {
                name: "Couples Swept Away",
                location: "Negril, Jamaica",
                price: "~$450/night",
                rating: 5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive Dining", "Oasis Spa", "Sports & Fitness Facilities", "Au Naturel Beach & Jacuzzi"
                ],
                images: [
                    "/images/brands/Couples/swept-away.jpg"
                ]
            },
        ]
    },
    {
        // Riu Hotels & Resorts
        id: 4,
        name: "RIU Hotels & Resorts",
        logo: "public/images/brands/RIU/RIU-logo.png",
        description: "RIU Hotels & Resorts is a luxury all-inclusive resort chain in the Caribbean. It is known for its luxurious accommodations, world-class amenities, and romantic atmosphere.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/RIU/RIU-hero.jpg",
        starRating: 4.5,
        locations: [
            "Dominican Republic", "Jamaica", "Mexico"
        ],
        resorts: [
            {
                name: "Riu Latino",
                location: "Costa Mujeres, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive Dining", "Oasis Spa", "Sports & Fitness Facilities", "3 Swimming Pools & 5 Jacuzzis"
                ],
                images: [
                    "/images/brands/RIU/RiuLatino_Aerial.jpg"
                ]
            },
            {
                name: "Riu Palace Cabo San Lucas",
                location: "Cabo San Lucas, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive Dining", "Oasis Spa", "Sports & Fitness Facilities", "3 Swimming Pools & 5 Jacuzzis"
                ],
                images: [
                    "/images/brands/RIU/RiuPalaceCaboSanLucas.jpg"
                ]
            },
            {
                name: "Riu Palace Las Americas",
                location: "Cancun, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive Dining", "Oasis Spa", "Sports & Fitness Facilities", "3 Swimming Pools & 5 Jacuzzis"
                ],
                images: [
                    "/images/brands/RIU/RiuPalaceLasAmericas_Aerial.jpg"
                ]
            },
            {
                name: "Riu Palace Kukulkan",
                location: "Cancun, Mexico",
                price: "~$450/night",
                rating: 5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive Dining", "Oasis Spa", "Sports & Fitness Facilities", "3 Swimming Pools & 5 Jacuzzis"
                ],
                images: [
                    "/images/brands/RIU/RiuPalace_Kukulkan_Pool.jpg"
                ]
            },
            {
                name: "Riu Palace Pacifico",
                loocation: "Riveria Nayarit, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive Dining", "Oasis Spa", "Sports & Fitness Facilities", "3 Swimming Pools & 5 Jacuzzis"
                ],
                images: [
                    "/images/brands/RIU/RiuPalacePacifico_PoolHotel.jpg"
                ]
            },
            {
                name: "Riu Palace Paradise Island",
                location: "Paradise Island, Bahamas",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive Dining", "Oasis Spa", "Sports & Fitness Facilities", "3 Swimming Pools & 5 Jacuzzis"
                ],
                images: [
                    "/images/brands/RIU/RiuPalaceParadiseIsland.jpg"
                ]
            },
            {
                name: "Riu Republica",
                location: "Punta Cana, Dominican Republic",
                price: "~$450/night",
                rating: 4,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive Dining", "Oasis Spa", "Sports & Fitness Facilities", "3 Swimming Pools & 5 Jacuzzis"
                ],
                images: [
                    "/images/brands/RIU/RiuRepublica_Aerial.jpg"
                ]
            },
            {
                name: "Riu Palace Peninsula",
                location: "Cancun, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive Dining", "Oasis Spa", "Sports & Fitness Facilities", "3 Swimming Pools & 5 Jacuzzis"
                ],
                images: [
                    "/images/brands/RIU/RiuPalaceTropicalBay.jpg"
                ]
            },
            {
                name: "Riu Palace Riviera Maya",
                location: "Rivieria Maya, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-inclusive Dining", "Oasis Spa", "Sports & Fitness Facilities", "3 Swimming Pools & 5 Jacuzzis"
                ],
                images: [
                    "/images/brands/RIU/RiuPalaceAquarelle.jpg"
                ]
            },
        ]
    },
    {
        //Hyatt Vivid
        id: 5,
        name: "Hyatt Vivid Hotels & Resorts",
        logo: "public/images/brands/Hyatt/Hyatt-Vivid-logo.jpg",
        description: "Escape to Hyatt Vivid Grand Island in Cancun, Mexico, where the beauty of the Caribbean meets the effortless charm of a modern, all-inclusive adults-only retreat. Designed for travelers seeking casual comfort and simple pleasures, Hyatt Vivid offers a fresh and relaxed atmosphere infused with vibrant energy. Savor unique dining experiences without reservations, enjoy limitless premium beverages, and indulge in various daytime activities and nightly entertainment. Balance indulgence with wellness by trying fitness classes, meditation sessions, or enjoying the full-service spa. At Hyatt Vivid Grand Island, carefree living comes naturally.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Hyatt/hyatt-vivid-hero.jpg",
        starRating: 4.5,
        locations: [
            "Mexico"
        ],
        resorts: [
            {
                name: "Hyatt Vivid Grand Island",
                location: "Cancun, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Adults Only"
                ],
                images: [
                    "/images/brands/Hyatt/HyattVividGrandIsland.jpg"
                ]
            }
        ]
    },
    {
        // Hyatt Ziva & Zilara
        id: 6,
        name: "Hyatt Ziva & Zilara",
        logo: "public/images/brands/Hyatt-Ziva/Hyatt-Zilara-Ziva-logo.jpg",
        description: "Hyatt Zilara invites you to indulge in an elevated escape designed exclusively for adults. Relax on pristine beaches, savor gourmet dining, and unwind in luxurious accommodations with breathtaking ocean views. Infinity pools blend seamlessly with the horizon, while world-class spas offer rejuvenating treatments to refresh your mind, body, and soul. Whether you seek adventure, serenity, or romance, Hyatt Zilara creates unforgettable moments in paradise.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Hyatt-Ziva/hyatt-ziva-hero.jpg",
        starRating: 4.5,
        locations: [
            "Jamaica", "Dominican Republic", "Mexico"
        ],
        resorts: [
            {
                name: "Hyatt Zilara Cancun",
                location: "Cancun, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Adults Only"
                ],
                images: [
                    "/images/brands/Hyatt-Ziva/HyattZivaCancun_BarDelMarSwimUpBar.jpg"
                ]
            },
            {
                name: "Hyatt Zilara Cap Cana",
                location: "Cap Cana, Dominican Republic",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Adults Only"
                ],
                images: [
                    "/images/brands/Hyatt-Ziva/HyattZilaraCapCana_InfinityPoolSunrise.jpg"
                ]
            },
            {
                name: "Hyatt Ziva Rose Hall",
                location: "Montego Bay, Jamaica",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Adults Only"
                ],
                images: [
                    "/images/brands/Hyatt-Ziva/HyattZivaRoseHall_Aerial.jpg"
                ]
            },
            {
                name: "Hyatt Ziva Cancun",
                location: "Cancun, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly"
                ],
                images: [
                    "/images/brands/Hyatt-Ziva/HyattZivaCancun_BarDelMarSwimUpBar.jpg"
                ]
            },
            {
                name: "Turquoize at Hyatt Ziva Cancun",
                location: "Cancun, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Adult Only", "Luxury"
                ],
                images: [
                    "/images/brands/Hyatt-Ziva/TurquoizeAtHyattZivaCancun_TowerTurquoizeSkySwimUpOceanfrontMasterKingDouble.jpg"
                ]
            },
            {
                name: "Hyatt Ziva Cap Cana",
                location: "Cap Cana, Dominican Republic",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Adults Only"
                ],
                images: [
                    "/images/brands/Hyatt-Ziva/HyattZilaraCapCana_InfinityPoolSunrise.jpg"
                ]
            },
            {
                name: "Hyatt Ziva Los Cabos",
                location: "Los Cabos, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly"
                ],
                images: [
                    "/images/brands/Hyatt-Ziva/HyattZivaLosCabos_Aerial.jpg"
                ]
            },
            {
                name: "Hyatt Ziva Puerto Vallarta",
                location: "Puerto Vallarta, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly"
                ],
                images: [
                    "public/vite.svg", "public/vite.svg", "public/vite.svg"
                ]
            },
            {
                name: "Hyatt Ziva Riveria Maya",
                location: "Cancun, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly"
                ],
                images: [
                    "/images/brands/Hyatt-Ziva/HyattZivaPuertoVallarta_PalmasPool.jpg"
                ]
            },
            {
                name: "Hyatt Ziva Riviera Maya",
                location: "Cancun, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly"
                ],
                images: [
                    "/images/brands/Hyatt-Ziva/HyattZivaRivieraCancun.jpg"
                ]
            }
        ]
    },
    {
        // Hyatt Inclusive Collection
        id: 7,
        name: "Hyatt Inclusive Collection",
        logo: "public/images/brands/Hyatt-Inclusive/Inclusive-Collection-logo.jpg",
        description: "Celebrate every moment with the Inclusive Collection, part of World of Hyatt. Whether you envision a vacation for family fun, a much-needed friend's getaway, or a romantic couples retreat, you'll find the perfect fit at one of Inclusive Collection's stunning resorts. Each destination strives to create an experience that exceeds all expectations, ensuring your stay is memorable from start to finish.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Hyatt-Inclusive/hyatt-inclusive-hero.jpg",
        starRating: 4.5,
        locations: [
            "Jamaica", "Dominican Republic", "Mexico", "Columbia", "Curacao", "Panama", "Spain", "Greece", "Portugal", "Bulgaria", "Aruba", "Costa Rica", "St. Lucia", "St. Martin"
        ],
        resorts: [
            {
                name: "Breathless Cabo San Lucas Resort & Spa",
                location: "Cabo San Lucas, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Adults Only"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/BreathlessCaboSanLucas.jpg"
                ]
            },
            {
                name: "Breathless Punta Cana Resort & Spa",
                location: "Punta Cana, Dominican Republic",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Adults Only"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/BreathlessPuntaCana.jpg"
                ]
            },
            {
                name: "Breathless Rivera Cancun Resort & Spa",
                location: "Cancun, Mexico",
                price: "~$450/night",
                rating: 5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Adults Only"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/BreathlessRivieraCancun.jpg"
                ]
            },
            {
                name: "Dreams Adventure Riveria Maya",
                location: "Riveria Maya, Mexico",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsAventurasRivieraMaya_Aerial.jpg"
                ]
            },
            {
                name: "Dreams® Bahia Mita Surf & Spa Resort",
                location: "Puerto Vallarta, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!",
                    "$50 in Resort Credits Per Person, Per Night"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsBahiaMitaSurfSpaResort_TopPoolWaterslide.jpg"
                ]
            },
            {
                name: "Dreams® Cozumel Cape Resort & Spa",
                location: "Cozumel, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsCozumelCapeResortSpa_PreferredClubJuniorSuiteSwimOutPoolViewTerrace.jpg"
                ]
            },
            {
                name: "Dreams® Curacao Resort, Spa & Casino",
                location: "Willemstad, Curacao",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsCuracaoResortSpaCasino_PreferredClubIlMareAdultsOnlySection.jpg"
                ]
            },
            {
                name: "Dreams® Dominicus La Romana",
                location: "La Romana, Dominican Republic",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsDominicusLaRomana_MainPool.jpg"
                ]
            },
            {
                name: "Dreams® Estrella del Mar Mazatlan Golf & Spa Resort",
                location: "Mazatlan, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsEstrelladelMar.jpg"
                ]
            },
            {
                name: "Dreams® Flora Resort & Spa",
                location: "Punta Cana, Dominican Republic",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsFloraResortSpa_Aerial.jpg"
                ]
            },
            {
                name: "Dreams® Huatulco Resort & Spa",
                location: "Huatulco, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsHuatulcoResortSpa_Aerial.jpg"
                ]
            },
            {
                name: "Dreams® Jade Resort & Spa",
                location: "Puerto Moreles, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsJadeResortSpa_Aerial.jpg"
                ]
            },
            {
                name: "Dreams® Karibana Cartegana Golf & Spa Resort",
                location: "Cartagena, Columbia",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsKaribanaCarteganaGolfSpaResort_JuniorSuitePoolViewTerrace.jpeg"
                ]
            },
            {
                name: "Dreams® Los Cabos Suites Golf Resort & Spa",
                location: "Cabo San Lucas, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsLosCabosSuitesGolfResortSpa_MainPoolPanoramic.jpg"
                ]
            },
            {
                name: "Dreams® Macao Beach Punta Cana",
                location: "Punta Cana, Dominican Republic",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsMacaoBeachPuntaCana_AerialWaterparkLazyRiver.jpg"
                ]
            },
            {
                name: "Dreams® Natura Resort & Spa",
                location: "Cancun, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsNatura.jpg"
                ]
            },
            {
                name: "Dreams® Onyx Resort & Spa",
                location: "Punta Cana, Dominican Republic",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsOnyx.jpg"
                ]
            },
            {
                name: "Dreams® Playa Bonita Panama",
                location: "Panama City, Panama",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsPlayaBonitaPanama_MainPool.jpg"
                ]
            },
            {
                name: "Dreams® Playa Esmeralda Resort & Spa",
                location: "Playa Esmeralda, Miches, Dominican Republic",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "New Resort Opening Mid-Summer 2025!",
                    "Save Up to 40%",
                    "Receive $200 in Resort Coupons",
                    "Kids Stay Free",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsPlayaEsmeraldaResortSpa_Lobby.jpg"
                ]
            },
            {
                name: "Dreams® Playa Mujeres Golf & Spa Resort",
                location: "Playa Mujeres, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsPlayaMujeresGolfSpaResort_LazyRiverPreferredClub2BRVillas.jpg"
                ]
            },
            {
                name: "Dreams® Riviera Cancun Resort & Spa",
                location: "Puerto Moreles, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsRivieraCancunResortSpa_HydrotherapyCircuitSpaGarden.jpg"
                ]
            },
            {
                name: "Dreams® Royal Beach Punta Cana",
                location: "Punta Cana, Dominican Republic",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsRoyalBeachPuntaCana_AerialPools.jpg"
                ]
            },
            {
                name: "Dreams® Sands Cancun Resort & Spa",
                location: "Cancun, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsSandsCancunResort_AerialSpa.jpg"
                ]
            },
            {
                name: "Dreams® Sapphire Resort & Spa",
                location: "Puerto Morelos, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsSapphireResortSpa_RooftopPool.jpg"
                ]
            },
            {
                name: "Dreams® Tulum Resort & Spa",
                location: "Tulum, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsTulumResortSpa_MainPool.jpg"
                ]
            },
            {
                name: "Dreams® Vallarta Bay Resort & Spa",
                location: "Puerto Vallarta, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsVallartaBayResortSpa_Aerial.jpg"
                ]
            },
            {
                name: "Dreams® Vista Cancun Golf & Spa Resort",
                location: "Cancun, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsVistaCancun.jpg"
                ]
            },
            {
                name: "Dreams® Calvia Mallorca",
                location: "Spain",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "Save Up to 30%",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, selection of unlimited national and international drinks and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsCalviaMallorca_WorldCafeTerrace.jpg"
                ]
            },
            {
                name: "Dreams® Corfu Resort & Spa",
                location: "Greece",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "Save Up to 30%",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, selection international drinks and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsCorfuResortSpa_PreferredClubFamily2BedroomSeaView.jpg"
                ]
            },
            {
                name: "Dreams® Jardin Tropical Resort & Spa",
                location: "Spain",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "Save Up to 30%",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, selection international drinks and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsJardinTropicalResortSpa_DreamsJardinTropicalViews.jpg"
                ]
            },
            {
                name: "Dreams® Lanzarote Playa Dorada Resort & Spa",
                location: "Spain",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "Save Up to 30%",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, selected international drinks and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsLanzarotePlayaDoradaResortSpa_BarracudaPool.jpg"
                ]
            },
            {
                name: "Dreams® Madeira Resort, Spa & Marina",
                location: "Portugal",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "Save Up to 30%",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, selection international drinks and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsMadeiraResortSpaMarina_Aerial.jpg"
                ]
            },
            {
                name: "Dreams® Sunny Beach Resort & Spa",
                location: "Bulgaria",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "Save Up to 30%",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, selection international drinks and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/DreamsSunnyBeachResortSpa_Hotel.jpg"
                ]
            },
            {
                name: "Hyatt Vivid Grand Island",
                location: "Cancun, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Limitless Dining Options Available 24/7, Unlimited Beverages, Room Service & More!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/HyattVividGrandIsland.jpg"
                ]
            },
            {
                name: "Hyatt Zilara® Riviera Maya",
                location: "Riviera Maya, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/HyattZilaraRivieraMaya.jpg"
                ]
            },
            {
                name: "Hyatt Ziva® Riviera Maya",
                location: "Cancun, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/HyattZivaRivieraCancun.jpg"
                ]
            },
            {
                name: "Impression Isla Mujeres by Secrets",
                location: "Cancun, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "Luxury",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Intimate line of boutique, adults-only havens",
                    "Curated moments for the well-connected connoisseur",
                    "Unparalleled service with elevated Endless Privileges®"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/ImpressionIslaMujeresbySecrets.jpg"
                ]
            },
            {
                name: "Impression Moxche by Secrets",
                location: "Playa del Carmen, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "Luxury",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Intimate line of boutique, adults-only havens",
                    "Curated moments for the well-connected connoisseur",
                    "Unparalleled service with elevated Endless Privileges®"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/ImpressionMoxchebySecrets.jpg"
                ]
            },
            {
                name: "Secrets® Akumal Riviera Maya",
                location: "Cancun, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsAkumalRivieraMaya_Aerial.jpg"
                ]
            },
            {
                name: "Secrets® Aura Cozumel",
                location: "Cozumel, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsAuraCozumel.jpg"
                ]
            },
            {
                name: "Secrets® Baby Beach Aruba",
                location: "Baby Beach Bay, Aruba",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "New Resort Opening June 2025",
                    "Grand Opening Discounted Rates",
                    "$200 In Resort Coupons",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsBabyBeach.jpg"
                ]
            },
            {
                name: "Secrets® Bahia Mita Surf & Spa Resort",
                location: "Puerto Vallarta, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsBahiaMitaSurfSpaResort_Resort.jpg"
                ]
            },
            {
                name: "Secrets® Bahía Real Resort & Spa",
                location: "La Oliva, Spain",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Up to 30% Off",
                    "Unlimited-Luxury® - Includes most dining, select drinks, and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsBahíaRealResortSpa_JuniorSuiteFrontalOcean.jpg"
                ]
            },
            {
                name: "Secrets® Cap Cana Resort & Spa",
                location: "Punta Cana, Dominican Republic",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsCapCanaResortSpa_PreferredClubBungalow.jpg"
                ]
            },
            {
                name: "Secrets® Huatulco Resort & Spa",
                location: "Huatulco, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsHuatulcoResortSpa_Aerial.jpg"
                ]
            },
            {
                name: "Secrets® Lanzarote Resort & Spa",
                location: "Lanzarote, Spain",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Up to 30% Off",
                    "Unlimited-Luxury® - Includes dining, select drinks, and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsLanzaroteResortSpa_Pool.jpg"
                ]
            },
            {
                name: "Secrets® Mallorca Villamil Resort & Spa",
                location: "Mallorca, Spain",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Up to 30% Off",
                    "Unlimited-Luxury® - Includes dining, select drinks, and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsMallorcaVillamilResortSpa_PoolBeachBay.jpg"
                ]
            },
            {
                name: "Secrets® Maroma Beach Riviera Cancun",
                location: "Playa del Carmen, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsMaromaBeachRivieraCancun_InfinityPool.jpg"
                ]
            },
            {
                name: "Secrets® Moxché Playa del Carmen",
                location: "Playa del Carmen, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsMoxche.jpg"
                ]
            },
            {
                name: "Secrets® Papagayo Costa Rica",
                location: "Guanacaste, Costa Rica",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsPapagayoCostaRicaresort_Aerial.jpg"
                ]
            },
            {
                name: "Secrets® Playa Blanca Costa Mujeres",
                location: "Costa Mujeres, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsPlayaBlancaCostaMujeres_Aerial.jpg"
                ]
            },
            {
                name: "Secrets® Playa Esmeralda Resort & Spa",
                location: "Miches, Dominican Republic",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "New Resort! Opening Mid-Summer 2025",
                    "Grand Opening Discounted Rates",
                    "$200 In Resort Coupons",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsPlayaEsmeralda.jpg"
                ]
            },
            {
                name: "Secrets® Playa Mujeres Golf & Spa Resort",
                location: "Playa Mujeres, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsPlayaMujeresGolfSpaResort_MainPool.jpg"
                ]
            },
            {
                name: "Secrets® Puerto Los Cabos Golf & Spa Resort",
                location: "Puerto Los Cabos, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsPuertoLosCabos.jpg"
                ]
            },
            {
                name: "Secrets® Riviera Cancun Resort & Spa",
                location: "Cancun, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsRivieraCancunResortSpa_Aerial.jpg"
                ]
            },
            {
                name: "Secrets® Royal Beach Punta Cana",
                location: "Punta Cana, Dominican Republic",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsRoyalBeachPuntaCana_LazyRiverPool.jpg"
                ]
            },
            {
                name: "Secrets® St. James Montego Bay",
                location: "Montego Bay, Jamaica",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsStJames.jpg"
                ]
            },
            {
                name: "Secrets® St. Lucia Resort & Spa",
                location: "Choc Bay, St. Lucia",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "New Resort! Opening June 2025",
                    "Grand Opening Discounted Rates",
                    "$200 In Resort Coupons",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsStLuciaResortSpa_Lobby.jpg"
                ]
            },
            {
                name: "Secrets® St. Martin Resort & Spa",
                location: "Anse Marcel Beach, St. Martin",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsStMartinResortSpa_AerialPool.jpg"
                ]
            },
            {
                name: "Secrets® Sunny Beach Resort & Spa",
                location: "Sunny Beach, Bulgaria",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Up to 30% Off",
                    "Unlimited-Luxury® - Includes dining, select drinks, and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsSunnyBeachResortSpa_AerialPoolBeach.jpg"
                ]
            },
            {
                name: "Secrets® The Vine Cancun",
                location: "Cancun, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsTheVine.jpg"
                ]
            },
            {
                name: "Secrets® Tides Punta Cana",
                location: "Punta Cana, Dominican Republic",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsTides.jpg"
                ]
            },
            {
                name: "Secrets® Tulum Resort & Beach Club",
                location: "Tulum, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsTulum.jpg"
                ]
            },
            {
                name: "Secrets® Vallarta Bay Puerto Vallarta",
                location: "Puerto Vallarta, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsVallartaBayPuertoVallarta_Aerial.jpg"
                ]
            },
            {
                name: "Secrets® Wild Orchid Montego Bay",
                location: "Montego Bay, Jamaica",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Adults Only",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Unlimited-Luxury® - Includes all meals, beverages and more!"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/SecretsWildOrchidMontegoBay_Aerial.jpg"
                ]
            },
            {
                name: "Zoëtry® Agua Punta Cana",
                location: "Punta Cana, Dominican Republic",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Endless Privileges® - Your Luxury Inclusions: Endless Dining & Drinks, Personalized Service, Elevated Amenities, Enrichment Experiences"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/ZoetryAguaPuntaCana.jpg"
                ]
            },
            {
                name: "Zoëtry® Casa del Mar Los Cabos",
                location: "Cabo San Lucas, Mexico",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Endless Privileges® - Your Luxury Inclusions: Endless Dining & Drinks, Personalized Service, Elevated Amenities, Enrichment Experiences"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/ZoetryCasadelMar.jpg"
                ]
            },
            {
                name: "Zoëtry® Curacao Resort & Spa",
                location: "Willemstad, Curacao",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Endless Privileges® - Your Luxury Inclusions: Endless Dining & Drinks, Personalized Service, Elevated Amenities, Enrichment Experiences"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/ZoetryCuracao.jpg"
                ]
            },
            {
                name: "Zoëtry® Marigot Bay St. Lucia",
                location: "Marigot Bay, St. Lucia",
                price: "Call For Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "Complimentary Transfers",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Endless Privileges® - Your Luxury Inclusions: Endless Dining & Drinks, Personalized Service, Elevated Amenities, Enrichment Experiences"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/ZoetryMarigotBayStLucia_AerialMarina.jpg"
                ]
            },
            {
                name: "Zoëtry® Montego Bay Jamaica",
                location: "Montego Bay, Jamaica",
                price: "Call for Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Endless Privileges® - Your Luxury Inclusions: Endless Dining & Drinks, Personalized Service, Elevated Amenities, Enrichment Experiences"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/ZoetryMontegoBay.jpg"
                ]
            },
            {
                name: "Zoëtry® Mallorca",
                location: "Balearic Islands, Spain",
                price: "Call For Special Pricing",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive",
                    "Family Friendly",
                    "$50 in Resort Credits Per Person, Per Night",
                    "Endless Privileges® - Your Luxury Inclusions: Endless Dining & Drinks, Personalized Service, Elevated Amenities, Enrichment Experiences"
                ],
                images: [
                    "/images/brands/Hyatt-Inclusive/ZoetryMallorca_WindmillBicycles.jpg"
                ]
            }
        ]
    },
    {
        // The Sanctuary Beach Resorts
        id: 8,
        name: "The Sanctuary Beach Resort",
        logo: "public/images/brands/Sanctuary/sanctuary-logo.png",
        description: "Nestled on 19 acres of pristine Pacific shoreline, The Sanctuary Beach Resort invites you to escape and enjoy the best of the California Coast. Rise and shine to beachfront views, savor artisanal cuisine, and take in nature's beauty. At the end of the day, cozy up by a firepit on the sand and fall asleep to the sound of breaking waves. When you're ready to explore, discover local wineries and all the sights of Monterey Bay. You'll also find open spaces, modern facilities, state-of-the-art technology, and California hospitality perfect for hosting groups and events.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Sanctuary/sanctuary-hero.jpg",
        starRating: 4.5,
        locations: [
            "United States"
        ],
        resorts: [
            {
                name: "The Sanctuary Beach Resort",
                location: "Monterey, California",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly"
                ],
                images: [
                    "/images/brands/Sanctuary/SanctuaryCapCana_Pool.jpg"
                ]
            }
        ]
    },
    {
        // Eko Hotels
        id: 9,
        name: "Eko Hotels & Suites",
        logo: "public/images/brands/Eko/ecko-hotel-logo.png",
        description: "Eko Hotels & Suites is the most preferred hotel in West Africa, and it is all about the right mix! Located in the heart of Victoria Island, we offer our clients a perfect blend of business & leisure amenities with dining and recreational options delicately infused in one amazing space. We crown all these with services that meet the highest international standards.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Eko/eko-hero.jpg",
        starRating: 4.5,
        locations: [
            "Nigeria"
        ],
        resorts: [
            {
                name: "Eko Hotels & Suites",
                location: "Victoria Island, Nigeria",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly"
                ],
                images: [
                    "/images/brands/Eko/eko-hotel.jpg"
                ]
            }
        ]
    },
    {
        // Raddisson Hotel
        id: 10,
        name: "Raddisson Hotel",
        logo: "public/images/brands/Raddisson/raddisson-logo.webp",
        description: "Host a grand reception, business conference, or an intimate board meeting at the Radisson Blu Hotel Lagos Ikeja. With a total meeting space of 2,047 square meters, we can host 400 delegates, theater-style. All our eight meeting rooms are equipped with the latest audiovisual technology, fast free Wi-Fi a dedicated bar, and three creative breakout rooms. Contact our professional team today and let us help plan your next event.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Raddisson/raddisson-hero.jpg",
        starRating: 4.5,
        locations: [
            "Nigeria"
        ],
        resorts: [
            {
                name: "Raddisson Blu Anchorage Hotel",
                location: "Lagos, Nigeria",
                price: "~$150/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly", "Free Wifi", "Grab & Go Breakfast", "Free Airport Transfer"
                ],
                images: [
                    "/images/brands/Raddisson/radisson-blu.jpg"
                ]
            }
        ]
    },
    {
        // Black Diamond Nigeria
        id: 12,
        name: "Black Diamond Hotel",
        logo: "public/images/brands/Black-Diamond/black-diamond-logo.webp",
        description: "Tasteful cuisine, sumptuous settings and beautifully-designed suites await. A selection of well-appointed meeting & training rooms will cater to all of your business needs. For unforgettable occasions and special celebrations, our hotel presents an elegant and spacious event room that exudes sophistication and style. Our many facilities and amenities have been thought out and designed with you and your needs in mind, to offer the best and most comfortable experience all around, from check-in to check-out. ",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Black-Diamond/black-diamond-hero.jpg",
        starRating: 4.5,
        locations: [
            "Nigeria"
        ],
        resorts: [
            {
                name: "Black Diamond Hotel",
                location: "Lagos, Nigeria",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly", "Free Wifi", "Grab & Go Breakfast", "Free Airport Transfer"
                ],
                images: [
                    "/images/brands/Black-Diamond/black-diamond-hotel.jpg"
                ]
            }
        ]
    },
    {
        // Marriott Hotel
        id: 13,
        name: "Marriott Hotel",
        logo: "public/images/brands/Marriott/marriott-logo.png",
        description: "Lagos Marriott Hotel Ikeja sets a new standard as a 5-star conference hotel in Ikeja showcasing inspiring and contemporary décor within the capital of Nigeria's commercial hub. Our hotel provides ample parking and is ideally suited for both business and leisure travelers to Lagos. Unwind in one of our modern and carefully designed rooms and suites; enjoy the city views, premium Wi-Fi, luxurious beddings and amenities.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Marriott/marriott-hero.png",
        starRating: 4.5,
        locations: [
            "Nigeria"
        ],
        resorts: [
            {
                name: "Lagos Marriott Hotel Ikeja",
                location: "Lagos, Nigeria",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly", "Free Wifi", "Grab & Go Breakfast", "Free Airport Transfer"
                ],
                images: [
                    "/images/brands/Marriott/marriott-hotel.jpg"
                ]
            }
        ]
    },
    {
        // Hilton Hotel Abuja
        id: 14,
        name: "Hilton Hotel",
        logo: "public/images/brands/Hilton/Hilton-logo.jpg",
        description: "Set on picturesque landscaped gardens, our hotel sits at the heart of Nigeria's Federal Capital Territory and Abuja's commercial district. We're less than three kilometers from Abuja National Mosque and Millennium Park, within 20 minutes of the city center. Enjoy our on-site casino, handicraft market, airline kiosks, 24-hour fitness center, and outdoor pool.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Hilton/hilton-hero.jpg",
        starRating: 4.5,
        locations: [
            "Nigeria"
        ],
        resorts: [
            {
                name: "Hilton Hotel",
                location: "Abuja, Nigeria",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly", "Free Wifi", "Grab & Go Breakfast", "Free Airport Transfer"
                ],
                images: [
                    "/images/brands/Hilton/hilton-hotel-2.jpg"
                ]
            }
        ]
    },
    {
        // Fraser Suites Abuja
        id: 15,
        name: "Fraser Suites",
        logo: "public/images/brands/Fraser/fraser-logo.jpeg",
        description: "Lavish dining options, a fully-equipped gym, swimming pool, landscaped gardens and high-tech security complement your stay in our luxury hotel in Abuja, with a range of studios to four-bedroom penthouses to choose from. Whether you're in Nigeria for a quick getaway or an extended stay, your visit will be a memorable one. ",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Fraser/fraser-suites-hero.jpg",
        starRating: 4.5,
        locations: [
            "Nigeria"
        ],
        resorts: [
            {
                name: "Fraser Suites",
                location: "Abuja, Nigeria",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly", "Free Wifi", "Grab & Go Breakfast", "Free Airport Transfer"
                ],
                images: [
                    "/images/brands/Fraser/fraser-hotel.jpg"
                ]
            }
        ]
    },
    {
        // Abuja Continental
        id: 16,
        name: "Abuja Continental",
        logo: "public/images/brands/Abuja-Continental/abuja-logo.png",
        description: "Abuja Continental is a 5-star hotel located at 1 Ladi Kwali Street, Wuse Zone 4, FCT, Abuja, Nigeria, blending nature with sophistication and displaying a tradition of warmth and impeccable service. Our prime location makes the hotel ideal for both business and leisure stays.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Abuja-Continental/abuja-hero.jpg",
        starRating: 4.5,
        locations: [
            "Nigeria"
        ],
        resorts: [
            {
                name: "Abuja Continental",
                location: "Abuja, Nigeria",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly", "Free Wifi", "Grab & Go Breakfast", "Free Airport Transfer"
                ],
                images: [
                    "/images/brands/Abuja-Continental/abuja-hotel.jpg"
                ]
            }
        ]
    },
    {
        // The Pelican Hotel
        id: 17,
        name: "The Pelican Hotel",
        logo: "public/images/brands/Pelican/pelican-logo.jpeg",
        description: "In the vibrant Cantonments neighbourhood of Accra, The Pelican Hotel stands as a benchmark among modern accommodations, blending contemporary comfort with personalised guest service, making it a standout Accra city hotel. Whether you're here for work or play, our central location puts you close to business centres, cultural hotspots, and diplomatic offices. We're steps away from the European Union Delegation, Accra office, and just minutes from the Togo Embassy, US Embassy, and French Embassy. Business travellers will appreciate our proximity to key hubs like Huawei Technologies Accra HQ, PWC Towers, and Ghana Police Hospital. With 134 spacious accommodations designed for both relaxation and productivity, our award-winning architecture and warm service ensure every experience here is memorable.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Pelican/pelican-hero.webp",
        starRating: 4.5,
        locations: [
            "Ghana"
        ],
        resorts: [
            {
                name: "The Pelican Hotel",
                location: "Accra, Ghana",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly", "Free Wifi", "Grab & Go Breakfast", "Free Airport Transfer"
                ],
                images: [
                    "/images/brands/Pelican/pelican-hotel.webp"
                ]
            }
        ]
    },
    {
        // Labadi Beach Hotel
        id: 18,
        name: "Labadi Beach Hotel",
        logo: "public/images/brands/Labadi-Beach/labadi-logo.jpeg",
        description: "The Labadi Beach Hotel, Ghana's Premier 5-star Hotel is set amidst tropical landscaped gardens and in close proximity of 10 minute's drive to the Kotoka International Airport and 15 minutes drive to the Central Business District. The hotel is located adjacent to Ghana's most popular Pleasure Beach and boasts a well-maintained private beach with 24 hours security surveillance offering colorful cocktails and bites as you watch the sunset.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Labadi-Beach/labadi-beach-hero.jpg",
        starRating: 4.5,
        locations: [
            "Ghana"
        ],
        resorts: [
            {
                name: "Labadi Beach Hotel",
                location: "Accra, Ghana",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly", "Free Wifi", "Grab & Go Breakfast", "Free Airport Transfer"
                ],
                images: [
                    "/images/brands/Labadi-Beach/labadi-hotel.jpg"
                ]
            }
        ]
    },
    {
        // 1 Oxford Street
        id: 19,
        name: "1 Oxford Street",
        logo: "public/images/brands/Oxford-St/oxford-logo.png",
        description: "Awarded with the greatest maximization in West Africa, Number One Oxford Street Hotel & Suites is an iconic building in the heart of Accra. The building emanates a dual personality as a landmark during the day and a beacon at night, reverberating across the entire city.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Oxford-St/oxford-hero2.jpg",
        starRating: 4.5,
        locations: [
            "Ghana"
        ],
        resorts: [
            {
                name: "1 Oxford Street",
                location: "Accra, Ghana",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly", "Free Wifi", "Grab & Go Breakfast", "Free Airport Transfer"
                ],
                images: [
                    "/images/brands/Oxford-St/oxford-hotel.webp"
                ]
            }
        ]
    },
    {
        // Kempinski Hotel Gold Coast City
        id: 20,
        name: "Kempinski Hotel Gold Coast City",
        logo: "public/images/brands/Kempinski/kempenski-logo.png",
        description: "Step into our luxury 5 star hotel, conveniently located in the downtown business district and minutes away from Accra's national centre for culture and art. With 269 rooms and suites, a 3,000 sq m spa and delightful culinary offerings, discover our business and lifestyle destination in the heart of Accra.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Kempinski/kempenski-hero.jpg",
        starRating: 4.5,
        locations: [
            "Ghana"
        ],
        resorts: [
            {
                name: "Kempinski Hotel Gold Coast City",
                location: "Accra, Ghana",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly", "Free Wifi", "Grab & Go Breakfast", "Free Airport Transfer"
                ],
                images: [
                    "/images/brands/Kempinski/kempenski-hotel.avif"
                ]
            }
        ]
    },
    {
        // Movenpick Hotel Accra
        id: 21,
        name: "Movenpick Hotel & Resorts",
        logo: "public/images/brands/Movenpick/movenpick-logo.jpeg",
        description: "Ghana is bursting with wildlife, secluded beaches, historic forts and coastal towns. Ghana is a true treasure of Africa with colonial buildings and castle-turned-museums serving as a poignant reminder of its history. Mövenpick Hotel & Resorts are proud to present a 5-star resort in the heart of Ghana. Our Ghana location sits in the capital of Accra; known for its shopping spots, delicious eateries and business hubs. The five-star Mövenpick Ambassador Hotel Accra is set amongst lush gardens and located in close proximity to the bustling Makola Market, Labadi Beach and the Gulf of Guinea.",
        phoneNumber: "909-255-4968",
        priceRange: "$400-$800/night",
        image: "images/brands/Movenpick/movenpick-hero.jpg",
        starRating: 4.5,
        locations: [
            "Ghana"
        ],
        resorts: [
            {
                name: "Movenpick Hotel & Resorts",
                location: "Accra, Ghana",
                price: "~$450/night",
                rating: 4.5,
                phoneNumber: "909-255-4968",
                amenities: [
                    "All-Inclusive", "Family Friendly", "Free Wifi", "Grab & Go Breakfast", "Free Airport Transfer"
                ],
                images: [
                    "/images/brands/Movenpick/movenpick-hotel.jpg"
                ]
            }
        ]
    },
    
];

export default resortBrands;