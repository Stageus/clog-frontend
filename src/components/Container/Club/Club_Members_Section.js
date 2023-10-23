import React from "react"

// import components
import Club_ClubProfileBox from "./Club_ClubProfileBox"
import Club_BoardList from "./Club_BoardList"
import Club_Members_MemberInfo from "../../Component/Club/Club_Members_MemberInfo"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, memberListAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexdiv } from "../../../style/common"
import { StyleSheetContext } from "styled-components"

// import image

const Main = styled.main`
    width : 1080px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const Section = styled.section`
    width: 860px;
    margin-bottom: 150px;
`

const H1 = styled.h1`
    margin: 0px;
    padding: 0px;
    font-size: 24px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 800;
    color: #000000;
`

const H2 = styled.h2`
    margin: 0px;
    padding: 0px;
    font-size: 20px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 800;
    color: ${props => props.color};
`


const Club_Members_Section = () => {
	// route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)
    const clubMemberList = useRecoilState(memberListAtom)
    const presidentList = clubMemberList[0].filter(member => member.position == "PRESIDENT")
    const managerList = clubMemberList[0].filter(member => member.position == "MANAGER")
    const mamberList  = clubMemberList[0].filter(member => member.position == "MANAGER")

    console.log("회장")
    console.log(presidentList)
    console.log("운영자")
    console.log(managerList)
    console.log("회원")
    console.log(mamberList)
    // event ============================================================


    return(
        <React.Fragment>
            <Flexdiv flex="0_0_auto_row_center_flex-start" position="relative_70px" cursor="default">
                <Main>
                    <Club_BoardList/>

                    {/* 여기서부터 main section */}
                    <Section>
                        <Flexdiv height="30px" margin="0 0 20px 0" flex="0_0_auto_raw_flex-start_center">
                            <H1>동아리 회원 조회</H1>
                        </Flexdiv>

                        <Flexdiv width="800px" height="960px" padding="29px" radius="10px" border="1px solid #C4C4C4">
                            {/* 회장 block */}
                            <Flexdiv width="800px" height="140px" customBorder="0_0_1px_0_solid_#C4C4C4" flex="0_0_auto_column_flex-start_start">
                                <Flexdiv width="800px" height="30px" margin="0 0 10px 0" flex="0_0_auto_raw_space-between_center">
                                    <H2 color={"#" + club[0].themeColor}>회장</H2>
                                </Flexdiv>
                                <Flexdiv width="800px" height="90px" margin="0 0 10px 0" flex="0_0_auto_raw_flex-start_center">
                                    { presidentList.map((elem) => <Club_Members_MemberInfo elem={elem}/>) }
                                </Flexdiv>
                            </Flexdiv>
                        </Flexdiv>
                    </Section>
                </Main>
            </Flexdiv>

        </React.Fragment>
    )
}

export default Club_Members_Section