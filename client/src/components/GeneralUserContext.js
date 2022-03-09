// import { createContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const GeneralUserContext = createContext(null);

// export const GeneralUserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [feed, setFeed] = useState(null);

//   const { profileId } = useParams();
//   // console.log({ profileId });

//   useEffect(() => {
//     fetch(`/api/${profileId}/feed`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setFeed(data);
//         // setStatus("idle");
//       });
//     fetch(`/api/${profileId}/profile`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setUser(data);
//         // setStatus("idle");
//       });
//   }, [profileId]);

//   return (
//     <GeneralUserContext.Provider value={{ user, feed }}>
//       {children}
//     </GeneralUserContext.Provider>
//   );
// };

// export default GeneralUserContext;
