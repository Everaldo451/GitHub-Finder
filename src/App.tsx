import { useState } from "react";
import {Outlet} from "react-router-dom"
import styled from "styled-components";

import { UserContext } from "./contexts/UserContext";
import { UserType } from "./Types";

const H1 = styled.h1`
  text-align: center
`

function App() {
  const [user, setUser] = useState<UserType|null>(null)
  return (
    <>
      <H1>Github Finder</H1>
      <UserContext.Provider value={[user, setUser]}>

        <Outlet/>
      </UserContext.Provider>
    </>
  );
}

export default App;
