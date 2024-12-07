import CategoryBtn from './CategoryBtn';
import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

const AllProducts = ({ category }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-10 md:mb-20 mb-12'>
      

      <Link to='/'>
        <CategoryBtn category={category}></CategoryBtn>
      </Link>
      {/* ---------- Card ---------- */}
      {/* flex flex-col md:flex-row gap-x-5 */}
      {/* <div className=''>
        <div className=''>
          <Outlet></Outlet>
        </div>
      </div> */}
    </div>
  );
};

AllProducts.propTypes = {
  category: PropTypes.object.isRequired,
};

export default AllProducts;
