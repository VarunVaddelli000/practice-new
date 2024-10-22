import { useState } from "react";
import { Link } from "react-router-dom";
export default function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    console.log(cart);



    const decrementQuantity = (productId) => {
        const updateCart = cart.map(product => {
            if (product.id === productId) {
                return { ...product, Quantity: product.Quantity - 1 };
            } else {
                return product;
            }
        });
        setCart(updateCart);
    }

    const incrementQuantity = (productId) => {
        const UpdateCart = cart.map(product => {
            if (product.id === productId) {
                return { ...product, Quantity: product.Quantity + 1 };
            } else {
                return product;
            }
        });
        setCart(UpdateCart);
    }

    const deleteProduct = (productId) => {
        const filtredProduct = cart.filter(product => product.id !== productId);

        setCart(filtredProduct);
    }
    return (
        <div>
            {cart.length > 0 ? (
                <div>
                    {cart.map(product => (
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 flex items-start mb-2">
                            {/* carts Image */}
                            <div className="w-1/4">
                                <img
                                    src={product.imgSrc}
                                    alt="carts"
                                    width="150px"
                                    className="rounded-md"
                                />
                            </div>

                            {/* carts Info */}
                            <div className="w-2/4 pl-6">
                                <div className="flex justify-between items-start">
                                    {/* carts Name and Rating */}
                                    <div>
                                        {/* <Link to={`/carts-details/${carts.id}/description?name=${carts.name}&price=${carts.price}`}>
                                 
                             </Link> */}
                                        <h2 className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer">
                                            {product.name}
                                        </h2>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <div className="bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded">
                                                4.4 ★
                                            </div>
                                            <p className="text-sm text-gray-500">38,851 Ratings & 2,756 Reviews</p>
                                        </div>
                                    </div>
                                </div>

                                {/* carts Features */}
                                <ul className="mt-4 space-y-1 text-gray-700 text-sm">
                                    {product.specifications.map((specificationItem, specificationIndex) => (
                                        <li key={specificationIndex}>{specificationItem}</li>
                                    ))}
                                </ul>

                                {/* Add to Compare Checkbox */}
                                <div className="mt-4">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox text-blue-600" />
                                        <span className="ml-2 text-gray-700">Add to Compare</span>
                                    </label>
                                </div>
                                <div className="flex items-center justify-center space-x-4">
                                    {/* <!-- Minus Button --> */}
                                    <button onClick={() => decrementQuantity(product.id)} disabled={product.Quantity === 1} className="bg-gray-300 text-white px-3 py-1 font-bold focus:outline-none focus:ring-2 focus:ring-gray-300">
                                        -
                                    </button>

                                    {/* <!-- Quantity Display --> */}
                                    <span className="text-xl focus:ring-gray-300 font-medium">{product.Quantity}</span>

                                    {/* <!-- Plus Button --> */}
                                    <button onClick={() => incrementQuantity(product.id)} className="bg-gray-300 text-white px-3 py-1  font-bold focus:outline-none focus:ring-2 focus:ring-gray-300">
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="w-1/4">
                                <p className="mb-2">{product.price}</p>
                                <button className="bg-red-500 text-white px-3 py-2 rounded" onClick={() => deleteProduct(product.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-[80vh] bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-4 animate-textGlow">
                        No Products In Cart
                    </h1>
                    <p className="text-lg text-gray-600 mb-6 animate-textGlow">
                        Looks like your cart is empty!
                    </p>
                    <h1>
                        <Link
                            to="/Products"
                            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-transform duration-500 ease-in-out transform hover:scale-110 animate-buttonZoom"
                        >
                            Find Products
                        </Link>
                    </h1>
                </div>

            )}
        </div>
    )
}