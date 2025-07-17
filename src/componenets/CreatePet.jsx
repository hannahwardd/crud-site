import React, { useState } from 'react';

export default function CreatePet({ onAddPet }) {
    const [formData, setFormData] = useState({
        name: '',
        type: 'dog',
        breed: '',
        age: 0,
        gender: 'female',
        color: '',
        price: 0,
        imageId: '',
        storeId: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'price' || name === 'age' ? Number(value) : value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newPet = {
            ...formData,
            id: crypto.randomUUID(),
            health: 100,
            maxAge: 15,
        };

        onAddPet(newPet);
        setFormData({
            name: '',
            type: 'dog',
            breed: '',
            age: 0,
            gender: 'female',
            color: '',
            price: 0,
            imageId: '',
            storeId: '',
        });
    }

    return (
            <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded">
                <h2 className="text-lg font-bold">Create New Pet</h2>

                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="block" />
                <select name="type" value={formData.type} onChange={handleChange}>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bunny">Bunny</option>
                </select>
                <input name="breed" placeholder="Breed" value={formData.breed} onChange={handleChange} required className="block" />
                <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required className="block" />
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                <input name="color" placeholder="Color" value={formData.color} onChange={handleChange} required className="block" />
                <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required className="block" />
                <input name="imageId" placeholder="Image ID" value={formData.imageId} onChange={handleChange} required className="block" />
                <input name="storeId" placeholder="Store ID" value={formData.storeId} onChange={handleChange} required className="block" />

                <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Add Pet</button>
            </form>
    );
}
