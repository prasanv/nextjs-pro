import React from "react";

function Users({ item }) {
  return (
    <ul>
      <li>Username: {item.name}</li>
      <li>City: {item.address.city}</li>
    </ul>
  );
}

export default Users;
