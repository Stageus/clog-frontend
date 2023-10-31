import { atom } from "recoil";


export const authOrfindPageAtom = atom({
    "key": "authOrfindPageAtom",
    "default": true
})

//auth_autbox에서 20초 후 인증번호 재발송이 뜨는 여부
export const resendAuthAtom = atom({
    "key": "resendAuthAtom",
    "default": false
})