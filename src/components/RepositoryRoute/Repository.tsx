import { FaCode, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import RepoDataCounter from "./RepoDataCounter";
import styled from "styled-components";
import { RepositoryType } from "../../Types";

const RepositorySection = styled.section`
    background-color: black;
    padding: 15px;
    border: 2px solid gray;
    border-radius: 10px;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const Div2 = styled(Div)`
    margin-top: 15px;
    gap: 10px;
`
const Anchor = styled.a`
    display: inline-block;
    padding: 10px;
    margin-top: 15px;
    border-radius: 5px;
    background-color: 	rgb(49, 49, 100);
    text-decoration: none;
`

const IconContainer = styled.div`
    display: flex;
    padding: 7px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: var(--customCyan)
`

export default function Repository({repositoryData}:{repositoryData:RepositoryType}) {
    return (
        <RepositorySection>
            <h3>{repositoryData.name}</h3>
            <Div>
                <FaCode size={20} style={{fill:"gray"}}/>
                <span>{repositoryData.language}</span>
            </Div>
            <Div2>
                <RepoDataCounter 
                    image={<IconContainer><FaRegStar size={15}/></IconContainer>}
                    counter={repositoryData.watchers}
                />
                <RepoDataCounter 
                    image={<IconContainer><FaCodeFork size={15}/></IconContainer>}
                    counter={repositoryData.forks}
                />
            </Div2>
            <Anchor href={repositoryData.html_url} target="_blank">Ver Código</Anchor>
        </RepositorySection>
    )
}