import { Link } from 'react-router-dom';
import bannerImage from '../assets/banner.jpg';
const Banner = () => {
  return (
    <div className='hero bg-ph-purple rounded-b-lg pt-5 pb-32 lg:mb-72 md:mb-60 mb-48 relative'>
      <div className='hero-content text-center'>
        <div className='lg:max-w-3xl md:max-w-xl'>
          <h1 className='lg:text-4xl md:text-2xl text-xl font-bold text-white'>
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className='py-6 text-white font-light'>
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to={'/dashboard'}>
            <button className='btn btn-white rounded-full text-ph-purple font-bold'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
      {/* Absolute banner */}
      <div className='lg:max-w-lg lg:max-h-[512px] md:max-w-md md:max-h-[448px] absolute lg:top-64 md:top-60 top-72 border p-3 rounded-md lg:scale-x-125 md:scale-x-110 bg-white/20'>
        <img
          className='object-contain rounded-md'
          src={bannerImage}
          alt='Banner Image'
        />
      </div>
    </div>
  );
};

export default Banner;
