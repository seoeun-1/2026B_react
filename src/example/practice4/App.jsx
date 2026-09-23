import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products" element={<ProductList />} />
        </Routes>
    );
}