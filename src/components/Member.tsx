import * as React from 'react';

export interface IMember {
    name: string;
    img?: string;
    class: string;
    role: string;
}

export interface IMemberProps {
    member: IMember;
}

export default function Member ({ member }: IMemberProps) {
  return (
    <div className="shadow-lg w-52 rounded-lg">
      <div className="w-full rounded-lg">
          <img className="w-full object-cover rounded-t-lg" src={member?.img ? member.img : `/memberPics/${member.name}.jpg`} alt={member.name} />
      </div>
      <div className='p-2'>
        <p>ชื่อ : {member.name}</p>
        <p>ชั้น : {member.class}</p>
        <p>ตำแหน่ง : {member.role}</p>
      </div>
    </div>
  );
}
