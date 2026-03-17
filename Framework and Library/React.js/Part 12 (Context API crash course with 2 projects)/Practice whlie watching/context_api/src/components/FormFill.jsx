import { useState, useContext } from "react";
import UserContext from "../features/auth/context/userContext";
function FormFill() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    setUser({ username, password });
  }
  return (
    <>
      <h1 className="text-2xl mb-3">User Authentication</h1>
      <form
        onSubmit={submitHandler}
        className="bg-black flex flex-col p-6 rounded-lg mb-3"
      >
        <label>Username:</label>
        <input
          className="px-3 py-1 w-full bg-gray-800 rounded-lg my-1"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          className="px-3 py-1 w-full bg-gray-800 rounded-lg mt-1"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="px-3 py-1 w-3/5 bg-gray-600 rounded-lg mt-4 mx-11 cursor-pointer text-white"
          type="submit"
        />
      </form>
    </>
  );
}
export default FormFill;
