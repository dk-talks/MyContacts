import React from 'react';

function ShowContact(props) {
  return (
    <div>
      <p className="info">{props.tel} </p>
      <p className="info">{props.email} </p>
    </div>
  )
};
export default ShowContact;