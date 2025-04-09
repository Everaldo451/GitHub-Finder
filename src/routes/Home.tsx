import {useState} from "react"
import Search from "../components/Search"
import UserBox from "../components/UserBox"
import { UserType } from "../Types.ts"


function Home() {

  const [user,setUser] = useState<UserType|null>(null)
  
  async function getuser(user:string) {
    const response = await fetch(`https://api.github.com/users/${user}`)
    const json = await response.json()
    if (json.login) {

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
    <>
      <Search getuser={getuser}/>
      {user?
      <UserBox props={user}/>
      :null}
    </>
  )
}

export default Home