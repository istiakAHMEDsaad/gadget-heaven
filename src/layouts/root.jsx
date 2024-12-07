import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footers from '../components/Footers.jsx';

export default function Root() {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-280px)]'>
          <Outlet></Outlet>
        </div>
        <Footers></Footers>
      </div>
    </>
  );
}
