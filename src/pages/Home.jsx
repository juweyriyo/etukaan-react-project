import axios from "axios";
import React, { Fragment, useEffect, useRef, useState } from "react";
import ProductItem from "../components/ProductItem";
import ProductLoadingSkeleton from "../components/ProductLoadingSkeleton";

const Home = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const { data } = await axios.get(
					"https://dummyjson.com/products?limit=10"
				);

				setProducts(data.products);
				setOriginalProducts(data.products);
				setLoading(false);
			} catch (e) {
				setLoading(false);
				console.log(e);
			}
		};
		fetchProducts();
	}, []);

	if (loading) return <ProductLoadingSkeleton />;

	return (
        <Fragment>
            <h1 className="text-pink-600 text-center text-2xl mt-5">Featured Products</h1>
            <p className="text-center">The hottest products of the store.</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
				{products.length > 0 &&
					products.map((product) => (
                        <ProductItem key={product.id} product={product} />
					))}
			</div>
                    </Fragment>
	);
};

export default Home