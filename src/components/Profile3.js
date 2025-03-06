import React from 'react';

export default function Profiles1() {
    return (
      <Avatar person={{name: 'Charles Leclerc', DriverID: '16'}} size="250" h="140"/>
    );
}

function Avatar({person, size, h}) {
    return (
      <div>
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2V448DMGZsXflnXqDWfz5JibFOeaeeh2MQ&s"
            alt="Lewis Hamilton"
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