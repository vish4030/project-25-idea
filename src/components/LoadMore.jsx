import React, { useEffect, useState } from "react";

const ProductBox = ({ brand, description, id, price, thumbnail, title }) => {
  return (
    <div className=" basis-72 h-68 mb-5 border-solid border border-gray-400 rounded-md">
      <div className="">
        <img
          src={thumbnail}
          alt={title}
          className=" w-[100%] h-52 rounded-md"
        />
      </div>
      <div className=" p-3 text-gray-600">
        <h3>Brand:-{brand}</h3>
        <p>{description}</p>
        <span>${price}</span>
      </div>
    </div>
  );
};

const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const getProduct = async () => {
    const url = `https://dummyjson.com/products?limit=20&skip=${
      count === 0 ? 0 : count * 20
    }`;
    console.log(url);
    try {
      const res = await fetch(url);
      const result = await res.json();
      setProducts([...products, ...result?.products]);
      console.log(result?.products);
    } catch (e) {
      console.log(e);
    }
  };

  const handleMore = () => {
    setCount((prevCount) => prevCount + 1);
    if (count * 20 >= 60) setDisableButton(true);
  };

  useEffect(() => {
    getProduct();
  }, [count]);

  return (
    <div className="flex flex-wrap p-4 justify-between">
      {products.map((product) => (
        <ProductBox key={product.id} {...product} />
      ))}
      <div className=" text-center basis-[100%]">
        <button
          onClick={() => handleMore()}
          className={`${disableButton && 'bg-gray-600'} border-solid border border-green-400 px-4 pr-4 pt-1 pb-1`}
          disabled={disableButton}
        >
          Load more...
        </button>
      </div>
      {disableButton && <p>You reached the limit of Products. Thank you!</p>}
    </div>
  );
};

export default LoadMore;
