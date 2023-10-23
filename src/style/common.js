import styled, { css } from "styled-components"


const setFlex = (flex) => {
    let flexList = flex.split("_")
    return flexList
}
const setPosition = (position) => {
    let positionList = position.split("_")
    return positionList
}
const setFont = (font) => {
    let fontList = font.split("_")
    return fontList
}
const setBorder = (customBorder) => {
    let customBorderList = customBorder.split("_")
    return customBorderList
}
const setTextOver = (textOver) => {
    let textOverList = textOver.split("_")
    return textOverList
}

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

//div
export const Flexdiv = styled.div`

    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "0px"};
    border-radius: ${props => props.radius || "0px"};

    border: ${props => props.border};
    outline: ${props => props.outline};

    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    opacity: ${props => props.opacity};

    text-align:${props => props.textAlign};
    cursor: ${props => props.cursor};

    ${props => props.flex && css`
        ${setFlex(props.flex)};
        display: flex;
        flex-grow : ${setFlex(props.flex)[0]};
        flex-shrink: ${setFlex(props.flex)[1]};
        flex-basis: ${setFlex(props.flex)[2]};
        flex-direction: ${setFlex(props.flex)[3]};
        justify-content: ${setFlex(props.flex)[4]};
        align-items: ${setFlex(props.flex)[5]};
        flex-wrap: ${setFlex(props.flex)[6]};
    `}
    ${props => props.position && css`
        ${setPosition(props.position)};
        position : ${setPosition(props.position)[0]};
        top : ${setPosition(props.position)[1]};
        right : ${setPosition(props.position)[2]};
        bottom : ${setPosition(props.position)[3]};
        left : ${setPosition(props.position)[4]};
    `}
    ${props => props.font && css`
        ${setFont(props.font)};
        font-size : ${setFont(props.font)[0]};
        font-weight : ${setFont(props.font)[1]};
        font-family : ${setFont(props.font)[2]};
        font-style : ${setFont(props.font)[3]};
        line-height : ${setFont(props.font)[4]};
    `}
    ${props => props.customBorder && css`
        ${setBorder(props.customBorder)};
        border-top-width : ${setBorder(props.customBorder)[0]};
        border-right-width : ${setBorder(props.customBorder)[1]};
        border-bottom-width : ${setBorder(props.customBorder)[2]};
        border-left-width : ${setBorder(props.customBorder)[3]};
        border-style : ${setBorder(props.customBorder)[4]};
        border-color : ${setBorder(props.customBorder)[5]};
    `}
    ${props => props.textOver && css`
        ${setTextOver(props.textOver)};
        overflow : ${setTextOver(props.textOver)[0]};
        white-space : ${setTextOver(props.textOver)[1]};
        text-overflow : ${setTextOver(props.textOver)[2]};
        -webkit-line-clamp : ${setTextOver(props.textOver)[3] || "1"};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: keep-all;
    `}

    font-size: ${props => props.fontSize};
    border-top: ${props => props.borderTop};
`

//button
export const Flexbutton = styled.button`

    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "0px"};
    border-radius: ${props => props.radius || "0px"};

    border:${props => props.border || "0px"};
    outline: ${props => props.outline};

    color: ${props => props.color};
    background-color: ${props => props.backgroundColor || "#ffffff"};
    opacity: ${props => props.opacity};

    text-align:${props => props.textAlign};
    cursor: ${props => props.cursor || "pointer"};

    ${props => props.flex && css`
        ${setFlex(props.flex)};
        display: flex;
        flex-grow : ${setFlex(props.flex)[0]};
        flex-shrink: ${setFlex(props.flex)[1]};
        flex-basis: ${setFlex(props.flex)[2]};
        flex-direction: ${setFlex(props.flex)[3]};
        justify-content: ${setFlex(props.flex)[4]};
        align-items: ${setFlex(props.flex)[5]};
        flex-wrap: ${setFlex(props.flex)[6]};
    `}
    ${props => props.position && css`
        ${setPosition(props.position)};
        position : ${setPosition(props.position)[0]};
        top : ${setPosition(props.position)[1]};
        right : ${setPosition(props.position)[2]};
        bottom : ${setPosition(props.position)[3]};
        left : ${setPosition(props.position)[4]};
    `}
    ${props => props.font && css`
        ${setFont(props.font)};
        font-size : ${setFont(props.font)[0]};
        font-weight : ${setFont(props.font)[1]};
        font-family : ${setFont(props.font)[2]};
        font-style : ${setFont(props.font)[3]};
        line-height : ${setFont(props.font)[4]};
    `}
    ${props => props.customBorder && css`
        ${setBorder(props.customBorder)};
        border-top-width : ${setBorder(props.customBorder)[0]};
        border-right-width : ${setBorder(props.customBorder)[1]};
        border-bottom-width : ${setBorder(props.customBorder)[2]};
        border-left-width : ${setBorder(props.customBorder)[3]};
        border-style : ${setBorder(props.customBorder)[4]};
        border-color : ${setBorder(props.customBorder)[5]};
    `}
    ${props => props.textOver && css`
        ${setTextOver(props.textOver)};
        overflow : ${setTextOver(props.textOver)[0]};
        white-space : ${setTextOver(props.textOver)[1]};
        text-overflow : ${setTextOver(props.textOver)[2]};
        -webkit-line-clamp : ${setTextOver(props.textOver)[3] || "1"};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: keep-all;
    `}
    ${props => props.url &&
        css`
        background: url( "${props => props.url}" ) no-repeat;
        background-size: contain;
    `}
    
    font-size: ${props => props.fontSize};
    
`


