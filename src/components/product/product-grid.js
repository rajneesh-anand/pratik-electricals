import ProductsData from "../../data/products.json";
import ProductCard from "./product-card";

const ProductsGrid = () => {
  return (
    <div className="container">
      {ProductsData &&
        ProductsData.map((product, key) => {
          return <ProductCard data={product} key={key} />;
        })}
    </div>
  );
};

export default ProductsGrid;
