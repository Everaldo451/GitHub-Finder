import styled from "styled-components"

interface FollowDisplayerProps {
    children: React.ReactNode,
    follow: number
}

const FollowNumber = styled.span`
    padding: 5px;
    background-color: var(--customCyan);
    text-align: center
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const H4 = styled.h4`
    text-align: center;
    margin: 0 0 5px 0;
    font-weight: normal;
`

export default function FollowDisplayer({children, follow}:FollowDisplayerProps) {
    return (
        <Container>
            <H4>{children}</H4>
            <FollowNumber>{follow}</FollowNumber>
        </Container>
    )
}