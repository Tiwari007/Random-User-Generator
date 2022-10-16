import axios from "axios";

const RandomUserData = async () => {
  const data = await axios("https://randomuser.me/api/");
  return data.data.results;
};

export default RandomUserData;
