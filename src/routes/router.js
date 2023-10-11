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

import Nav_Section from "../components/Container/Nav/Nav_Section";


const Router = () => {

    return (
        <Routes>
            <Route path="/account/login" element={<Account_Login />} />
            <Route path="/account/auth" element={<Account_Auth />} />
            <Route path="/account/signup" element={<Account_Signup />} />
            <Route path="/account/find-pw" element={<Account_FindPW />} />
            <Route path="/account/reset-pw" element={<Account_ResetPW />} />

            <Route path="/promote/main" element={<Promote_Main />} />
            <Route path="/promote/pr-post-view" element={<Promote_PrPostView />} />
            <Route path="/promote/category-result" element={<Promote_CategoryResult />} />
            <Route path="/promote/search-result" element={<Promote_SearchResult />} />
            <Route path="/promote/club-profile" element={<Promote_ClubProfile />} />
            <Route path="/promote/club-create" element={<Promote_ClubCreate />} />

            <Route path="/club/main" element={<Club_Main />} />
            <Route path="/club/post-board" element={<Club_PostBoard />} />
            <Route path="/club/post-writing" element={<Club_PostWriting />} />
            <Route path="/club/post-view" element={<Club_PostView />} />
            <Route path="/club/members" element={<Club_Members />} />
            <Route path="/club/search-result" element={<Club_SearchResult />} />
            <Route path="/club/notice-board" element={<Club_NoticeBoard />} />
            <Route path="/club/notice-writing" element={<Club_NoticeWriting />} />
            <Route path="/club/notice-view" element={<Club_NoticeView />} />
            <Route path="/club/pr-post-board" element={<Club_PrPostBoard />} />
            <Route path="/club/request-accept" element={<Club_RequestAccept />} />
            <Route path="/club/edit-board-list" element={<Club_EditBoardList />} />
            <Route path="/club/edit-club-profile" element={<Club_EditClubProfile />} />
            <Route path="/club/edit-position" element={<Club_EditPosition />} />

            {/* 개발 목적 임시 */}
            <Route path="/nav/section" element={<Nav_Section />} />
        </Routes>
    )

}

export default Router