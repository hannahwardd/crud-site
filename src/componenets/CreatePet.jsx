import React, { useState } from 'react';
import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";

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
            [name]: name === 'price' || name === 'age' ? Number(value) : value
        }));
    }

    function handleDropDownChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newPet = { ...formData, id: crypto.randomUUID(), health: 100, maxAge: 15 };
        onAddPet(newPet);

        // Reset form
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

                <TextField name="name" label="Name" variant="outlined" value={formData.name} onChange={handleChange} />

                <FormControl>
                    <InputLabel id="type-label">Type</InputLabel>
                    <Select
                            labelId="type-label"
                            name="type"
                            value={formData.type}
                            onChange={handleDropDownChange}
                    >
                        <MenuItem value="dog">Dog</MenuItem>
                        <MenuItem value="cat">Cat</MenuItem>
                        <MenuItem value="bunny">Bunny</MenuItem>
                    </Select>
                </FormControl>

                <TextField name="breed" label="Breed" variant="outlined" value={formData.breed} onChange={handleChange} />
                <TextField name="age" label="Age" type="number" variant="outlined" value={formData.age} onChange={handleChange} />

                <FormControl>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                            labelId="gender-label"
                            name="gender"
                            value={formData.gender}
                            onChange={handleDropDownChange}
                    >
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                        name="color"
                        label="Color"
                        variant="outlined"
                        value={formData.color}
                        onChange={handleChange}
                />

                <TextField
                        name="price"
                        label="Price"
                        variant="outlined"
                        value={formData.price}
                        onChange={handleChange}
                        type="number"
                        InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                />

                <TextField
                        name="imageId"
                        label="Image URL"
                        variant="outlined"
                        value={formData.imageId}
                        onChange={handleChange}
                />

                <Button type="submit" variant="outlined" style={{ height: "56px" }}>Add Pet</Button>
            </form>
    );
}
