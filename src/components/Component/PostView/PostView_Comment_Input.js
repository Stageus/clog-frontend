import React from "react"
import { useRef } from "react"

// Container,Component


//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span, Textarea } from "../../../style/common"
import styled from "styled-components"
//svg

// recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom } from "../../../recoil/ClubAtom"

//router
import { Link, useNavigate } from 'react-router-dom'

const CommentDiv = styled(Flexdiv)`
    border-top: 1px solid #aaaaaa;
`
const Postview_Comment_Input = (props) => {
    // props ======================================================
    const { where, manage, user, club } = props

    // state ======================================================
    let nameColor
    if(manage == true) {
        nameColor = club.themeColor
    }
    else {
        nameColor = "000000"
    }
    
    // event ======================================================

    // 프로필이미지 색깔에 따른 이름 색깔 변경 함수
    const setTextColorByBackgroundColor = (hexColor) => {
        // const c = hexColor.substring(1)      // 색상 앞의 # 제거
        const rgb = parseInt(hexColor, 16)   // rrggbb를 10진수로 변환
        const r = (rgb >> 16) & 0xff  // red 추출
        const g = (rgb >> 8) & 0xff  // green 추출
        const b = (rgb >> 0) & 0xff  // blue 추출
        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
        // 색상 선택
        return luma < 127.5 ? "#ffffff" : "#000000" // 글자색이
    }


    return (
        <React.Fragment>

                <Flexdiv flex="0_1_auto_row_center_flex-start" width={(where == "promote") ? "860px" : "800px"} margin="10px 0 10px 0">

                    {/* 프로필이미지 */}
                    { where == "promote" ?
                        <Flexdiv flex="0_1_auto_row_flex-start_flex-start" width="50px">
                            <Img width="40px" radius="50%" src={require("../../../image/user.png")} />
                        </Flexdiv>
                        :
                        <Flexdiv flex="0_1_auto_row_flex-start_flex-start" width="50px">
                            <Flexdiv flex="0_0_auto_raw_center_center" width="40px" height="40px" radius="20px" backgroundColor={"#" + user.personalColor} color={setTextColorByBackgroundColor(user.personalColor)} font="12px_400_'Noto Sans KR', sans-serif" margin="0 10px 0 0">{user.name}</Flexdiv>
                        </Flexdiv>
                    }

                    {/* 댓글입력란 */}
                    <Flexdiv flex="2_1_auto_column_flex-start-center" backgroundColor="#f0f0f0" radius="10px" padding="10px">

                        {/* 댓글 작성자 이름 */}
                        { where == "promote" ?
                            <Flexdiv flex="0_1_auto" font="15px_600_'Noto Sans KR', sans-serif" margin="0 0 5px 0">익명</Flexdiv>
                            :
                            <Flexdiv flex="0_0_auto" margin="0 0 5px 0" font="15px_600_'Noto Sans KR', sans-serif" color={"#" + nameColor}> {user.name} </Flexdiv>
                        }

                        {/* 댓글 입력 */}
                        <Textarea id="commentinput" height="50px" flex="0_0_auto" margin="0 0 5px 0" type="text" font="14px_400_'Nanum Gothic', sans-serif" placeholder="댓글을 입력하세요..." backgroundColor="#f0f0f0"></Textarea>
                        
                        {/* 등록버튼 */}
                        <Flexdiv flex="0_0_auto_row_flex-end_center">
                            <Flexbutton id="commentsummit" flex="0_0_auto" color="#A0A0A0" backgroundColor="#f0f0f0" font="14px_600_'Noto Sans KR', sans-serif">등록</Flexbutton>
                        </Flexdiv>
                    </Flexdiv>
                </Flexdiv>

        </React.Fragment>
    )
}

export default Postview_Comment_Input