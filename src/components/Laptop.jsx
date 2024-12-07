import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Laptop = () => {
  const laptopId = useLoaderData();
  // const product_id = useParams();
  const laptopName = 'Laptops';
  const [laptop, setLaptop] = useState([]);

  useEffect(() => {
    const filterLaptop = [...laptopId].filter(
      (cateId) => cateId.category === laptopName
    );
    setLaptop(filterLaptop);
  }, [laptopId, laptopName]);
  
  // console.log(setLaptop);
  const [id, setId] = useState([]);
  useEffect(()=>{
    const findId = [...laptopId].filter(findId => findId.product_id === findId.product_id);
    setId(findId);
  },[laptopId])
  
  // const product_id = id.product_id;
  // console.log(id);

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {laptop.map((id) => (
          <div
            key={id.product_id}
            className='flex flex-col items-center justify-between p-5 gap-y-3 bg-white rounded-lg shadow-md lg:hover:scale-105 transition-all'
          >
            <div className='md:max-w-36'>
              <img
                className='w-full h-full'
                src={id.product_image}
                alt={`image ${id.product_id}`}
              />
            </div>

            {/* Title */}
            <h2 className='text-2xl text-center'>{id.product_title}</h2>
            <p className='text-gray-500 text-center'>Price: ${id.price}</p>
            <Link to={`/categories/Laptops/${id.product_id}`}>
              <button className='border-2 px-4 py-2 rounded-md border-ph-purple hover:bg-ph-purple hover:text-white active:scale-95 transition-all'>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

Laptop.propTypes = {
  categoryAll: PropTypes.object.isRequired,
};

export default Laptop;

/*
<div className='flex flex-col items-center justify-between p-5 gap-y-3 bg-white rounded-lg shadow-md lg:hover:scale-105 transition-all'>
      <div className='md:max-w-36'>
        <img
          className='w-full h-full'
          src={product_image}
          alt={`image ${product_id}`}
        />
      </div>
      <h2 className='text-2xl text-center'>{product_title}</h2>
      <p className='text-gray-500 text-center'>Price: {price}</p>
      <Link>
        <button className='border-2 px-4 py-2 rounded-md border-ph-purple hover:bg-ph-purple hover:text-white active:scale-95 transition-all'>
          View Details
        </button>
      </Link>
    </div>
*/
