import React, { Children } from "react";

const ctx = {
  users: [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' }
  ]
}

export const UsersContext = React.createContext(ctx);

// export default function UsersContextProvider({ children }) {
//   // return (
//   //   <UsersContext.Provider value={ctx} >
//   //     {children}
//   //   </UsersContext.Provider>
//   // )
//   return UsersContext;
// }

