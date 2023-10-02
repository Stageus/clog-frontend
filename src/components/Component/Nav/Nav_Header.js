import React from "react"
import styled from "styled-components"
import { Flexdiv, Flexinput, Img, Span } from "../../style/common"


const Nav_Header = () => {
    return (
        <div>
            <Flexinput type="button" value="- - -" />
            <input type="button" value="클로그 로고" />
        </div>
    )
}

export default Nav_Header