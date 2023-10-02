import styled, { css } from "styled-components"


const setFlex = (flex) => {
    let flexList = flex.split("_")
    return flexList
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

    text-align:${props => props.textAlign}; 
    width: ${props => props.width};
    height: ${props => props.height};
    cursor : ${props => props.cursor || "pointer"};
    border-radius: ${props => props.radius || "0px"};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundColor};
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
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
    ${props => props.url &&
        css`
        background: url( "${props => props.url}" ) no-repeat;
        background-size: contain;
    `}
    border:${props => props.border || "none"}; 
    text-align:${props => props.textAlign}; 
    width: ${props => props.width};
    height: ${props => props.height};
    cursor : ${props => props.cursor || "pointer"};
    border-radius: ${props => props.radius || "0px"};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundColor};
    outline: ${props => props.outline};
`

export const Img = styled.img`
    width: ${props => props.width};
    height : ${props => props.height};
    border : ${props => props.border || "none"};
    box-sizing: border-box;
    margin : ${props => props.margin}
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
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`