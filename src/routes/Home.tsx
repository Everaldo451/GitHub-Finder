import { useContext } from "react"
import Search from "../components/HomeRoute/Search.tsx"
import UserBox from "../components/HomeRoute/UserBox.tsx"
import Container from "../components/Container.tsx"

import { UserContext } from "../contexts/UserContext.tsx"
import { UserType } from "../Types.ts"


function Home() {
  const [user, setUser] = useContext(UserContext)
  
  async function getuser(user:string) {
    const response = await fetch(`https://api.github.com/users/${user}`)
    const json = await response.json()
    if (json && json.login && json satisfies UserType) {
      const usertb = {
        avatar_url: json.avatar_url,
        login: json.login,
        location: json.location,
        followers: json.followers,
        following: json.following
      }

      setUser(usertb)
    } else {setUser(null)}
  }

  return (
    <Container>
      <Search getuser={getuser}/>
      {user?
        <UserBox user={user}/>
        :<h4>Usuário não encontrado</h4>
      }
    </Container>
  )
}

export default Home