import React, { useEffect } from 'react';

export interface IPolicyProps {
}

export default function Policy (props: IPolicyProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="h-100% pt-16 px-10 lg:px-20">
      <div className="text-orange-500 font-semibold text-3xl mt-5">
        นโยบายพรรค
      </div>
      <div className="my-5">
        <div>
          <h1 className="text-orange-500 font-semibold text-xl">1. จัดทำกิจกรรมตามเทศกาล</h1>
          <p>จัดทำกิจกรรมตามเทศกาล และเปิดรับนักเรียนทุกเพศ และทุกวัย ที่มีความสามารถ เช่น ด้านการแสดง ด้านการร้องเพลง ด้านดนตรี เป็นต้น โดยที่ไม่ยึดหลัก Beauty Standard และ lgbtq ในการคัดเลือกหรือการตัดสิน และเป็นการใช้เวลาว่างให้เกิดประโยชน์</p>
        </div>
        <div className="mt-5">
          <h1 className="text-orange-500 font-semibold text-xl">2. ทำการจัดทำโครงการเกี่ยวกับการรับบริจาคสิ่งของต่างๆให้กับมูลนิธิ</h1>
          <p>ทำการจัดทำโครงการเกี่ยวกับการรับบริจาคสิ่งของต่างๆให้กับมูลนิธิ โดยที่พี่ๆน้องๆ หรือบุคคลครูท่านใดที่สนใจ สามารถนำสิ่งของไม่ได้ใช้แล้วนำมาบริจาค เพื่อทำให้เกิดประโยชน์ต่อได้</p>
        </div>
        <div className="mt-5">
          <h1 className="text-orange-500 font-semibold text-xl">3. ส่งเสริมกีฬา E-sport</h1>
          <p>ส่งเสริมกีฬา E-sport สำหรับนักเรียนที่ต้องการจะพัฒนาทักษะ ฝีมือ หรือทดลองแข่งขัน เพื่อความสนุกสนาน และสามารถที่จะนำไปพัฒนาต่อยอดอาชีพในด้านนี้</p>
        </div>
        <div className="mt-5">
          <h1 className="text-orange-500 font-semibold text-xl">4. ส่งเสริมการฝึกงานในด้านอาชีพต่างๆ</h1>
          <p>ส่งเสริมการฝึกงานในด้านอาชีพต่างๆ จะมีการจัดหาค่ายและข่าวสารเกี่ยวกับแต่ล่ะคณะ โดยข้อมูลข่าวสารจะมีการโพสต์ลงในช่องทางโซเชียลมีเดีย และเว็บไซต์ของพรรค เพื่อจะได้มีการเตรียมความพร้อมสำหรับทำ Portfolio ในการยื่นเข้ามหาวิทยาลัยในรอบที่1 หรือสำหรับน้องมัธยมศึกษาตอนต้น ที่ต้องการจะเข้ามัธยมศึกษาตอนปลายในบางโรงเรียน</p>
        </div>
        <div className="mt-5">
          <h1 className="text-orange-500 font-semibold text-xl">5. สร้าง Google Form</h1>
          <p>สร้าง Google Form ที่นักเรียนทุกคนสามารถมาลงความคิดเห็น โดยที่ทุกคนในโรงเรียนมีสิทธิ์ และมีส่วนร่วมในการเสนอ เพื่อที่จะแก้ไขและปรับปรุงภายในโรงเรียน</p>
        </div>
        <div className="mt-5">
          <h1 className="text-orange-500 font-semibold text-xl">6. จัดทำ website สำหรับข้อมูลข่าวสาร</h1>
          <p>จัดทำ website สำหรับข้อมูลข่าวสาร และนโยบายของพรรค เพื่อให้ผู้ที่สนใจสามารถเข้าไปอ่านได้สะดวก</p>
        </div>
      </div>
    </div>
  );
}
