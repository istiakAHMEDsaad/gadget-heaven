import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { LiaSortAlphaDownAltSolid } from 'react-icons/lia';
import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  getAddToCartList,
  getAddToWishList,
} from '../utility/addToLocalStorage';
import DashboardProduts from '../components/DashboardProduts';
// import { ContexProp } from '../utility/contex';

const Dashboard = () => {
  const data = useLoaderData();
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState('');


  useEffect(() => {
    const storedCartList = getAddToCartList();
    const cartProductList = data.filter((productId) =>
      storedCartList.includes(productId.product_id)
    );
    setCartList(cartProductList);

    const storeWishList = getAddToWishList();
    const wishProductList = data.filter((productId) =>
      storeWishList.includes(productId.product_id)
    );
    setWishList(wishProductList);
  }, [data]);

  //   console.log(getAddToCartList);

  const handleSortType = (sortType) => {
    setSort(sortType);

    if(sortType === 'Ratings'){
        const sortCartList = [...cartList].sort((a, b) => b.rating - a.rating);
        setCartList(sortCartList)
    }
  }

  // const money = useContext(ContexProp)

  return (
    <div className='space-y-4'>
      {/* banner */}
      <div className='bg-ph-purple text-white flex flex-col items-center gap-y-2 p-12 rounded-lg'>
        <h2 className='text-center text-3xl font-bold'>Dashboard</h2>
        <p className='font-normal'>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className=''>
        <Tabs>
          <TabList>
            <div className='flex justify-center'>
              <Tab>
                <span className='text-lg font-bold'>Cart</span>
              </Tab>
              <Tab>
                <span className='text-lg font-bold'>Wishlist</span>
              </Tab>
            </div>
          </TabList>

          {/* <hr className='border-b border-black w-full' /> */}
          {/* --------- button 1 ---------- */}
          <TabPanel>
            <div className='space-y-2'>
              <div className='flex flex-col md:flex-row items-center justify-between'>
                <h2 className='font-bold text-lg'>Cart</h2>

                {/* +++++++++ BUtton ++++++++ */}
                <div className='flex flex-col md:flex-row md:gap-x-2 items-center md:gap-y-0 gap-y-3'>
                  {/* ----------------------money */}
                  <h2 className='text-lg font-bold'>Total cost: 999.99</h2>
                  {/* ------btn1 --------- */}
                  <button onClick={() => handleSortType('Ratings')} className='border border-ph-purple text-ph-purple font-bold px-4 py-2 rounded-full flex items-center gap-x-1 hover:bg-gray-200 active:scale-95 transition-all'>
                    <span>Sort by Price</span>{' '}
                    <span className='text-lg'>
                      <LiaSortAlphaDownAltSolid></LiaSortAlphaDownAltSolid>
                    </span>
                  </button>
                  <button className='border px-4 py-2 rounded-full bg-ph-purple font-bold text-white text-lg hover:bg-ph-purple/90 active:scale-95 transition-all'>
                    Purchase
                  </button>
                </div>
              </div>

              {/* ---------- details ---------- */}
              <div className='space-y-4'>
                {cartList.map((cart, idx) => (
                  <DashboardProduts key={idx} cart={cart}></DashboardProduts>
                ))}
              </div>
            </div>
          </TabPanel>

                {/* --------- button 2 ---------- */}
          <TabPanel>
            <div>
              {wishList.map((cart, idx) => (
                <DashboardProduts key={idx} cart={cart}></DashboardProduts>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
