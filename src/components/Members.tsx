import React, { useEffect } from 'react';
import Member from './Member';
import { members } from '../data/members';

export interface IMembersProps {
}

export default function Members (props: IMembersProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="h-100% pt-16 px-10 lg:px-20">
      <div className="text-orange-500 font-semibold text-3xl mt-5 text-center lg:ml-5 lg:text-left">
        สมาชิกพรรค
      </div>
      <div className="my-5 grid grid-cols-auto-fit gap-10 justify-items-center">
        {members.map(member => <Member key={member.name} member={member} />)}
      </div>
    </div>
  );
}
