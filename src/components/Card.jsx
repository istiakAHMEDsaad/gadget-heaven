import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Card = ({ categoryAll }) => {
  const { product_id, product_title, product_image, price} = categoryAll || {};
  return (
      <div className='flex flex-col items-center justify-between p-5 gap-y-3 bg-white rounded-lg shadow-md lg:hover:scale-105 transition-all'>
      <div className='md:max-w-36'>
        <img className='w-full h-full' src={product_image} alt={`image ${product_id}`} />
      </div>
      <h2 className='text-2xl text-center'>{product_title}</h2>
      <p className='text-gray-500 text-center'>Price: ${price}</p>
      <Link to={`/cardDetails/${product_id}`}><button className='border-2 px-4 py-2 rounded-md border-ph-purple hover:bg-ph-purple hover:text-white active:scale-95 transition-all'>View Details</button></Link>
    </div>
  );
};

Card.propTypes = {
  categoryAll: PropTypes.object.isRequired,
};

export default Card;
