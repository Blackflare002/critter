import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");

  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`

  // const { user } = useParams();
  // console.log({ user });

  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => res.json())
      .then((data) => {
        // console.log("Current User data: ", data);
        setCurrentUser(data);
        setStatus("idle");
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
