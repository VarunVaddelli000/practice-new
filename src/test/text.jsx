import React, { useState } from 'react';

const PopUp = (props) => {
    const { toggleModal, isModalOpen } = props
    const [customer, setCustomer] = useState({
        name: '',
        location: '',
        contact: {
            phone: '',
            email: '',
        },
        products: [],
    });

    const [product, setProduct] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handle nested contact fields
        if (name.includes('contact')) {
            const field = name.split('.')[1];
            setCustomer((prev) => ({
                ...prev,
                contact: {
                    ...prev.contact,
                    [field]: value,
                },
            }));
        } else {
            setCustomer((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleProductChange = (e) => {
        setProduct(e.target.value);
    };

    const addProduct = () => {
        if (product && !customer.products.includes(product)) {
            setCustomer((prev) => ({
                ...prev,
                products: [...prev.products, product],
            }));
            setProduct(''); // Reset the input field
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://your-api-endpoint.com/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customer),
            });

            if (response.ok) {
                console.log('Customer added successfully:', await response.json());
                // Reset the form after successful submission
                setCustomer({
                    name: '',
                    location: '',
                    contact: {
                        phone: '',
                        email: '',
                    },
                    products: [],
                });
            } else {
                console.error('Failed to add customer:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div className="flex flex-col items-end mr-10">
                <button className="bg-blue-600 p-2 m-1 text-white rounded-lg" onClick={toggleModal}>
                    Pop-up
                </button>
            </div>
            <div>
                {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={customer.name}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block">Location:</label>
                            <input
                                type="text"
                                name="location"
                                value={customer.location}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block">Phone:</label>
                            <input
                                type="text"
                                name="contact.phone"
                                value={customer.contact.phone}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block">Email:</label>
                            <input
                                type="email"
                                name="contact.email"
                                value={customer.contact.email}
                                onChange={handleChange}
                                className="border p-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block">Products:</label>
                            <input
                                type="text"
                                value={product}
                                onChange={handleProductChange}
                                className="border p-2 w-full"
                                placeholder="Add product"
                            />
                            <button
                                type="button"
                                onClick={addProduct}
                                className="bg-blue-500 text-white px-4 py-2 mt-2"
                            >
                                Add Product
                            </button>
                            <div className="mt-2">
                                <strong>Current Products:</strong>
                                <ul>
                                    {customer.products.map((prod, index) => (
                                        <li key={index}>{prod}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>
             )}
            </div>

        </div>
    );
};

export default PopUp;
