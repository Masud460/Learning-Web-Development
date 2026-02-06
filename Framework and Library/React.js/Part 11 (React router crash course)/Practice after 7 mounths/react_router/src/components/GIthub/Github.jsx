import { useState } from "react";

export default function Github() {
  const [data, setData] = useState;
  fetch("https://api.github.com/users/hiteshchouhdhary")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
  return (
    <>
      <div>
        <h1>Followers: {data.followers}</h1>
        <img src={data.avtar_url} alt="github picture" />
      </div>
    </>
  );
}
