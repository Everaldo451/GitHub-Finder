import { useState } from "react"
import styled from "styled-components"
import { CiSearch } from "react-icons/ci"
import { CommonSection } from "../CommonSection";


const SearchBar = styled.div`
  display: flex;
  justify-content: center;

  div{
    width:50%;
    display: flex;
    align-items: stretch;
    gap: 5px;
  }

  input {
    width: 100%;
    color: initial;
    padding: 10px 30px 10px 10px;
    border-radius: 5px;
    border: 2px solid black;
    outline: none;
  }
`;

const SearchButton = styled.button`
  padding: 10px;
  background-color: black;
  border: none;

  & :hover {
    cursor: pointer;
  }
`

const H3 = styled.h3`
  color: var(--headColor);
  text-align: center;
`

type SearchProps = {
  getuser: (user:string) => Promise<void>
}

function Search({getuser}:SearchProps) {

  const [user, setUser] = useState("")

  return (
    <CommonSection>
      <h2 style={{textAlign:"center"}}>Busque por um usuário</h2>
      <H3>Conheça seus melhores repositórios</H3>
      <SearchBar>
        <div>
          <input 
            type="text" 
            name="user" 
            placeholder="Digite o nome do usuário" 
            onInput = {(e)=>{setUser(e.currentTarget.value)}}
          />
          <SearchButton onClick = {() => {getuser(user)}}><CiSearch size={20}/></SearchButton>
        </div>
      </SearchBar>
    </CommonSection>
  )
}

export default Search