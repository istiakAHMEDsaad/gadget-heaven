import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const CategoryBtn = ({ category }) => {
  // const rootDir = '/';
//   console.log(category[0].id);
  return (
    <div className='border p-3 rounded-lg bg-white flex flex-col gap-y-4 h-80 shadow-md'>
      <NavLink
        to='/'
        className={({ isActive, isPending }) =>
          isActive ? 'active-now ' : isPending ? 'pending' : 'category-btn'
        }
      >
        <button className=''>All Product</button>
      </NavLink>
      {category.map((cate) => (
        <NavLink
          key={cate.category}
          to={`/categories/${cate.category}`}
          // to={rootDir === '/' ? : }
          className={({ isActive, isPending }) =>
            isActive ? 'active-now ' : isPending ? 'pending' : 'category-btn text-center'
          }
        >
          {cate.category}
        </NavLink>
      ))}

      {/* <NavLink
        to='/laptops'
        className={({ isActive, isPending }) =>
          isActive ? 'aa' : isPending ? 'pending' : ''
        }
      >
        <button>Laptop</button>
      </NavLink> */}
    </div>
  );
};

CategoryBtn.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryBtn;
