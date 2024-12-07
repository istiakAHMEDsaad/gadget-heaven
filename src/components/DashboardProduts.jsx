import PropTypes from 'prop-types';
import { RxCross1 } from 'react-icons/rx';

const DashboardProduts = ({ cart }) => {
  const { product_image, product_title, description, price, rating } =
    cart || {};
  return (
    <div>
      <div className='border bg-white rounded-lg shadow-md p-3 flex items-center justify-between pr-4'>
        <div className='flex items-center gap-x-5'>
          {/* 1 */}
          <div>
            <img
              className='w-28'
              src={product_image}
              alt={`image ${product_title}`}
            />
          </div>
          {/* 2 */}
          <div className='flex flex-col gap-y-2'>
            <h2 className='text-xl'>{product_title}</h2>
            <p className='text-gray-500'>{description}</p>
            <p className='font-bold'>Price: ${price}</p>
            <p className='text-gray-500'>Ratings: {rating}</p>
          </div>
        </div>

        {/* 3 */}
        <div className='flex justify-end'>
          <span  className='text-base text-red-500 border border-red-500 p-1 rounded-full active:scale-95 cursor-pointer'>
            <RxCross1></RxCross1>
          </span>
        </div>
      </div>
    </div>
  );
};

DashboardProduts.propTypes = {
  cart: PropTypes.object.isRequired,
};

export default DashboardProduts;
