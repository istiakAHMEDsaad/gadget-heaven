const Footers = () => {
  return (
    <footer className='space-y-4'>
      <div className='flex flex-col gap-y-2 items-center justify-center'>
        <h2 className='text-3xl font-bold'>Gadget Heaven</h2>
        <p className='text-gray-500 text-center'>
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-around'>
        <nav className="flex flex-col">
          <h6 className='text-black font-bold text-lg mb-1'>Services</h6>
          <a className='link link-hover text-gray-500'>Product Support</a>
          <a className='link link-hover text-gray-500'>Order Tracking</a>
          <a className='link link-hover text-gray-500'>Shipping & Delivery</a>
          <a className='link link-hover text-gray-500'>Returns</a>
        </nav>
        <nav  className="flex flex-col">
          <h6 className='text-black font-bold text-lg mb-1'>Company</h6>
          <a className='link link-hover text-gray-500'>About us</a>
          <a className='link link-hover text-gray-500'>Careers</a>
          <a className='link link-hover text-gray-500'>Contact</a>
        </nav>
        <nav  className="flex flex-col">
          <h6 className='text-black font-bold text-lg mb-1'>Legal</h6>
          <a className='link link-hover text-gray-500'>Terms of use</a>
          <a className='link link-hover text-gray-500'>Privacy policy</a>
          <a className='link link-hover text-gray-500'>Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footers;
