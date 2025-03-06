import React from 'react';
import fernando_img from '../assets/fernando_alonso.jpg';

export function Profiles1() {
  return (
    <Avatar person={{name: 'Lewis Hamilton', DriverID: '44'}} property={{size:"250", h:"140", alt:"Lewis Hamilton", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_gAGDTCVa_ge6XBSCKEQHwclQuvtRUea5Q&s"}} />
  );
}
export function Profiles2() {
  return (
    <Avatar person={{name: 'Fernando Alonso', DriverID: '14'}} property={{size:"250", h:"140", alt:"Fernando Alonso", src:fernando_img }} />
  );
}
export function Profiles3() {
  return (
    <Avatar person={{name: 'Charles Leclerc', DriverID: '16'}} property={{size:"250", h:"140", alt:"Charles Leclerc", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2V448DMGZsXflnXqDWfz5JibFOeaeeh2MQ&s"}} />
  );
}

function Avatar({ person, property }) {
  return (
    <div>
      <figure>
        <img
          src = {property.src}
          alt = {property.alt}
          width={property.size}
          height={property.h}
        />
        <figcaption>
          name: {person.name}<br />
          DriverID: {person.DriverID}<br />
        </figcaption>
      </figure>
    </div>
  );
}