import { useState } from "react";   
import { createBrand } from "../network/api";

const AddBrands = () => {
    const [brand, setBrand] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [feilds, setFeilds] = useState([]);
    const [options, setOptions] = useState([]);
    return (
        <div>
            <h1>Add Brands</h1>
        </div>
    )
}

export default AddBrands;
