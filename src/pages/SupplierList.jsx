import { useState, useEffect } from "react";
import SupplierDetails from "../components/SupplierDetails";
import PopUp from "../components/PopUp";
export default function SupplierList() {
    // const products = [
    //     {
    //       id: 1,
    //       name: 'Alpha Supplies',
    //       location: 'New York, USA',
    //       contact: {
    //         phone: '+1-555-1234',
    //         email: 'contact@alphasupplies.com',
    //       },
    //       products: ['Laptops', 'Monitors', 'Keyboards'],
    //     },
    //     {
    //       id: 2,
    //       name: 'Global Electronics',
    //       location: 'Berlin, Germany',
    //       contact: {
    //         phone: '+49-30-5678',
    //         email: 'info@globalelectronics.de',
    //       },
    //       products: ['Cameras', 'Projectors', 'Drones'],
    //     },
    //     {
    //       id: 3,
    //       name: 'Tech Innovators',
    //       location: 'Tokyo, Japan',
    //       contact: {
    //         phone: '+81-3-9876',
    //         email: 'sales@techinnovators.jp',
    //       },
    //       products: ['Smartphones', 'Tablets', 'Smartwatches'],
    //     },
    //     {
    //       id: 4,
    //       name: 'Supply Chain Co.',
    //       location: 'London, UK',
    //       contact: {
    //         phone: '+44-20-7890',
    //         email: 'support@supplychainco.uk',
    //       },
    //       products: ['Printers', 'Scanners', '3D Printers'],
    //     },
    //     {
    //       id: 5,
    //       name: 'NextGen Solutions',
    //       location: 'Sydney, Australia',
    //       contact: {
    //         phone: '+61-2-8765',
    //         email: 'hello@nextgensolutions.com.au',
    //       },
    //       products: ['Desktops', 'Servers', 'Networking Equipment'],
    //     }
    //   ];

    const [suppliers, setSuppliers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const deleteSupplier = async (varun) => {
        try {
            let response = await fetch(`http://localhost:4000/suppliers/${varun}`, { method: 'DELETE' });
            if (response.ok) {
                const filtredSuppliers = suppliers.filter(supplier => supplier.id !== varun);
                setSuppliers(filtredSuppliers);
                alert('delete Supplier Successfully')
            }
        } catch (error) {

            console.error('Error deleting supplier:', error);
            alert('An error occurred while trying to delete the supplier.');
        }

    };

    const fetchCustomers = async () => {
        try {
            let response = await fetch('http://localhost:4000/suppliers', { method: 'GET' })
            response = await response.json();
            setSuppliers(response);
        } catch {

        }
    }
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    // const tableView = () =>{
    //     setTable(!table);

    // }

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
            const response = await fetch('http://localhost:4000/suppliers', {
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
                setIsModalOpen(!isModalOpen);
            } else {
                console.error('Failed to add customer:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    useEffect(() => {
        fetchCustomers();
        handleSubmit();
    }, [customer]);
    return (
        <div>
            <div>
                < PopUp isModalOpen={isModalOpen} toggleModal={toggleModal} customer={customer} product={product} handleChange={handleChange}
                    handleProductChange={handleProductChange} addProduct={addProduct} handleSubmit={handleSubmit} />
            </div>
            <div >


                <div>
                    <SupplierDetails deleteSupplier={deleteSupplier} suppliers={suppliers} />
                </div>


            </div>
            {/* <div></div> */}
        </div>
    )
}