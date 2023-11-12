import React from "react"

// import components
import Club_Members_MemberInfo from "../../Component/Club/Club_Members_MemberInfo"
import Club_Members_Members from "./Club_Members_Members"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, memberListAtom } from "../../../recoil/ClubAtom"
import { managerPageAtom, memberPageAtom, clubMemberListAtom } from "../../../recoil/NavAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Span } from "../../../style/common"
import { StyleSheetContext } from "styled-components"

// import image
import { ReactComponent as Left } from "../../../image/angle-left2.svg"
import { ReactComponent as Right } from "../../../image/angle-right2.svg"


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
    const clubMemberList = useRecoilState(clubMemberListAtom)
    const presidentList = clubMemberList[0].filter(member => member.position == "PRESIDENT")
    const managerList = clubMemberList[0].filter(member => member.position == "MANAGER")
    const memberList = clubMemberList[0].filter(member => member.position == "MEMBER")

    const [managerpage, setManagerpage] = useRecoilState(managerPageAtom)
    const [memberpage, setMemberpage] = useRecoilState(memberPageAtom)

    return (
        <React.Fragment>

            <Section>
                <Flexdiv height="30px" margin="0 0 20px 0" flex="0_0_auto_row_flex-start_center">
                    <H1>동아리 회원 조회</H1>
                </Flexdiv>

                <Flexdiv width="800px" height="960px" padding="29px" radius="10px" border="1px solid #C4C4C4">
                    {/* 회장 block */}
                    <Flexdiv width="800px" height="140px" flex="0_0_auto_column_flex-start_center">
                        <Flexdiv width="800px" height="30px" margin="0 0 10px 0" flex="0_0_auto_row_space-between_center">
                            <H2 color={"#" + club[0].themeColor}>회장</H2>
                        </Flexdiv>
                        <Flexdiv width="825px" height="90px" margin="0 0 10px 0" flex="0_0_auto_row_flex-start_center">
                            {presidentList.map((elem) => <Club_Members_MemberInfo elem={elem} />)}
                        </Flexdiv>
                    </Flexdiv>

                    {/* 운영진 block */}
                    <Club_Members_Members allDataList={managerList} membersname="운영진" perPage="6" page={managerpage} setPage={setManagerpage} />
                    {/* <Flexdiv width="800px" height="230px" padding="10px 0 0 0" customBorder="1px_0_0_0_solid_#C4C4C4" flex="0_0_auto_column_flex-start_center">
                        <Flexdiv width="800px" height="30px" margin="0 0 10px 0" flex="0_0_auto_row_space-between_center">
                            <H2 color={"#" + club[0].themeColor}>운영진</H2>
                            <Flexdiv width="100px" height="30px" flex="0_0_auto_raw_space-between_center">
                                <Left width="16px" height="16px" fill={"#" + club[0].themeColor} />
                                <Span font="16px_400_'Noto Sans KR', sans-serif">1 / 1</Span>
                                <Right width="16px" height="16px" fill={"#" + club[0].themeColor} />
                            </Flexdiv>
                        </Flexdiv>
                        <Flexdiv width="825px" height="180px" margin="0 0 10px 0" flex="0_0_auto_row_flex-start_flex-start_wrap">
                            {managerList.map((elem) => <Club_Members_MemberInfo elem={elem} />)}
                        </Flexdiv>
                    </Flexdiv> */}

                    {/* 동아리원 block */}
                    <Club_Members_Members allDataList={memberList} membersname="동아리원" perPage="18" page={memberpage} setPage={setMemberpage} />
                    {/* <Flexdiv width="800px" padding="10px 0 0 0" customBorder="1px_0_0_0_solid_#C4C4C4" flex="0_0_auto_column_flex-start_center">
                        <Flexdiv width="800px" height="30px" margin="0 0 10px 0" flex="0_0_auto_row_space-between_center">
                            <H2 color={"#" + club[0].themeColor}>동아리원</H2>
                            <Flexdiv width="100px" height="30px" flex="0_0_auto_raw_space-between_center">
                                <Left width="16px" height="16px" fill={"#" + club[0].themeColor} />
                                <Span font="16px_400_'Noto Sans KR', sans-serif">1 / 1</Span>
                                <Right width="16px" height="16px" fill={"#" + club[0].themeColor} />
                            </Flexdiv>
                        </Flexdiv>
                        <Flexdiv width="825px" height="180px" margin="0 0 10px 0" flex="0_0_auto_row_flex-start_flex-start_wrap">
                            {memberList.map((elem) => <Club_Members_MemberInfo elem={elem} />)}
                        </Flexdiv>
                    </Flexdiv> */}
                </Flexdiv>
            </Section>
        </React.Fragment>
    )
}

export default Club_Members_Section