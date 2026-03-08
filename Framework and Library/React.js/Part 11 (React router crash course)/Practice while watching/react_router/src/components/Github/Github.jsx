import { useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  return (
    <div className="flex flex-col justify-center items-center text-white bg-gray-700  text-3xl m-4 p-4">
      <h1 className="block">Github Followers: {data.followers}</h1>
      <img className="m-4" width={250} src={data.avatar_url} alt="github img" />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary");
  return res.json();
};
