import React from "react";
import { useQuery } from "react-query";
import RandomUserData from "./APIs/RandomUserData";
import Card from "./components/Card";

const Home = () => {

  const { data, isLoading, isError, error } = useQuery("user", RandomUserData, {
    refetchInterval: 2000
  });

  if (isError) return console.log(error);
  if (isLoading) return <h1>Loading...</h1>;

  
  return (
    <div><h1 style={{textAlign: "center"}}>RANDOM USER API</h1>
      {data?.map((user, index) => {
        return <Card key={index} userData={user} />;
      })}
    </div>
  );
};

export default Home;