//input
export const Flexinput = styled.input`

    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "0px"};
    border-radius: ${props => props.radius || "0px"};

    border:${props => props.border || "0px"};
    outline: ${props => props.outline};

    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    opacity: ${props => props.opacity};

    text-align:${props => props.textAlign};
    cursor: ${props => props.cursor};

    &:focus{
        outline: none;
    }

    ${props => props.flex && css`
        ${setFlex(props.flex)};
        display: flex;
        flex-grow : ${setFlex(props.flex)[0]};
        flex-shrink: ${setFlex(props.flex)[1]};
        flex-basis: ${setFlex(props.flex)[2]};
        flex-direction: ${setFlex(props.flex)[3]};
        justify-content: ${setFlex(props.flex)[4]};
        align-items: ${setFlex(props.flex)[5]};
        flex-wrap: ${setFlex(props.flex)[6]};
    `}
    ${props => props.position && css`
        ${setPosition(props.position)};
        position : ${setPosition(props.position)[0]};
        top : ${setPosition(props.position)[1]};
        right : ${setPosition(props.position)[2]};
        bottom : ${setPosition(props.position)[3]};
        left : ${setPosition(props.position)[4]};
    `}
    ${props => props.font && css`
        ${setFont(props.font)};
        font-size : ${setFont(props.font)[0]};
        font-weight : ${setFont(props.font)[1]};
        font-family : ${setFont(props.font)[2]};
        font-style : ${setFont(props.font)[3]};
        line-height : ${setFont(props.font)[4]};
    `}
    ${props => props.customBorder && css`
        ${setBorder(props.customBorder)};
        border-top-width : ${setBorder(props.customBorder)[0]};
        border-right-width : ${setBorder(props.customBorder)[1]};
        border-bottom-width : ${setBorder(props.customBorder)[2]};
        border-left-width : ${setBorder(props.customBorder)[3]};
        border-style : ${setBorder(props.customBorder)[4]};
        border-color : ${setBorder(props.customBorder)[5]};
    `}
    ${props => props.textOver && css`
        ${setTextOver(props.textOver)};
        overflow : ${setTextOver(props.textOver)[0]};
        white-space : ${setTextOver(props.textOver)[1]};
        text-overflow : ${setTextOver(props.textOver)[2]};
        -webkit-line-clamp : ${setTextOver(props.textOver)[3] || "1"};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: keep-all;
    `}
    ${props => props.url &&
        css`
        background: url( "${props => props.url}" ) no-repeat;
        background-size: contain;
    `}

    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontBold || "400"};
    
`

export const Img = styled.img`

    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "0px"};
    border-radius: ${props => props.radius || "0px"};

    border:${props => props.border || "0px"};
    outline: ${props => props.outline};

    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    opacity: ${props => props.opacity};

    cursor: ${props => props.cursor};

    ${props => props.flex && css`
        ${setFlex(props.flex)};
        display: flex;
        flex-grow : ${setFlex(props.flex)[0]};
        flex-shrink: ${setFlex(props.flex)[1]};
        flex-basis: ${setFlex(props.flex)[2]};
        flex-direction: ${setFlex(props.flex)[3]};
        justify-content: ${setFlex(props.flex)[4]};
        align-items: ${setFlex(props.flex)[5]};
        flex-wrap: ${setFlex(props.flex)[6]};
    `}
    ${props => props.position && css`
        ${setPosition(props.position)};
        position : ${setPosition(props.position)[0]};
        top : ${setPosition(props.position)[1]};
        right : ${setPosition(props.position)[2]};
        bottom : ${setPosition(props.position)[3]};
        left : ${setPosition(props.position)[4]};
    `}
    ${props => props.font && css`
        ${setFont(props.font)};
        font-size : ${setFont(props.font)[0]};
        font-weight : ${setFont(props.font)[1]};
        font-family : ${setFont(props.font)[2]};
        font-style : ${setFont(props.font)[3]};
        line-height : ${setFont(props.font)[4]};
    `}
    ${props => props.customBorder && css`
        ${setBorder(props.customBorder)};
        border-top-width : ${setBorder(props.customBorder)[0]};
        border-right-width : ${setBorder(props.customBorder)[1]};
        border-bottom-width : ${setBorder(props.customBorder)[2]};
        border-left-width : ${setBorder(props.customBorder)[3]};
        border-style : ${setBorder(props.customBorder)[4]};
        border-color : ${setBorder(props.customBorder)[5]};
    `}
    ${props => props.textOver && css`
        ${setTextOver(props.textOver)};
        overflow : ${setTextOver(props.textOver)[0]};
        white-space : ${setTextOver(props.textOver)[1]};
        text-overflow : ${setTextOver(props.textOver)[2]};
        -webkit-line-clamp : ${setTextOver(props.textOver)[3] || "1"};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: keep-all;
    `}

    box-sizing: border - box;

`

