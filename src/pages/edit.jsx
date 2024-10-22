import React, { useState, useEffect } from 'react';

const EditSupplier = ({ supplierId }) => {
  const [supplier, setSupplier] = useState({
    name: '',
    location: '',
    contact: {
      phone: '',
      email: ''
    },
    products: []
  });

  useEffect(() => {
    fetch(`https://api.example.com/suppliers/${supplierId}`)
      .then((response) => response.json())
      .then((data) => setSupplier(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [supplierId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplier((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setSupplier((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.example.com/suppliers/${supplierId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(supplier)
    })
      .then((response) => {
        if (response.ok) {
          alert('Supplier updated successfully!');
        } else {
          throw new Error('Error updating supplier');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Edit Supplier</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={supplier.name} onChange={handleChange} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={supplier.location} onChange={handleChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={supplier.contact.phone} onChange={handleContactChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={supplier.contact.email} onChange={handleContactChange} />
        </div>
        <div>
          <label>Products:</label>
          <input type="text" name="products" value={supplier.products.join(', ')} onChange={(e) => setSupplier({ ...supplier, products: e.target.value.split(', ') })} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditSupplier;
