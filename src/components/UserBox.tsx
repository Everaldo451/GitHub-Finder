import styled from "styled-components"
import UserType from "../Types.ts"

const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  div {
    display: flex;
    justify-content: center
  }

  img{
    width:100px;
    border-radius:50%;
  }

  span {color:orange}
`;

const Section = styled.section`
  width: 70%;
  border: 2px solid black;
  border-radius: 20px;
  padding: 20px;
`;


type BoxProps = {
  props: UserType
}

function UserBox({props}:BoxProps) {

  return (
    <Box>
      <Section>
      <div>
        <img src={props.avatar_url}/>
      </div>
      <p>username: <span>{props.login}</span></p>
      <p>location: <span>{props.location}</span></p>
      <p>seguidores: <span>{props.followers}</span></p>
      <p>seguindo: <span>{props.following}</span></p>
      </Section>
    </Box>
  )

}

export default UserBox