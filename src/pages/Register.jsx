import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const products = [
        {
            id: 1,
            name: 'POCO F6 5G (Black, 256 GB)',
            price: 31999,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            ProductDescription: [
                {
                    name1: 'Forged in Titanium',
                    details1: "iPhone 15 Pro Max is the first iPhone to feature an aerospace‑grade titanium design.",
                    name2: 'A17 Pro Chip',
                    details2: "The A17 Pro chip offers powerful processing and improved performance."
                }
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/r/e/-original-imahf39qxccmgkhc.jpeg?q=70',
            category: 'mobiles',
            brand: 'poco',
            ratings: 4.5,
            reviews: [
                {
                    user: 'Alice',
                    comment: 'Great phone with excellent performance!',
                    rating: 5
                },
                {
                    user: 'Bob',
                    comment: 'Good value for money, but battery life could be better.',
                    rating: 4
                }
            ]
        },
        {
            id: 2,
            name: 'Motorola G34 5G (Ocean Green, 128 GB)',
            price: 11999,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            ProductDescription: [
                {
                    name1: 'Premium 7.8 mm Slim Design',
                    details1: "Sleek and ultra-slim with a premium back design.",
                    name2: 'Comfort Grip',
                    details2: "The slim design allows for easy and comfortable handling."
                }
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/r/e/-original-imahf39qxccmgkhc.jpeg?q=70',
            category: 'mobiles',
            ratings: 4.2,
            reviews: [
                {
                    user: 'Charlie',
                    comment: 'Nice design and good performance for the price.',
                    rating: 4
                },
                {
                    user: 'Diana',
                    comment: 'Battery life is impressive, but camera quality is average.',
                    rating: 4
                }
            ]
        },
        {
            id: 3,
            name: 'OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 256 GB)',
            price: 18633,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            ProductDescription: [
                {
                    name1: 'Lightweight Build',
                    details1: "One of the lightest models in its series.",
                    name2: 'Fast Charging',
                    details2: "Offers quick charge support for fast battery recharge."
                }
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/z/u/-original-imagtxvtmxpagdpn.jpeg?q=70',
            category: 'mobiles',
            ratings: 4.7,
            reviews: [
                {
                    user: 'Eva',
                    comment: 'Very lightweight and fast charging. Love it!',
                    rating: 5
                },
                {
                    user: 'Frank',
                    comment: 'Good phone overall, but could use better camera features.',
                    rating: 4
                }
            ]
        },
        {
            id: 4,
            name: 'POCO C65 (Pastel Blue, 128 GB)',
            price: 7499,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.94 cm (6.67 inch) Display',
                '50MP (OIS) + 8MP | 20MP Front Camera',
                '5000 mAh Battery',
                '8s Gen3 Processor'
            ],
            ProductDescription: [
                {
                    name1: 'Durable Design',
                    details1: "Designed for daily use with a strong and durable frame.",
                    name2: 'Long-lasting Battery',
                    details2: "The 5000mAh battery ensures long usage without frequent recharging."
                }
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/u/8/c65-mzb0g8nin-poco-original-imagw6j2kp5t5jek.jpeg?q=70',
            category: 'mobiles',
            ratings: 4.0,
            reviews: [
                {
                    user: 'Grace',
                    comment: 'Affordable and durable. A great choice for the budget.',
                    rating: 4
                },
                {
                    user: 'Hank',
                    comment: 'Performance is okay, but the display could be better.',
                    rating: 3
                }
            ]
        },
        {
            id: 5,
            name: 'Samsung Galaxy S23 Ultra (Black, 512 GB)',
            price: 124999,
            specifications: [
                '12 GB RAM | 512 GB ROM',
                '17.02 cm (6.7 inch) Display',
                '108MP + 12MP + 10MP | 40MP Front Camera',
                '5000 mAh Battery',
                'Snapdragon 8 Gen 2 Processor'
            ],
            ProductDescription: [
                {
                    name1: 'Dynamic AMOLED 2X',
                    details1: "Experience true-to-life color and brightness with the Dynamic AMOLED 2X display.",
                    name2: 'Space Zoom',
                    details2: "Up to 100x zoom for distant shots without losing clarity."
                }
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/u/r/-original-imaghxkmfmgnpxzc.jpeg?q=70',
            category: 'mobiles',
            ratings: 4.8,
            reviews: [
                {
                    user: 'Ian',
                    comment: 'Exceptional camera and performance. Worth the price.',
                    rating: 5
                },
                {
                    user: 'Jane',
                    comment: 'High quality but very expensive.',
                    rating: 4
                }
            ]
        },
        {
            id: 6,
            name: 'Realme GT 5 Pro (Aurora Blue, 256 GB)',
            price: 25999,
            specifications: [
                '12 GB RAM | 256 GB ROM',
                '16.33 cm (6.43 inch) Display',
                '64MP + 8MP + 2MP | 16MP Front Camera',
                '4500 mAh Battery',
                'Dimensity 1200 Processor'
            ],
            ProductDescription: [
                {
                    name1: 'SuperDart Charging',
                    details1: "Charge your phone to 100% in just 35 minutes.",
                    name2: '5G Speed',
                    details2: "Fast internet speeds with 5G support."
                }
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/a/d/-original-imaghxkmfj2fnpq7.jpeg?q=70',
            category: 'mobiles',
            ratings: 4.6,
            reviews: [
                {
                    user: 'Kelly',
                    comment: 'Fast charging and good performance. Satisfied with the purchase.',
                    rating: 5
                },
                {
                    user: 'Leo',
                    comment: 'Nice features but the battery life is average.',
                    rating: 4
                }
            ]
        },
        {
            id: 7,
            name: 'iPhone 14 Pro Max (Space Black, 1 TB)',
            price: 149999,
            specifications: [
                '6 GB RAM | 1 TB ROM',
                '16.95 cm (6.7 inch) Display',
                '48MP + 12MP + 12MP | 12MP Front Camera',
                '4323 mAh Battery',
                'A16 Bionic Chip'
            ],
            ProductDescription: [
                {
                    name1: 'Ceramic Shield',
                    details1: "The toughest smartphone glass ever.",
                    name2: 'ProMotion',
                    details2: "120Hz adaptive refresh rate for smoother scrolling."
                }
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/s/e/-original-imaghxkmf7yfnthg.jpeg?q=70',
            category: 'mobiles',
            ratings: 4.9,
            reviews: [
                {
                    user: 'Mona',
                    comment: 'Absolutely brilliant! Top-notch performance and build quality.',
                    rating: 5
                },
                {
                    user: 'Nick',
                    comment: 'Great phone but very pricey.',
                    rating: 4
                }
            ]
        },
        {
            id: 8,
            name: 'Google Pixel 7 Pro (Obsidian, 128 GB)',
            price: 84999,
            specifications: [
                '12 GB RAM | 128 GB ROM',
                '17.27 cm (6.8 inch) Display',
                '50MP + 48MP + 12MP | 10.8MP Front Camera',
                '5000 mAh Battery',
                'Google Tensor G2 Chip'
            ],
            ProductDescription: [
                {
                    name1: 'Magic Eraser',
                    details1: "Remove unwanted objects from photos effortlessly.",
                    name2: 'Real Tone',
                    details2: "Captures every skin tone beautifully in photos."
                }
            ],
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/s/g/-original-imaghxkmf8zkxmr5.jpeg?q=70',
            category: 'mobiles',
            ratings: 4.4,
            reviews: [
                {
                    user: 'Oscar',
                    comment: 'Excellent camera and AI features. A bit overpriced.',
                    rating: 4
                },
                {
                    user: 'Paula',
                    comment: 'Good performance but could use some improvements.',
                    rating: 4
                }
            ]
        },
        // ... 21 more products
    ];
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const registerUser =async (Values) => {
        // let products = Values
        // console.log("hi", products);
        try{
            let response = await fetch('http://localhost:4000/user',{method: 'POST', body:JSON.stringify(Values)})
        response = await response.json();
        navigate('/auth/LogInPage')
        }catch{
            console.error("Error registering user:", errors);
        }
        
    }
    
    const password = watch('password')
    const validatePassword = (password) => {
        if (!/[A-Z]/.test(password)) {
            return 'Atlest one capsleter'
        } else if (!/[a-z]/.test(password)) {
            return 'Atlest one Lower Case Letter '
        } else if (!/[0-9]/.test(password)) {
            return 'Atlest one Digit'
        } else if (!/[@$!%*?&]/.test(password)) {
            return 'Atlest one Special Characters @$!%*?&'
        }else {
            return true;
        }
    }
    return (
        <div className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Register</h2>
            <form onSubmit={handleSubmit(registerUser)}>
                {/* <!-- First Name --> */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">First Name</label>
                    <input
                        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                        type="text"
                        id="firstName"
                        {...register('firstName', {
                            required: { value: true, message: "Firstname is required" },
                            minLength: { value: 3, message: "At least 3 characters required" }
                        })}
                        placeholder="Enter your first name"
                    />
                    {errors.firstName?.type && (
                        <p className="text-red-500">{errors.firstName?.message}</p>
                    )}
                </div>


                {/* <!-- Last Name --> */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="lastname">Last Name</label>
                    <input className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                        type="text" id="lastName" {...register('lastName', { required: true })} placeholder="Enter your last name" />
                    {errors.lastName && <p className="text-red-500">Lastname is Required</p>}
                </div>

                {/* <!-- Email --> */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                    <input className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                        id="email" {...register('email', { required: { value: true, message: "email is required" }, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter valed Email" } })} placeholder="Enter your email" />
                    {errors.email?.type && <p className="text-red-500">{errors.email?.message}</p>}
                </div>

                {/* <!-- Mobile Number --> */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="mobile">Mobile Number</label>
                    <input className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                        type="tel" id="mobile" {...register('mobile', { required: true })} placeholder="Enter your mobile number" />
                    {errors.mobile && <p className="text-red-500">mobile is Required</p>}
                </div>

                {/* <!-- Password --> */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
                    <input className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
                        type="password" id="password" {...register('password', { required: { value: true, message: "Password Requied" }, minLength: { value: 8, message: "psw should be 8 char" }, validate: validatePassword })} placeholder="Enter your password" />
                    {errors.password?.type && <p className="text-red-500">{errors.password?.message}</p>}

                </div>

                {/* <!-- Confirm Password --> */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        {...register('confirmPassword', {
                            required: { value: true, message: "Confirm password is required" },
                            validate: (value) => value === password || 'Passwords do not match'
                        })}
                        placeholder="Confirm your password"
                    />
                    {errors.confirmPassword?.type && <p className="text-red-500">{errors.confirmPassword?.message}</p>}

                </div>

                {/* <!-- Submit Button --> */}
                <div>
                    <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none">
                        Register
                    </button>
                </div>
            </form>
        </div>

    )
}
// i want the id should generate in sequance like 1,2,3 in api