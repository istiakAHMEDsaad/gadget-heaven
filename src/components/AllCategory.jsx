import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';


const AllCategory = () => {
  const data = useLoaderData();
  // const { category } = useParams();

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
      {/* {categorY.map((categoryAll) => (
        <Laptop key={categoryAll.product_id} categoryAll={categoryAll}></Laptop>
      ))} */}
      {data.map((categoryAll) => (
        <Card key={categoryAll.product_id} categoryAll={categoryAll}></Card>
      ))}
      {/* <Laptop></Laptop> */}
    </div>
  );
};

export default AllCategory;
