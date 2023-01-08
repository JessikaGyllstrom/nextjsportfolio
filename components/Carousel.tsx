import React from 'react'

// import NextPage generic type
import { NextPage } from "next";

// Props interface
// with username set to string
interface Props {
  username: string;
}

// Defining NextPage as
// type for Name component
const Name: NextPage<Props> = (props) => {
    console.log(props)
  // using destructuring to get username
  const { username } = props;

  return <h1>{username}</h1>;
};

// export component
export default Name;
