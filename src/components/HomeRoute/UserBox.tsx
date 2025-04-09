import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import styled from "styled-components"

import { CommonSection } from "../CommonSection.tsx";
import FollowDisplayer from "./FollowDisplayer.tsx";
import { UserType } from "../../Types.ts";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center
`
const Image = styled.img`
  width:100px;
  border-radius:50%;
  border: 4px solid var(--customPurple);
`
const H2 = styled.h2`
  text-align: center;
  margin: 20px 0
`
const H3 = styled.h3`
  text-align: center;
  vertical-align: center;
  color: var(--headColor);
  margin: 0;
`

const NavLink = styled(Link)`
  padding: 15px;
  border-radius: 5px;
  background-color: var(--customPurple);
  text-decoration: none;
`

const FollowSection = styled.section`
  margin: 20px 0;
  columns: 2;
  column-gap: 20px;
  column-rule: 1px solid white;
`

type BoxProps = {
  user: UserType
}

function UserBox({user}:BoxProps) {

  return (
    <CommonSection>
    <Box>
        <ImageContainer>
          <Image src={user.avatar_url}/>
        </ImageContainer>
        <H2>{user.login}</H2>
        <H3>
          <MdLocationPin style={{fill: "var(--customCyan)"}}/>
          {user.location}
        </H3>
        <FollowSection>
          <FollowDisplayer follow={user.followers}>Seguidores</FollowDisplayer>
          <FollowDisplayer follow={user.following}>Seguindo</FollowDisplayer>
        </FollowSection>
        <NavLink to={"/repos"}>Ver melhores Projetos</NavLink>
      </Box>
    </CommonSection>
  )

}

export default UserBox