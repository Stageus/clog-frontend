import React from "react"

// Container,Component


//styled-components 
import { Flexdiv, Flexinput, Flexbutton, Img, Span } from "../../../style/common"
import styled from "styled-components"

//recoil
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { authOrfindPageAtom, resendAuthAtom } from "../../../recoil/AccountAtom"





const Account_Auth_Timer = (props) => {
    // props ======================================================
    const { id, svg, flex, placeholder } = props
    // state ======================================================
    const [afterRequireTime, setAfterRequireTime] = React.useState("")//인증번호 요청 후 3초
    const [resendAuth, setResendAuth] = useRecoilState(resendAuthAtom)
    // event ======================================================
    const timer = () => {
        let time = 179//3분
        let threemin = setInterval(() => {
            let min = parseInt(time / 60)
            let sec = time % 60
            let temp = -1
            if (sec < 10) {
                temp = min + ":0" + sec
            }
            else {
                temp = min + ":" + sec
            }
            time = time - 1
            setAfterRequireTime(temp)
            //20초
            if (time == 159) {
                setResendAuth(true)
            }
            //타이머 종료
            else if (time < 0) {
                clearInterval(threemin)
                console.log("끝")
            }
        }, 1000)
    }

    React.useEffect(() => {
        timer()
    }, [])
    return (
        <React.Fragment>
            <Flexdiv flex={flex} width="460px" height="48px" border="1px solid #c4c4c4" radius="10px" margin="5px 0" backgroundColor="#ffffff">
                <Flexdiv margin="0 14px" flex="0_1_auto_row_center_center">{svg}</Flexdiv>
                <Flexinput id={id} flex="1_1_auto" height="30px" font="16px" placeholder={placeholder} />
                <Span flex="0_1_auto_row_center_center" width="60px" color="#EB5149">{afterRequireTime}</Span>
            </Flexdiv>
        </React.Fragment>
    )
}

export default Account_Auth_Timer