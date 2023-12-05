import React from "react"

// import components
import Club_Board_Notice from "../../Component/Club/Club_Board_Notice"
import Club_Board_Post from "../../Component/Club/Club_Board_Post"
import PostView_Comment from "../../Component/PostView/PostView_Comment"

// import recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { clubInfoAtom, postViewAtom } from "../../../recoil/ClubAtom"

// import styled
import styled from "styled-components"
import { Flexbutton, Flexdiv, Span, Img } from "../../../style/common"
import { StyleSheetContext } from "styled-components"

// import image

const Section = styled.section`
    width: 798px;
    padding: 30px;
    margin-bottom: 150px;
    border: 1px solid #C4C4C4;
    border-radius: 10px;
`

const H1 = styled.h1`
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    font-size: ${props => props.fontSize || "28px"};
    font-family: ${props => props.fontFamily || "'Noto Sans KR', sans-serif"};
    font-weight: ${props => props.fontBold || "800"};
    color: ${props => props.color || "#000000"};
`

const P = styled.p`
    margin: ${props => props.margin || "0"};
    padding: ${props => props.padding || "0"};
    font-size: ${props => props.fontSize || "16px"};
    font-family: ${props => props.fontFamily || "'Nanum Gothic', sans-serif"};
    font-weight: ${props => props.fontBold || "400"};
    color: ${props => props.color || "#000000"};
`

const PostImg = styled(Img)`
    max-width: 100%;
    height: auto;
`

const Club_PostView_Section = () => {
	// route ============================================================

    // props ============================================================

    // state ============================================================
    const club = useRecoilState(clubInfoAtom)
    const post = useRecoilState(postViewAtom)

    // event ============================================================
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
    const nameColor = setTextColorByBackgroundColor(post[0].authorPcolor)

    let contentList = post[0].postContent.split("\n")

    return(
        <React.Fragment>
            
            <Section>
                {/* 상단부 : 게시판, 제목, 작성자 정보 */}
                <Flexdiv padding="0 0 30px 0" customBorder="0_0_1px_0_solid_#C4C4C4">
                    {/* 게시판 이름과 글 제목 */}
                    <Flexdiv margin="0 0 10px 0">
                        <Span margin="0 0 10px 0" font="14px_400_'Noto Sans KR', sans-serif" color={"#" + club[0].themeColor}>{post[0].boardName}</Span>
                        <H1>{post[0].postTitle}</H1>
                    </Flexdiv>

                    <Flexdiv flex="0_0_auto_raw_space-between_flex-end">
                        {/* 작성자 정보 */}
                        <Flexdiv flex="0_0_auto_raw" height="40px">
                            <Flexdiv flex="0_0_auto_raw_center_center" width="40px" height="40px" radius="20px" backgroundColor={"#" + post[0].authorPcolor} color={nameColor} font="12px_400_'Noto Sans KR', sans-serif" margin="0 10px 0 0">{post[0].authorName}</Flexdiv>
                            <Flexdiv flex="0_0_auto_column_space-around_flex-start">
                                <Span font="14px_400_'Nanum Gothic', sans-serif">{post[0].authorName}</Span>
                                <Span font="14px_400_'Nanum Gothic', sans-serif" color="#C4C4C4">{post[0].createdAt}</Span>
                            </Flexdiv>
                        </Flexdiv>
                        
                        {/* 수정, 삭제 버튼 */}
                        { post[0].manageState == true &&
                            <Flexdiv>
                                <Flexbutton width="40px" height="20px" font="14px_400_'Nanum Gothic', sans-serif" color="#C4C4C4">수정</Flexbutton>
                                <Flexbutton width="40px" height="20px" font="14px_400_'Nanum Gothic', sans-serif" color="#C4C4C4">삭제</Flexbutton>
                            </Flexdiv>
                        }
                    </Flexdiv>
                </Flexdiv>

                {/* 중단부 : 게시글 내용 */}
                <Flexdiv padding="0 0 30px 0" customBorder="0_0_1px_0_solid_#C4C4C4">
                    <P padding="20px 0 0 0">
                        {contentList.map((elem) => 
                            <P flex="0_1_auto" textAlign="left" width="810px" height="20px" margin="4px 0">{elem}</P>
                        )}
                    </P>
                    <P padding="20px 0 0 0">
                        <Flexdiv flex="0_1_auto_column_flex-start-center">
                            {post[0].postImages.map((elem) => <PostImg margin="0 0 10px 0" src={elem} />)}
                        </Flexdiv>
                    </P>
                </Flexdiv>
                
                {/* 하단부 : 게시글에 달린 댓글 */}
                <Flexdiv>
                    <PostView_Comment />
                </Flexdiv>

            </Section>

        </React.Fragment>
    )
}

export default Club_PostView_Section
