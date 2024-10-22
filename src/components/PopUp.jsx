import React, { useState } from 'react';

const PopUp = (props) => {
    const { toggleModal, isModalOpen, customer, product, handleChange, handleProductChange, addProduct, handleSubmit} = props


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
                        <form onSubmit={handleSubmit} className="space-y-2 bg-white w-96 p-4 rounded ">
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
                                    className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
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
                            <div className='flex justify-between'>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                                    
                                >
                                    Submit
                                </button>
                                <button onClick={toggleModal} className='bg-red-500 text-white rounded-md px-4'>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>

        </div>
    );
};

export default PopUp;
