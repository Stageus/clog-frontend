import React from "react"

// Container,Component


//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"
//svg
import { ReactComponent as Svgphoto } from "../../../image/picture.svg"
//router
import { Link, useNavigate } from 'react-router-dom'

const HiddenImg = styled(Flexdiv)`
    overflow: scroll;
`

const PostView_Image = (props) => {
    // props ======================================================
    const { prPostView } = props
    // state ======================================================

    // event ======================================================

    return (
        <React.Fragment>
            {/* 사진 가로스크롤 */}
            <HiddenImg flex="0_1_auto_row_flex-start_center" width="860px" height="300px" backgroundColor="#ffffff" margin="20px 0 10px 0">
                {prPostView.promotionImages.map((elem) => <Flexdiv flex="0_1_auto_row_center_center" width="210px" height="297px" backgroundColor="#f2f2f2" >
                    <Img width="210px" src={elem} />
                </Flexdiv>)}
            </HiddenImg>

            {/* 사진 개수 */}
            <Flexdiv flex="0_1_auto_row_flex-start_center" width="860px" height="20px" margin="0 0 100px 0">
                <Flexdiv flex="0_1_auto_row_center_center"><Svgphoto width="16px" height="16px" fill="#aaaaaa" /></Flexdiv>
                <Span flex="0_1_auto" color="#aaaaaa" fontSize="12px" margin="0 0 0 5px">{prPostView.promotionImages.length}</Span>
            </Flexdiv>
        </React.Fragment>
    )
}

export default PostView_Image