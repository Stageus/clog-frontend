import React from "react"

//styled-components 
import { Flexdiv, Flexinput, Img, Span } from "../../../style/common"
import styled from "styled-components"

const BoxTitle = styled(Flexdiv)`
    border-bottom: 1px solid #dadada;
`

const ProfileBox = styled(Flexdiv)`
    position: relative;
    bottom: 680px;
    left: 250px;
`

const Nav_ProfileEdit = () => {
    return (
        <React.Fragment>
            <ProfileBox width="480px" height="250px" radius="10px" outline="1px solid #dadada" backgroundColor='#ffffff'>
                <BoxTitle flex="0_0_auto_row_space-between_center" width="100%" height="40px" margin="10px 0">
                    <Span flex="0_0_auto" margin="0 0 0 20px">프로필 설정</Span>
                </BoxTitle>
                <Flexdiv flex="0_0_auto_column_flex-start_center" width="480px" height="210px">
                    <Flexdiv flex="0_0_auto_row_flex-start_center" width="430px" height="50px" radius="10px" outline="1px solid #dadada" margin="5px 0px">
                        <Img flex="0_0_auto" src={require("../../../image/user.svg").default} width="24px" height="24px" margin="13px" />
                        <Flexinput flex="0_0_auto" type="text" placeholder="이름" width="380px" height="50px" color="#dadada" />
                    </Flexdiv>
                    <Flexdiv flex="0_0_auto_row_flex-start_center" width="430px" height="50px" radius="10px" outline="1px solid #dadada" margin="5px 0px">
                        <Img flex="0_0_auto" src={require("../../../image/book-bookmark.svg").default} width="24px" height="24px" margin="13px" />
                        <Flexinput flex="0_0_auto" type="text" placeholder="학과" width="380px" height="50px" color="#dadada" />
                    </Flexdiv>
                    <Flexdiv flex="0_0_auto_row_flex-end_center" width="430px" margin="20px 0 0 0">
                        <Flexdiv flex="0_0_auto_row_center_center" width="220px" height="40px" outline="2px solid #333333" radius="10px" margin="0 5px 0 0">
                            <Span flex="0_0_auto" padding="0 17px">비밀번호 재설정 이동</Span>
                            <Img flex="0_0_auto" src={require("../../../image/right-arrow.png")} width="30px" />
                        </Flexdiv>
                        <Flexinput type="button" value="저장" width="50px" height="40px" radius="10px" backgroundColor="#333333" color="#ffffff" />
                    </Flexdiv>
                </Flexdiv>
            </ProfileBox>
        </React.Fragment>
    )
}

export default Nav_ProfileEdit