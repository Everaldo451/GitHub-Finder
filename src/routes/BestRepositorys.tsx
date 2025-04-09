import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";

import Container from "../components/Container";
import RepositoryListener from "../components/RepositoryRoute/RepositoryListener";
import { RepositoryType } from "../Types";

const H3 = styled.h3`
    text-align: center;
`

export default function BestRepositorys() {
    const [user, _] = useContext(UserContext)
    const [repositories, setRepositories] = useState<RepositoryType[]>([])

    if (!user) {
        return <Navigate to={"/"}/>
    }

    async function fetchRepositories() {
        const response = await fetch(`https://api.github.com/users/${user?.login}/repos`)
        const json = await response.json()
        if (json && json satisfies RepositoryType[]) {
            const repos:RepositoryType[] = json
            setRepositories(repos.sort((a, b) => a.watchers - b.watchers).slice(0,5))
        }
    }

    useEffect(() => {
        fetchRepositories()
    },[])

    return (
        <>
        <H3>Explore os repositórios do usuário: {user.login}</H3>
        <Container>
            <RepositoryListener repositories={repositories}></RepositoryListener>
        </Container>
        </>
    )

}