import React from 'react';
import fernando_img from '../assets/fernando_alonso.jpg';

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
          src = {fernando_img}
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