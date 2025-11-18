import { useEffect, useState } from "react";
export default function ProductList() {
const [products, setProducts] = useState([]);


useEffect(() => {
fetch("http://localhost:5000/api/products")
.then((res) => res.json())
.then((data) => setProducts(data));
}, []);


return (
<ul>
{products.map((p) => (
<li key={p._id}>
{p.name} - ₹{p.price}
</li>
))}
</ul>
);
}