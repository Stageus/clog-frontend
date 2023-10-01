import { Route, Routes } from 'react-router-dom';

import Account_Login from "../components/Page/Account/Account_Login";
import Account_Auth from "../components/Page/Account/Account_Auth";
import Account_Signup from "../components/Page/Account/Account_Signup";
import Account_FindPW from "../components/Page/Account/Account_FindPW";
import Account_ResetPW from "../components/Page/Account/Account_ResetPW";

import Promote_Main from "../components/Page/Promote/Promote_Main";
import Promote_PrPostView from "../components/Page/Promote/Promote_PrPostView";
import Promote_CategoryResult from "../components/Page/Promote/Promote_CategoryResult";
import Promote_SearchResult from "../components/Page/Promote/Promote_SearchResult";
import Promote_ClubProfile from "../components/Page/Promote/Promote_ClubProfile";
import Promote_ClubCreate from "../components/Page/Promote/Promote_ClubCreate";

import Club_Main from "../components/Page/Club/Club_Main";
import Club_PostBoard from "../components/Page/Club/Club_PostBoard";
import Club_PostWriting from "../components/Page/Club/Club_PostWriting";
import Club_PostView from "../components/Page/Club/Club_PostView";
import Club_Members from "../components/Page/Club/Club_Members";
import Club_SearchResult from "../components/Page/Club/Club_SearchResult";
import Club_NoticeBoard from "../components/Page/Club/Club_NoticeBoard";
import Club_NoticeWriting from "../components/Page/Club/Club_NoticeWriting";
import Club_NoticeView from "../components/Page/Club/Club_NoticeView";
import Club_PrPostBoard from "../components/Page/Club/Club_PrPostBoard";
import Club_RequestAccept from "../components/Page/Club/Club_RequestAccept";
import Club_EditBoardList from "../components/Page/Club/Club_EditBoardList";
import Club_EditClubProfile from "../components/Page/Club/Club_EditClubProfile";
import Club_EditPosition from "../components/Page/Club/Club_EditPosition";

const Router = () => {

    return(
        <Routes>
            <Route path="/Account/Login" element={<Account_Login/>}/>
            <Route path="/Account/Auth" element={<Account_Auth/>}/>
            <Route path="/Account/Signup" element={<Account_Signup/>}/>
            <Route path="/Account/FindPW" element={<Account_FindPW/>}/>
            <Route path="/Account_ResetPW" element={<Account_ResetPW/>}/>

            <Route path="/Promote/Main" element={<Promote_Main/>}/>
            <Route path="/Promote/PrPostView" element={<Promote_PrPostView/>}/>
            <Route path="/Promote/CategoryResult" element={<Promote_CategoryResult/>}/>
            <Route path="/Promote/SearchResult" element={<Promote_SearchResult/>}/>
            <Route path="/Promote/ClubProfile" element={<Promote_ClubProfile/>}/>
            <Route path="/Promote/ClubCreate" element={<Promote_ClubCreate/>}/>

            <Route path="/Club/Main" element={<Club_Main/>}/>
            <Route path="/Club/PostBoard" element={<Club_PostBoard/>}/>
            <Route path="/Club/PostWriting" element={<Club_PostWriting/>}/>
            <Route path="/Club/PostView" element={<Club_PostView/>}/>
            <Route path="/Club/Members" element={<Club_Members/>}/>
            <Route path="/Club/SearchResult" element={<Club_SearchResult/>}/>
            <Route path="/Club/NoticeBoard" element={<Club_NoticeBoard/>}/>
            <Route path="/Club/NoticeWriting" element={<Club_NoticeWriting/>}/>
            <Route path="/Club/NoticeView" element={<Club_NoticeView/>}/>
            <Route path="/Club/PrPostBoard" element={<Club_PrPostBoard/>}/>
            <Route path="/Club/RequestAccept" element={<Club_RequestAccept/>}/>
            <Route path="/Club/EditBoardList" element={<Club_EditBoardList/>}/>
            <Route path="/Club/EditClubProfile" element={<Club_EditClubProfile/>}/>
            <Route path="/Club/Club_EditPosition" element={<Club_EditPosition/>}/>
        </Routes>
    )

}

export default Router