const Reviews = () => {
  return (
    <div>
      {/* main */}
      <div>
        {/* hero */}
        <div>
          <div className='hero bg-base-200 min-h-screen'>
            <div className='hero-content text-center'>
              <div className='max-w-md'>
                <h1 className='text-5xl font-bold'>Best Product to Buy</h1>
                <p className='py-6'>
                  you can find your favourite device here, We give you the best
                  service in the hole city here are some review of our customer
                </p>
                <button className='btn btn-primary'>Read now</button>
              </div>
            </div>
          </div>
        </div>
        {/* Find best deals */}
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='diff aspect-[16/9] max-w-md mb-10'>
            <div className='diff-item-1'>
              <img
                alt='daisy'
                src=' https://m.media-amazon.com/images/I/61qV17Px4NL._AC_SX342_.jpg'
                className=''
              />
            </div>
            <div className='diff-item-2'>
              <img
                alt='daisy'
                src='https://m.media-amazon.com/images/I/51EldjH4K8L._AC_SX385_.jpg'
              />
            </div>
            <div className='diff-resizer'></div>
          </div>
          <div>
            <div className='chat chat-start'>
              <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                  <img
                    alt='Tailwind CSS chat bubble component'
                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                  />
                </div>
              </div>
              <div className='chat-bubble'>
                This is the best service i ever get.
              </div>
            </div>
            <div className='chat chat-start'>
              <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                  <img
                    alt='Tailwind CSS chat bubble component'
                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                  />
                </div>
              </div>
              <div className='chat-bubble'>
                Their behaviour is so good and this place is very nice
              </div>
            </div>
            <div className='chat chat-start'>
              <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                  <img
                    alt='Tailwind CSS chat bubble component'
                    src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                  />
                </div>
              </div>
              <div className='chat-bubble'>I the got best after sell service</div>
            </div>
          </div>
        </div>

        {/* carousel */}
        <div>
          <div className='carousel w-full'>
            <div id='item1' className='carousel-item w-full'>
              <img
                src='https://www.shutterstock.com/shutterstock/photos/1051249982/display_1500/stock-photo-blurred-abstract-photo-of-laptops-and-electronics-store-1051249982.jpg'
                className='md:h-80 w-full'
              />
            </div>
            <div id='item2' className='carousel-item w-full'>
              <img
                src='https://www.shutterstock.com/shutterstock/photos/2457741293/display_1500/stock-photo-smartphones-on-the-shelf-of-the-technology-store-department-of-mobile-phones-in-the-tech-store-2457741293.jpg'
                className='md:h-80 w-full'
              />
            </div>
            <div id='item3' className='carousel-item w-full'>
              <img
                src='https://www.shutterstock.com/shutterstock/photos/1445581070/display_1500/stock-photo-hall-shopping-center-shop-digital-equipment-and-electronics-sale-of-laptops-1445581070.jpg'
                className='md:h-80 w-full'
              />
            </div>
            <div id='item4' className='carousel-item w-full'>
              <img
                src='https://www.shutterstock.com/shutterstock/photos/2223727953/display_1500/stock-photo-happy-seller-man-helping-to-people-to-buy-a-new-digital-smart-device-in-tech-store-2223727953.jpg'
                className='md:h-80 w-full'
              />
            </div>
          </div>
          <div className='flex w-full justify-center gap-2 py-2'>
            <a href='#item1' className='btn btn-xs'>
              1
            </a>
            <a href='#item2' className='btn btn-xs'>
              2
            </a>
            <a href='#item3' className='btn btn-xs'>
              3
            </a>
            <a href='#item4' className='btn btn-xs'>
              4
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
