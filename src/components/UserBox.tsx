import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import styled from "styled-components"

import CommonSection from "./Container.tsx";
import { UserType } from "../Types.ts"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;


  --customCyan: rgb(0, 204, 204);
  --customPurple: rgb(127, 76, 230)
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

const FollowSection = styled.section`
  margin: 20px 0;
  columns: 2;
  column-rule: 2px solid white;
`

const NavLink = styled(Link)`
  padding: 15px;
  border-radius: 5px;
  background-color: var(--customPurple);
  text-decoration: none;
`

type BoxProps = {
  props: UserType
}

function UserBox({props}:BoxProps) {

  return (
    <CommonSection>
    <Box>
        <ImageContainer>
          <Image src={props.avatar_url}/>
        </ImageContainer>
        <H2>{props.login}</H2>
        <H3>
          <MdLocationPin style={{fill: "var(--customCyan)"}}/>
          location:{props.location}
        </H3>
        <FollowSection>
          <p>seguidores: <span>{props.followers}</span></p>
          <p>seguindo: <span>{props.following}</span></p>
        </FollowSection>
        <NavLink to={""}>Ver melhores Projetos</NavLink>
      </Box>
    </CommonSection>
  )

}

export default UserBox