export const Span = styled.span`

    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "0px"};
    border-radius: ${props => props.radius || "0px"};

    border:${props => props.border};
    outline: ${props => props.outline};

    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    opacity: ${props => props.opacity};

    text-align:${props => props.textAlign};
    cursor: ${props => props.cursor || "text"};

    ${props => props.flex && css`
        ${setFlex(props.flex)};
        display: flex;
        flex-grow : ${setFlex(props.flex)[0]};
        flex-shrink: ${setFlex(props.flex)[1]};
        flex-basis: ${setFlex(props.flex)[2]};
        flex-direction: ${setFlex(props.flex)[3]};
        justify-content: ${setFlex(props.flex)[4]};
        align-items: ${setFlex(props.flex)[5]};
        flex-wrap: ${setFlex(props.flex)[6]};
    `}
    ${props => props.position && css`
        ${setPosition(props.position)};
        position : ${setPosition(props.position)[0]};
        top : ${setPosition(props.position)[1]};
        right : ${setPosition(props.position)[2]};
        bottom : ${setPosition(props.position)[3]};
        left : ${setPosition(props.position)[4]};
    `}
    ${props => props.font && css`
        ${setFont(props.font)};
        font-size : ${setFont(props.font)[0]};
        font-weight : ${setFont(props.font)[1]};
        font-family : ${setFont(props.font)[2]};
        font-style : ${setFont(props.font)[3]};
        line-height : ${setFont(props.font)[4]};
    `}
    ${props => props.customBorder && css`
        ${setBorder(props.customBorder)};
        border-top-width : ${setBorder(props.customBorder)[0]};
        border-right-width : ${setBorder(props.customBorder)[1]};
        border-bottom-width : ${setBorder(props.customBorder)[2]};
        border-left-width : ${setBorder(props.customBorder)[3]};
        border-style : ${setBorder(props.customBorder)[4]};
        border-color : ${setBorder(props.customBorder)[5]};
    `}
    ${props => props.textOver && css`
        ${setTextOver(props.textOver)};
        overflow : ${setTextOver(props.textOver)[0]};
        white-space : ${setTextOver(props.textOver)[1]};
        text-overflow : ${setTextOver(props.textOver)[2]};
        -webkit-line-clamp : ${setTextOver(props.textOver)[3] || "1"};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: keep-all;
    `}

    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontBold};

`


export const P = styled.p`

    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "0px"};
    border-radius: ${props => props.radius || "0px"};

    border:${props => props.border};
    outline: ${props => props.outline};

    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    opacity: ${props => props.opacity};

    text-align:${props => props.textAlign};
    cursor: ${props => props.cursor || "text"};

    ${props => props.flex && css`
        ${setFlex(props.flex)};
        display: flex;
        flex-grow : ${setFlex(props.flex)[0]};
        flex-shrink: ${setFlex(props.flex)[1]};
        flex-basis: ${setFlex(props.flex)[2]};
        flex-direction: ${setFlex(props.flex)[3]};
        justify-content: ${setFlex(props.flex)[4]};
        align-items: ${setFlex(props.flex)[5]};
        flex-wrap: ${setFlex(props.flex)[6]};
    `}
    ${props => props.position && css`
        ${setPosition(props.position)};
        position : ${setPosition(props.position)[0]};
        top : ${setPosition(props.position)[1]};
        right : ${setPosition(props.position)[2]};
        bottom : ${setPosition(props.position)[3]};
        left : ${setPosition(props.position)[4]};
    `}
    ${props => props.font && css`
        ${setFont(props.font)};
        font-size : ${setFont(props.font)[0]};
        font-weight : ${setFont(props.font)[1]};
        font-family : ${setFont(props.font)[2]};
        font-style : ${setFont(props.font)[3]};
        line-height : ${setFont(props.font)[4]};
    `}
    ${props => props.customBorder && css`
        ${setBorder(props.customBorder)};
        border-top-width : ${setBorder(props.customBorder)[0]};
        border-right-width : ${setBorder(props.customBorder)[1]};
        border-bottom-width : ${setBorder(props.customBorder)[2]};
        border-left-width : ${setBorder(props.customBorder)[3]};
        border-style : ${setBorder(props.customBorder)[4]};
        border-color : ${setBorder(props.customBorder)[5]};
    `}
    ${props => props.textOver && css`
        ${setTextOver(props.textOver)};
        overflow : ${setTextOver(props.textOver)[0]};
        white-space : ${setTextOver(props.textOver)[1]};
        text-overflow : ${setTextOver(props.textOver)[2]};
        -webkit-line-clamp : ${setTextOver(props.textOver)[3] || "1"};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: keep-all;
    `}

    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontBold || "400"};

`