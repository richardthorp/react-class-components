// import UsersContext from "./store/users-content";
// import UsersContextProvider from "./store/users-content";
import UserFinder from "./classComponents/UserFinder";

// const users = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' }
// ];

function App() {
  return (
    // <UsersContextProvider>
      <UserFinder />
    // </UsersContextProvider>
  );
}

export default App;
