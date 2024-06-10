import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';

function Products() {
    const [data, setData] = useState([]);
    const [volume, setVolume] = useState({});
    const [density, setDensity] = useState({});
    const [calculatedPrice, setCalculatedPrice] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://fake-server-json-4ykz.onrender.com/products');
                setData(response.data);
            } catch (error) {
                console.error('There was a problem with the axios operation:', error);
            }
        };
        getData();
    }, []);

    const handleInputChange = (id, type, value) => {
        if (type === 'volume') {
            setVolume({ ...volume, [id]: value });
        } else if (type === 'density') {
            setDensity({ ...density, [id]: value });
        }
    };

    const calculatePrice = (id) => {
        const vol = parseFloat(volume[id]) || 0;
        const dens = parseFloat(density[id]) || 0;
        const mass = vol * dens; // mass in kg
        const price = mass * 1000; // price in Ksh (1 kg = 1000 Ksh)
        setCalculatedPrice({ ...calculatedPrice, [id]: price });
    };

    return (
        <div className="products">
            {data.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.details}</p>
                    <div className="price-calc">
                        <input
                            type="number"
                            placeholder="Volume"
                            value={volume[product.id] || ''}
                            onChange={(e) => handleInputChange(product.id, 'volume', e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Density"
                            value={density[product.id] || ''}
                            onChange={(e) => handleInputChange(product.id, 'density', e.target.value)}
                        />
                        <button onClick={() => calculatePrice(product.id)}>Calculate Price</button>
                        {calculatedPrice[product.id] && (
                            <p>Price: {calculatedPrice[product.id].toFixed(2)} Ksh</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;