import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { Col, Row } from "antd";
const style = {
  padding: "8px 0",
};

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once.

  return (
    <div>
      <u>
        <h1 className="flex justify-center">Users' Details</h1>
      </u>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {listOfUsers.map((user) => (
          <Col
            className="gutter-row"
            xs={24}
            sm={24}
            md={12}
            lg={6}
            xl={6}
            span={6}
          >
            <div style={style}>
              <UserCard key={user.id} {...user} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserList;
