import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Input from "./../../components/Input";

function Home() {
  const [username, setUsername] = useState("pjchong");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/income_events");
      const json = await response.json();
      console.log(json, "wtj");
      setData(json);
    }

    fetchData();
  }, []);

  const generateSum = () => {
    const result = data.reduce(function (sum, item) {
      console.log(item.value, "value");
      return (sum = sum + item.value);
    }, 0);

    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {};

    data.username = username;
    data.date = date;
    data.description = description;
    data.value = value;

    // console.log(data, "huh??");

    // const date = new Date();
    // console.log(date, "the date", Date.parse(date), "the parsez");
    // const data = {
    //   username: "pjchong",
    //   date: date,

    //   description: "win video games",
    //   value: 1111,
    // };

    // TODO: Middlware, NewForm() -- multipart/formdata

    await fetch("http://localhost:5000/income_events/add", {
      method: "POST",
      //   NOTE: needs headers l0l with json
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(`Error: ${err}`));
    console.log(data, "the form dataurs");
  };
  return (
    <Root>
      <h1>This is the HOME page</h1>
      <Link to="/about">
        <h1>ABout</h1>
      </Link>

      <form onSubmit={handleSubmit}>
        <Input
          label="Value"
          type="number"
          name="value"
          required
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          label="Description"
          name="description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label="Date"
          type="date"
          name="date"
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>

      {/* TODO: Format time */}
      {/* TODO: Add incoming and obtained incomes */}
      {/* TODO: add and remove items */}
      <DataPoints>
        {data.map((point, index) => (
          <p key={index}>
            <strong>{point.value}</strong> from {point.description} on{" "}
            {point.date}
          </p>
        ))}

        <h2>Total Income: {generateSum()} </h2>
      </DataPoints>
    </Root>
  );
}

export default Home;

const Root = styled.div`
  h1 {
    color: black;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;

const Button = styled.button``;

const DataPoints = styled.div``;
