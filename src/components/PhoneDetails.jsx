import { useLoaderData, useParams } from 'react-router-dom';
import ProductsDetails from './ProductsDetails';
import { GoStarFill } from 'react-icons/go';
import ReactStars from 'react-rating-stars-component';
import { LiaShoppingCartSolid, LiaHeart } from 'react-icons/lia';
import { addToCartList, addToWishList } from '../utility/addToLocalStorage';
import { useState } from 'react';

const PhoneDetails = () => {
  const data = useLoaderData();
  const { product_id } = useParams();

  const productsId = data.find(
    (productId) => productId.product_id === product_id
  );
  const {
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = productsId || {};

  const firstExample = {
    size: 25,
    value: rating,
    edit: false,
  };

  const handleAddToCart = (product_id) => {
    addToCartList(product_id);
  };

  const [disable, setDisable] = useState(false);
  const handleAddToWish = (product_id) => {
    addToWishList(product_id);
    setDisable(!disable);
  };

  return (
    <div className='md:pb-[25rem]'>
      <div className='md:relative'>
        <ProductsDetails></ProductsDetails>
        <div className='md:absolute flex flex-col md:flex-row md:items-center bg-white border p-4 rounded-lg lg:top-[50%] lg:left-[20%] lg:right-[20%] md:top-[70%] top-[50%] md:gap-x-4 md:gap-y-0 gap-y-4'>
          {/* Image */}
          <div>
            <img src={product_image} alt={`image ${product_id}`} />
          </div>
          {/* description */}
          <div className='space-y-2'>
            {/* Title */}
            <h2 className='text-2xl font-bold'>{product_title}</h2>

            {/* Price */}
            <p className='font-bold text-slate-600'>Price: ${price}</p>

            {/* Available */}
            {availability === true ? (
              <p className='border border-lime-500 px-2 rounded-full bg-lime-50 text-lime-500 inline-block'>
                In Stock
              </p>
            ) : (
              <p className='border border-lime-500 px-2 rounded-full bg-lime-50 text-lime-500 inline-block'>
                Out of Stock
              </p>
            )}

            {/* Description */}
            <p className='text-gray-500'>{description}</p>

            {/* Spec */}
            <p className='font-bold text-lg'>Specification:</p>
            {specification.map((spec, index) => (
              <ol key={`spec ${product_id}`} className='text-gray-500'>
                <li>
                  {index + 1} {spec}
                </li>
              </ol>
            ))}

            {/* Category */}
            <p className='font-bold text-slate-700'>
              Category: <span className='font-normal'>{category}</span>
            </p>

            {/* Ratings */}
            <p className='flex items-center'>
              <span className='font-bold'>Ratings</span>{' '}
              <span className='text-amber-300 text-lg'>
                <GoStarFill></GoStarFill>
              </span>
            </p>

            {/* Star */}
            <div className='flex items-center gap-x-2'>
              {/* <div><ReactStars {...firstExample}></ReactStars></div> */}
              <div>
                <ReactStars {...firstExample}></ReactStars>
              </div>
              <div className='border inline-block px-2 rounded-full bg-slate-200 font-medium'>
                {rating}
              </div>
            </div>

            {/* Button */}
            <div className='flex items-center gap-x-2'>
              <button
                onClick={() => handleAddToCart(product_id)}
                className='flex items-center gap-x-1 border px-4 py-2 rounded-full bg-ph-purple text-white md:font-bold hover:bg-ph-purple/90 active:scale-95 transition-all'
              >
                Add To Cart{' '}
                <span className='text-xl'>
                  <LiaShoppingCartSolid></LiaShoppingCartSolid>
                </span>
              </button>

              <button
                onClick={() => handleAddToWish(product_id)}
                className={
                  disable
                    ? `btn-disabled border text-2xl p-2 rounded-full bg-gray-400`
                    : `border text-2xl p-2 rounded-full hover:bg-gray-200 active:scale-95 transition-all`
                }
              >
                <LiaHeart></LiaHeart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
