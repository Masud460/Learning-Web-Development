import { useState } from "react";
import { Input } from "../../components";
import { useAuth } from "../../hooks";
import {saveUserToStorage} from "../../utils/storage";

function LoginForm() {
  const { login } = useAuth();
  
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);


  const SubmitHandler = (e) => {
          e.preventDefault();
          login({ username: username, email: email, pass: pass })
          saveUserToStorage(username, email, pass)
        }
  return (
    <div>
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={SubmitHandler}
      >
        <div>
        <label
          htmlFor="text"
          className="text-base lg:text-lg font-semibold block"
        >
          Full Name:
        </label>
        <Input
          type="text"
          id="text"
          place="full name"
          val={username}
          onCng={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
        <label
          htmlFor="email"
          className="text-base lg:text-lg font-semibold block"
        >
          Email:
        </label>
        <Input
          type="email"
          id="email"
          place="email"
          val={email}
          onCng={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
        <label
          htmlFor="password"
          className="text-base lg:text-lg font-semibold block"
        >
          Password:
        </label>
        <Input
          type="password"
          id="password"
          place="password"
          val={pass}
          onCng={(e) => setPass(e.target.value)}
          />
          </div>
        <input
          type="submit"
          value="Login"
          className="bg-blue-600 mt-2 py-2 lg:text-lg text-white font-semibold rounded-md cursor-pointer w-68 lg:mx-30 lg:mt-3"
          
        />
      </form>
    </div>
  );
}

export default LoginForm;
