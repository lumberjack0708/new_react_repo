import React from 'react';

export default function Profiles2() {
  return (
    <Avatar person={{name: 'Fernando Alonso', DriverID: '14'}} size="250" h="140" />
  );
}

function Avatar({ person, size, h }) {
  return (
    <div>
      <figure>
        <img
          src="https://www.si.com/.image/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/MTk4Nzc0ODM5NzIzNDM1Mzcx/untitled-design---2023-06-19t134619263.png"
          alt="Fernando Alonso"
          width={size}
          height={h}
        />
        <figcaption>
          name: {person.name}<br />
          DriverID: {person.DriverID}<br />
        </figcaption>
      </figure>
    </div>
  );
}