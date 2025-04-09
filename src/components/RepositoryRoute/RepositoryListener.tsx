import Repository from "./Repository";
import { CommonSection } from "../CommonSection";
import { RepositoryType } from "../../Types";
import styled from "styled-components";

const CustomSection = styled(CommonSection)`
    & > *:nth-child(n+2) {
        margin-top: 20px;
    }
`

const UL = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;

    & > *:nth-child(n+2) {
        margin-top: 20px;
    }
`

export default function RepositoryListener({repositories}:{repositories:RepositoryType[]}) {
    return (
        <CustomSection>
            <UL>
                {repositories.map(
                    value => <li><Repository repositoryData={value}/></li>
                )}
            </UL>
        </CustomSection>
    )
}