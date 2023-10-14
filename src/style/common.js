import styled, { css } from "styled-components"


const setFlex = (flex) => {
    let flexList = flex.split("_")
    return flexList
}
const setPosition = (position) => {
    let positionList = position.split("_")
    return positionList
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

const setPosition = (position) => {
    let positionList = position.split("_")
    return positionList
}

//div
export const Flexdiv = styled.div`
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

    text-align:${props => props.textAlign || "center"};
    width: ${props => props.width};
    height: ${props => props.height};
    cursor: ${props => props.cursor || "pointer"};
    border-radius: ${props => props.radius || "0px"};
    border: ${props => props.border};
    border-top: ${props => props.borderTop};
    outline: ${props => props.outline};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundColor};
    font-size: ${props => props.fontSize};
    align-items: center;
    justify-content: ${props => props.justifyContent};
    color: ${props => props.color};
    opacity: ${props => props.opacity};
`

//button
export const Flexbutton = styled.button`
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
    ${props => props.url &&
        css`
        background: url( "${props => props.url}" ) no-repeat;
        background-size: contain;
    `}
    border:${props => props.border || "none"};
    text-align:${props => props.textAlign};
    width: ${props => props.width};
    height: ${props => props.height};
    cursor: ${props => props.cursor || "pointer"};
    border-radius: ${props => props.radius || "0px"};
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    margin: ${props => props.margin || "none"};
    padding: ${props => props.padding || "none"};
    background-color: ${props => props.backgroundColor};
    outline: ${props => props.outline};
`



//input
export const Flexinput = styled.input`
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
    ${props => props.url &&
        css`
        background: url( "${props => props.url}" ) no-repeat;
        background-size: contain;
    `}
    border:${props => props.border || "none"};
    text-align:${props => props.textAlign};
    width: ${props => props.width};
    height: ${props => props.height};
    cursor: ${props => props.cursor || "pointer"};
    border-radius: ${props => props.radius || "0px"};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontBold || "400"};
    color: ${props => props.color};
    margin: ${props => props.margin || "none"};
    padding: ${props => props.padding || "none"};
    background-color: ${props => props.backgroundColor};
    outline: ${props => props.outline};
`

export const Img = styled.img`
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
    width: ${props => props.width};
    height: ${props => props.height};
    border: ${props => props.border || "none"};
    box-sizing: border - box;
    margin: ${props => props.margin};
    border-radius: ${props => props.radius || "0px"};
    cursor: pointer;
`

export const Span = styled.span`
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
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    font-size: ${props => props.fontSize};
    font-family: ${props => props.fontFamily};
    font-weight: ${props => props.fontBold || "400"};
    color: ${props => props.color};
    margin: ${props => props.margin || "none"};
    padding: ${props => props.padding || "none"};
`