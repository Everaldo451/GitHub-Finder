import styled from "styled-components"

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > *:nth-child(n+2) {
        margin-top: 20px;
    }
`

export default function Container({children}:{children:React.ReactNode}) {
    return (
        <ContainerDiv>
            {children}
        </ContainerDiv>
    )
}


