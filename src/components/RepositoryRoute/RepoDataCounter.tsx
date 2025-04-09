import styled from "styled-components"

interface RepoDataProps{
    image: JSX.Element,
    counter: number
}

const Div = styled.div`
    display: flex;
    border-radius: 5px;
    border: 1px solid gray;
`
const Span = styled.span`
    margin: auto 5px;
`

export default function RepoDataCounter({image, counter}: RepoDataProps) {
    return (
        <Div>
            {image}
            <Span>{counter}</Span>
        </Div>
    )
}