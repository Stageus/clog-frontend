import { Route, Routes } from 'react-router-dom';


export const Router = () => {

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