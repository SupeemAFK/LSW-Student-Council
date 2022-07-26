import React, { useEffect } from 'react';

export interface IAboutProps {
}

export default function About (props: IAboutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="h-100% pt-16 px-10 lg:px-20">
      <div className="text-orange-500 font-semibold text-3xl mt-5">
        เกี่ยวกับพรรค
      </div>
      <div className="my-5">
        <div>
          <h1 className="text-orange-500 font-semibold text-xl mt-5">จุดเริ่มต้น</h1>
          <p>ที่มาของชื่อพรรค ธารพีพฤกษ์ ธารแปลว่าน้ำ ระพีแปลว่าแสงแดด พฤกษ์แปลว่าต้นไม้ ต้นไม้ที่จะเติบโตได้ดีต้องมีน้ำและแสงแดดเปรียบเสมือนโรงเรียนถ้าจะพัฒนาไปในด้านที่ดีได้ต้องมีสภานักเรียน</p>
        </div>
        <div>
          <h1 className="text-orange-500 font-semibold text-xl mt-5">จุดประสงค์</h1> 
          <p>อยากพัฒนาและสานต่อนโยบายของรุ่นพี่นำนโยบายมาปรับใช้ให้เข้ากับสถานการณ์ของโรงเรียนเพื่อให้มีผลดีระยะยาวในการพัฒนาโรงเรียนและคุณภาพชีวิตจริงของนักเรียนทุกคน</p>
        </div>
      </div>
    </div>
  );
}
