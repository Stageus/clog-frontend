import React from "react"
import Nav_Header from "../../Component/Nav/Nav_Header"
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil"
import { accountInfoAtom } from "../../../recoil/NavAtom"
import Nav_Section_Club from "../../Component/Nav/Nav_Section_Club"

const Nav_Section = () => {
    const account = useRecoilValue(accountInfoAtom)


    return (
        <React.Fragment>
            <Nav_Header />
            <div>
                <div>
                    <input type="button" value="다크모드" />
                    <input type="button" value="종 아이콘" />
                </div>
                <div>
                    <input type="button" value={account.entryYear + account.name} />
                    <div>{account.name}</div>
                    <div>{account.major} {account.entryYear}학번</div>
                </div>
                <div>
                    <input type="button" value="프로필 설정" />
                    <input type="button" value="로그아웃" />
                </div>
            </div>
            <div>여기부터 동아리 목록</div>
            <div><Nav_Section_Club /></div>
        </React.Fragment>
    )
}

export default Nav_Section