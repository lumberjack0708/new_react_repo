import React from 'react';

export default function Profiles1() {
    return (
      <Avatar person={{name: 'Lewis Hamilton', DriverID: '44'}} size="250" h="140" />
    );
}

function Avatar({person, size, h}) {
    return (
      <div>
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_gAGDTCVa_ge6XBSCKEQHwclQuvtRUea5Q&s"
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