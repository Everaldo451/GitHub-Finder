import {Outlet} from "react-router-dom"
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center
`

function App() {
  return (
    <>
    <H1>Github Search</H1>
    <Outlet/>
    </>
  );
}

export default App;
