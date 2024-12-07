import { Outlet, useLoaderData } from 'react-router-dom';
import AllProducts from '../components/AllProducts';
import Banner from '../components/Banner';

const Home = () => {
  const category = useLoaderData();
  // console.log(category)
  return (
    <div>
      <Banner></Banner>
      <div className='space-y-4'>
        <h2 className='text-center lg:text-4xl md:text-3xl text-2xl font-bold'>Explore Cutting-Edge Gadgets</h2>
        <div className='flex flex-col md:flex-row items-start justify-start'>
        <AllProducts category={category}></AllProducts>
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
