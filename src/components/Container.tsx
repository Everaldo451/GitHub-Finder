import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Section = styled.div`
    width: 50%;
    padding: 20px;
    border-radius: 15px;
    background-color: rgb(59, 59, 120);
`


interface CommonSectionProps {
    children: React.ReactNode
}

export default function CommonSection({children}:CommonSectionProps) {
    return (
        <Container>
            <Section>
                {children}
            </Section>
        </Container>
    )
}