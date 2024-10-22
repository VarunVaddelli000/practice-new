import { useState } from "react";
export default function SupplierDetails(Props) {
    const { supplierInfo, deleteSupplier, suppliers } = Props
    const [table, setTable] = useState(false);
    const [card, setCard] = useState(true);
    const tableView = () => {
        setTable(true);
        setCard(false);
    }

    const cardView = () => {
        setCard(true);
        setTable(false);
    }

    return (
        <div>
            <div className="flex gap-5  justify-end mr-10">


            </div>
            <div>
                {table && (
                    <div>
                        <div className="ml-5">
                            <button onClick={cardView} className="bg-blue-400 rounded-mg rounded-md text-white px-4 py-2">Card</button>
                        </div>
                        <div className="overflow-x-auto mx-8 my-2">
                            <table className="min-w-full bg-white shadow-lg border">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b">Supplier Name</th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b">Location</th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b">Contact</th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b">Products</th>
                                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {suppliers.map((supplierInfo) => (
                                        <tr key={supplierInfo.id}>
                                            <td className="px-6 py-4 text-sm text-gray-800 border-b">{supplierInfo.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 border-b">{supplierInfo.location}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600 border-b">
                                                <p>
                                                    <strong>Phone:</strong> {supplierInfo.contact.phone}
                                                </p>
                                                <p>
                                                    <strong>Email:</strong> {supplierInfo.contact.email}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 border-b">
                                                <ul className="list-disc list-inside">
                                                    {supplierInfo.products.slice(0, 3).map((product, index) => (
                                                        <li key={index}>{product}</li>
                                                    ))}
                                                </ul>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 border-b">
                                                <button
                                                    className="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition-all"
                                                    onClick={() => deleteSupplier(supplierInfo.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
            {card && (
                <div>
                    <div className="ml-5">
                        <button onClick={tableView} className="bg-blue-400 rounded-mg rounded-md text-white px-4 py-2" >Table</button>
                    </div>
                    <div className="grid grid-cols-4 gap-8 mx-8 my-2">
                        {suppliers.map((supplierInfo) => (
                            <div
                                key={supplierInfo.id}
                                className="bg-white shadow-lg border rounded-lg overflow-hidden flex flex-col h-full"
                            >
                                <div className="p-6 flex-grow">
                                    <h2 className="text-xl font-bold text-gray-800">{supplierInfo.name}</h2>
                                    <p className="text-gray-600">{supplierInfo.location}</p>
                                    <div className="mt-4">
                                        <h3 className="text-lg font-medium text-gray-700">Contact</h3>
                                        <p className="text-gray-600">
                                            <strong>Phone:</strong> {supplierInfo.contact.phone}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong>Email:</strong> {supplierInfo.contact.email}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-lg font-medium text-gray-700">Products</h3>
                                        <ul className="list-disc list-inside text-gray-600">
                                            {supplierInfo.products.slice(0, 3).map((product, index) => (
                                                <li key={index}>{product}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <button
                                    className="mt-6 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-all"
                                    onClick={() => deleteSupplier(supplierInfo.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}


        </div>

    )
}