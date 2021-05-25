import React, { useEffect, useState } from 'react';
import './ProductTable.css';

const ProductTable = () => {
    const [rows, setRows] = useState([]);
  
    useEffect(() => {
      const getSuperheroes = async () => {
        // fetch uses the "proxy" value set in client/package.json
        let response = await fetch('/product');
        let data = await response.json();
        setRows(data);
      };
      getSuperheroes();
    }, []);
  
    return (
      <div className="product-table">
        <table>
            <tbody>
              <tr><th>Name</th><th>Category</th><th>CO2 Consumption (Tons)</th><th>Product Life (years)</th><th>Water Consumption (Liters)</th><th>Comments</th></tr>
              {rows.map((row) => {
                  return (
                    <tr key={row.name}>
                        <td>{row.name}</td>
                        <td>{row.category}</td>
                        <td>{row.co2_consumption}</td>
                        <td>{row.product_life}</td>
                        <td>{row.water_consumption}</td>
                        <td>{row.comments}</td>
                    </tr>
                  )
              })}                
            </tbody>
        </table>
      </div>
    )
  }

export default ProductTable