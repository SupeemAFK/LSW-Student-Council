import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="h-100% pt-16">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
      >
          <div className='w-full'>
              <img className="w-full object-cover" src='/คำคม 1.jpg' alt='img-1' />
          </div>
          <div className='w-full'>
              <img className="w-full object-cover" src='/คำคม 2.jpg' alt='img-2' />
          </div>
          <div className='w-full'>
              <img className="w-full object-cover" src='/คำคม 3.jpg' alt='img-3' />
          </div>
      </Carousel>

      <section className='p-3 px-10 lg:px-20'>
        <div className='my-10 flex flex-col items-center'>
          <div className='w-full sm:w-96 lg:w-1/2'>
            <img className='object-cover w-full' src="/หาเสียง Final.jpg" alt="img" />
          </div>
          <h1 className='text-orange-500 font-bold text-5xl text-center my-5'>นโยบายพรรคธารพีพฤกษ์</h1>
          <div className='flex justify-center'>
            <Link to='/policy'>
              <button className='my-2 bg-orange-500 p-2 hover:bg-orange-700 text-white transition-all duration-300 rounded-md'>อ่านนโยบายพรรค</button>
            </Link>
          </div>
        </div>
      </section>

      <section className='p-3 px-10 lg:px-20 bg-black'>
        <div className="my-10 flex flex-col items-center">
          <div className="w-full lg:w-1/2">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              showArrows={true}
              showStatus={false}
            >
              <div>
                <img className='object-cover w-full' src="/received_584638026207019.jpeg" alt="img" />
              </div>
              <div>
                <img className='object-cover w-full' src="/1654000723320-0.jpg" alt="img" />
              </div>
              <div>
                <img className='object-cover w-full' src="/1654000779361-0.jpg" alt="img" />
              </div>
            </Carousel>
          </div>
          <h1 className='my-5 text-orange-500 font-bold text-5xl text-center'>สมาชิกพรรคธารพีพฤกษ์</h1>
          <div className='flex justify-center'>
            <Link to='/members'>
              <button className='my-2 bg-orange-500 p-2 hover:bg-orange-700 text-white transition-all duration-300 rounded-md'>ดูสมาชิกพรรค</button>
            </Link>
          </div>
        </div>
      </section>

      <section className='p-3 px-10 lg:px-20'>
        <div className='my-10 flex flex-col items-center'>
          <h1 className='text-orange-500 font-bold text-5xl text-center mt-5'>เกี่ยวกับพรรคธารพีพฤกษ์</h1>
          <p className='font-semibold mt-2 mb-5 text-xl'>เราต้องการเป็นสภานักเรียนที่ตอบสนองความต้องการของนักเรียนทุกคน</p>
          <div className='flex justify-center'>
            <Link to='/about'>
              <button className='my-2 bg-orange-500 p-2 hover:bg-orange-700 text-white transition-all duration-300 rounded-md'>อ่านเกี่ยวกับพรรค</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

