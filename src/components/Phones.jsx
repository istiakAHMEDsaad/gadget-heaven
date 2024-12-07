import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phoneId = useLoaderData();
    const phoneName = 'Phones';
    const [phone, setPhone] = useState([]);
  
    useEffect(() => {
      const filterPhone = [...phoneId].filter(
        (cateId) => cateId.category === phoneName
      );
      setPhone(filterPhone);
    }, [phoneId, phoneName]);
  //   console.log(laptop);


  const [id, setId] = useState([]);
  useEffect(()=>{
    const findId = [...phoneId].filter(findId => findId.product_id === findId.product_id);
    setId(findId);
  },[phoneId])

    return (
      <>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          {phone.map((id) => (
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
              <Link to={`/categories/Phones/${id.product_id}`}>
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

export default Phones;
