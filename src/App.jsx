import React, { useEffect, useState } from "react";
import { auth, provider } from "./firebase/config";
import { signInWithPopup } from "firebase/auth";
import "./App.css";

const App = () => {
  const [mail, setemail] = useState();
  const [value, setvalue] = useState();
  const [img, setimg] = useState();

  const onClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setvalue(data.user.displayName);
      setimg(data.user.photoURL);
      setemail(data.user.email);
    });
  };

  useEffect(() => {
    localStorage.setItem("email", mail);
    localStorage.setItem("username", value);
  });
  return (
    <>
      <div>
        {!value ? (
          <div>
            <button onClick={() => onClick()}>google provider</button>
          </div>
        ) : null}
      </div>
      <div>{value}</div>
      <div>{!img ? null : <img className="profile" src={img} alt="" />}</div>
    </>
  );
};
export default App;
