import { Link } from "react-router-dom";

const ProductsDetails = () => {
  return (
    <div className='bg-ph-purple  text-white pt-10 md:pb-72 pb-10 mb-5'>
      <div>
        <Link to={-1} className='bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 active:scale-95 transition-all'>
          Back
        </Link>
      </div>
      <div className='flex flex-col items-center gap-y-3'>
        <h2 className='md:text-3xl text-xl font-bold text-center'>
          Product Details
        </h2>
        <p className='font-light text-center'>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
    </div>
  );
};

export default ProductsDetails;
