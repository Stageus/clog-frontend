import React from "react"
import { useNavigate } from "react-router-dom"

// import components

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Flexinput, Span } from "../../../style/common"

// import image
import { ReactComponent as Menu } from "../../../image/menu-burger.svg"
import { ReactComponent as Chat } from "../../../image/messages.svg"
import { ReactComponent as Clog } from "../../../image/Clog_logo.svg"
import { ReactComponent as Search } from "../../../image/search.svg"
import { ReactComponent as Title } from "../../../image/document.svg"
import { ReactComponent as Writer } from "../../../image/file-user.svg"

const Header = styled.header`
    width : 100%;
    display : flex;
    justify-content : space-between;
    position : fixed;
    z-index: 1;
`

const HeaderButton = styled(Flexbutton)`
    border: 1px solid #C4C4C4;
    width: 48px;
    height: 48px;
    border-radius: 10px;
    margin: 10px;
    background-color: #FFFFFF;
    justify-content: center;
`


const Club_Header = () => {
    // route ============================================================
    const navigate = useNavigate()
    const mainRoute = () => navigate("/club/main")

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)   // 동아리에 대한 정보 가져오는 Atom
    const [searchState, setSearchState] = React.useState(true)    // 검색창의 검색 필터에 대한 State

    // event ============================================================
    const clickEvent = (e) => {
        let id = e.target.id
        if (id == "search_filter") {
            setSearchState(!searchState)
        }
    }
    

    return(
        <React.Fragment>
            <Header>
                {/* nav 버튼 */}
                <HeaderButton type="button" flex="0_0_auto_row_center_center" >
                    <Menu width="24px" height="24px" fill={"#" + club[0].themeColor}/>
                </HeaderButton>

                {/* 가운데 부분 */}
                <Flexdiv flex="0_0_auto_row_space-between_center" width="1080px" cursor="default" backgroundColor="#FFFFFF">
                    {/* 가운데 좌측, 동아리로고 부분 */}
                    <Flexdiv flex="0_0_auto_row_flex-start_center" onClick={mainRoute}>
                        <Flexdiv flex="0_0_auto_row_center_center" width="75px" height="70px">
                            <Clog height="40px" fill={"#" + club[0].themeColor}/>
                        </Flexdiv>
                        <Span fontFamily="'Noto Sans KR', sans-serif" fontSize="36px" fontBold="800" color={"#" + club[0].themeColor}>{club[0].name}</Span>
                    </Flexdiv>
                    
                    {/* 가운데 우측, 동아리 내 검색바 */}
                    <Flexdiv flex="0_0_auto_row_flex-end_center" width="538px" height="52px" radius="27px" border={"1px solid #" + club[0].themeColor} cursor="default">
                        
                        {/* 검색 필터 */}
                        { searchState ?
                            <Flexdiv flex="0_0_auto_row_flex-start_center" width="486px" cursor="default">
                                <Flexbutton onClick={clickEvent} type="button" flex="0_0_auto_row_center_center" width="52px" height="52px" radius="26px" backgroundColor="#FFFFFF" cursor="default">
                                    <Title id="search_filter" width="24px" height="24px" fill="#C4C4C4" cursor="pointer"/>
                                </Flexbutton>
                                <Flexinput width="429px" height="50px" placeholder="게시물 제목으로 게시글 검색" fontSize="20px" fontFamily="'Noto Sans KR', sans-serif" cursor="text"/>
                            </Flexdiv>
                            :
                            <Flexdiv flex="0_0_auto_row_flex-start_center" width="486px">
                                <Flexbutton onClick={clickEvent} type="button" flex="0_0_auto_row_center_center" width="52px" height="52px" radius="26px" backgroundColor="#FFFFFF" cursor="default">
                                    <Writer id="search_filter" width="24px" height="24px" fill="#C4C4C4" cursor="pointer"/>
                                </Flexbutton>
                                <Flexinput width="429px" height="50px" placeholder="작성자 이름으로 게시글 검색" fontSize="20px" fontFamily="'Noto Sans KR', sans-serif" cursor="text"/>
                            </Flexdiv>
                        }

                        {/* 검색 버튼 */}
                        <Flexbutton type="button" flex="0_0_auto_row_center_center" width="52px" height="52px" radius="26px" backgroundColor="#FFFFFF">
                            <Search width="24px" height="24px" fill={"#" + club[0].themeColor}/>
                        </Flexbutton>
                    </Flexdiv>
                </Flexdiv>

                {/* chat 버튼 */}
                <HeaderButton type="button" flex="0_0_auto_row_center_center" color={"#" + club.themeColor}>
                    <Chat width="24px" height="24px" fill={"#" + club[0].themeColor}/>
                </HeaderButton>
            </Header>
        </React.Fragment>
    )
}

export default Club_Header