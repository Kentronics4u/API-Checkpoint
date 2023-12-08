import React from "react";
import { Card } from "antd";

const UserCard = ({ name, address, website, email, company }) => {
  return (
    <Card
      className="border-4 border-black m-8"
      title={<span className="font-black text-xl w-full">{name}</span>}
      style={{
        width: 300,
      }}
    >
      <p className="text-black-600  ">Company: {company.name}</p>
      <p className="text-black-600">Street: {address.street}</p>
      <p className="text-black-600">City: {address.city}</p>
      <p className="text-black-600">Website: {website}</p>
      <p className="text-black-600">Email: {email}</p>
    </Card>
  );
};

export default UserCard;
