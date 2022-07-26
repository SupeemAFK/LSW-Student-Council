import * as React from 'react';

export interface INewsProps {
}

export default function News(props: INewsProps) {
  return (
    <div className="h-100% pt-16 px-10 lg:px-20">
      <div className="text-orange-500 font-semibold text-3xl mt-5">
        ข่าวสาร
      </div>
      <div className="my-5">
        <p>เร็วๆนี้...</p>
      </div>
    </div>
  );
}
