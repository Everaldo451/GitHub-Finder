import styled from "styled-components"
import { CiSearch } from "react-icons/ci"
import {useState} from "react"

const SearchBar = styled.div`
  display: flex;
  justify-content: center;

  div{
    width:50%;
    position:relative;
  }

  input {
    width: 100%;
    padding: 10px 30px 10px 10px;
    border-radius: 20px;
    border: 2px solid black;
  }

  button{
    position: absolute;
    padding: 0;
    background-color: transparent;
    border: none;
    right: 10px;
    top: 50%;
    transform: translate(0,-50%);
  }
`;

type SearchProps = {
  getuser: (user:string) => Promise<void>
}

function Search({getuser}:SearchProps) {

  const [user, setUser] = useState("")

  return (
    <>
    <p style={{textAlign:"center"}}>Digite um nome de usuário</p>
    <SearchBar>
      <div>
        <input type="text" name="user" onInput = {(e)=>{setUser(e.currentTarget.value)}}/>

        <button onClick = {() => {getuser(user)}}><CiSearch size={20}/></button>
      </div>
    </SearchBar>
    </>
  )
}

export default Search