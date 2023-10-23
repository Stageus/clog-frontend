import { atom } from "recoil";

//소속
export const belongAtom = atom({
    "key": "categoryAtom",
    "default": [{
        "num": 0,
        "content": "중앙동아리"
    },
    {
        "num": 1,
        "content": "일반동아리"
    },
    {
        "num": 2,
        "content": "단과대 소모임"
    },
    {
        "num": 3,
        "content": "학과 소모임"
    },
    {
        "num": 4,
        "content": "기타 소모임"
    }]
})
//대분류
export const bigCategoryAtom = atom({
    "key": "bigCategoryAtom",
    "default": [{
        "num": 0,
        "content": "공연"
    },
    {
        "num": 1,
        "content": "어학"
    },
    {
        "num": 2,
        "content": "연구"
    },
    {
        "num": 3,
        "content": "사회"
    },
    {
        "num": 4,
        "content": "종교"
    },
    {
        "num": 5,
        "content": "전시"
    },
    {
        "num": 6,
        "content": "무예"
    },
    {
        "num": 7,
        "content": "구기"
    },
    {
        "num": 8,
        "content": "레저"
    },
    {
        "num": 9,
        "content": "봉사"
    }]
})
//학과 목록
export const majorAtom = atom({
    "key": "majorAtom",
    "default": [
        {
            "id": 0,
            "major": "기계공학과"
        },
        {
            "id": 1,
            "major": "항공우주공학과"
        },
        {
            "id": 2,
            "major": "조선해양공학과"
        },
        {
            "id": 3,
            "major": "산업경영공학과"
        },
        {
            "id": 4,
            "major": "화학공학과"
        },
        {
            "id": 5,
            "major": "고분자공학과"
        },
        {
            "id": 6,
            "major": "신소재공학과"
        },
        {
            "id": 7,
            "major": "사회인프라공학과"
        },
        {
            "id": 8,
            "major": "환경공학과"
        },
        {
            "id": 9,
            "major": "공간정보공학과"
        },
        {
            "id": 10,
            "major": "건축공하고가"
        },
        {
            "id": 11,
            "major": "건축학과"
        },
        {
            "id": 12,
            "major": "에너지자원공학과"
        },
        {
            "id": 13,
            "major": "전기공학과"
        },
        {
            "id": 14,
            "major": "전자공학과"
        },
        {
            "id": 15,
            "major": "정보통신공학과"
        },
        {
            "id": 16,
            "major": "반도체시스템공학과"
        },
        {
            "id": 17,
            "major": "수학과"
        },
        {
            "id": 18,
            "major": "통계학과"
        },
        {
            "id": 19,
            "major": "물리학과"
        },
        {
            "id": 20,
            "major": "화학과"
        },
        {
            "id": 21,
            "major": "해양과학과"
        },
        {
            "id": 22,
            "major": "식품영양학과"
        },
        {
            "id": 23,
            "major": "경영학과"
        },
        {
            "id": 24,
            "major": "글로벌금융학과"
        },
        {
            "id": 25,
            "major": "아태물류학부"
        },
        {
            "id": 26,
            "major": "국제통상학과"
        },
        {
            "id": 27,
            "major": "국어교육과"
        },
        {
            "id": 28,
            "major": "영어교육과"
        },
        {
            "id": 29,
            "major": "사회교육과"
        },
        {
            "id": 30,
            "major": "체육교육과"
        },
        {
            "id": 31,
            "major": "교육학과"
        },
        {
            "id": 32,
            "major": "수학교육과"
        },
        {
            "id": 33,
            "major": "행정학과"
        },
        {
            "id": 34,
            "major": "정치외교학과"
        },
        {
            "id": 35,
            "major": "미디어커뮤니케이션학과"
        },
        {
            "id": 36,
            "major": "경제학과"
        },
        {
            "id": 37,
            "major": "소비자학과"
        },
        {
            "id": 38,
            "major": "아동심리학과"
        },
        {
            "id": 39,
            "major": "사회복지학과"
        },
        {
            "id": 40,
            "major": "한국어문학과"
        },
        {
            "id": 41,
            "major": "사학과"
        },
        {
            "id": 42,
            "major": "철학과"
        },
        {
            "id": 43,
            "major": "중국학과"
        },
        {
            "id": 44,
            "major": "일본언어문화학과"
        },
        {
            "id": 45,
            "major": "영어영문학과"
        },
        {
            "id": 46,
            "major": "프랑스언어문화학과"
        },
        {
            "id": 47,
            "major": "문화콘텐츠문화경영학과"
        },
        {
            "id": 48,
            "major": "의예과"
        },
        {
            "id": 49,
            "major": "간호학과"
        },
        {
            "id": 50,
            "major": "메카트로닉스공학과"
        },
        {
            "id": 51,
            "major": "소프트웨어융합공학과"
        },
        {
            "id": 52,
            "major": "산업경영학과"
        },
        {
            "id": 53,
            "major": "금융투자학과"
        },
        {
            "id": 54,
            "major": "조형예술학과"
        },
        {
            "id": 55,
            "major": "디자인융합학과"
        },
        {
            "id": 56,
            "major": "스포츠과학과"
        },
        {
            "id": 57,
            "major": "연극영화학과"
        },
        {
            "id": 58,
            "major": "의류디자인학과"
        },
        {
            "id": 59,
            "major": "반도체산업융합학과"
        },
        {
            "id": 60,
            "major": "인공지능공학과"
        },
        {
            "id": 61,
            "major": "데이터사이언스학과"
        },
        {
            "id": 62,
            "major": "스마트모빌리티공학과"
        },
        {
            "id": 63,
            "major": "디자인테크놀로지학과"
        },
        {
            "id": 64,
            "major": "컴퓨터공학과"
        },
        {
            "id": 65,
            "major": "생명공학과"
        },
        {
            "id": 66,
            "major": "생명과학과"
        }
    ]
})
//단과대 목록
export const collegeAtom = atom({
    "key": "collegeAtom",
    "default": [
        {
            "id": 0,
            "college": "공과대학"
        },
        {
            "id": 1,
            "college": "자연과학대학"
        },
        {
            "id": 2,
            "college": "경영대학"
        },
        {
            "id": 3,
            "college": "사범대학"
        },
        {
            "id": 4,
            "college": "사회과학대학"
        },
        {
            "id": 5,
            "college": "문과대학"
        },
        {
            "id": 6,
            "college": "의과대학"
        },
        {
            "id": 7,
            "college": "미래융합대학"
        },
        {
            "id": 8,
            "college": "예술체육대학"
        },
        {
            "id": 9,
            "college": "소프트웨어융합대학"
        },
    ]
})

//홍보물 목록
export const prPostAtom = atom({
    "key": "prPostAtom",
    "default": [
        {
            "id": 0,
            "title": "대학생 전시 기획 동아리 OOF CLUB 신입부원 모집 (~9/27)",
            "commentNum": 3,
            "thumbnail": require("../image/prmain1.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "OOF CLUB",
            "createAt": "20230512"
        },
        {
            "id": 1,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 5,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "MRA",
            "createAt": "20230512"
        },
        {
            "id": 2,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 3,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/global-news.png"),
            "clubName": "코마매거진",
            "createAt": "20230512"
        },
        {
            "id": 3,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 3,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/ball.png"),
            "clubName": "코마매거진",
            "createAt": "20230512"
        },
        {
            "id": 4,
            "title": "[대학생 연합 프레젠테이션 스터디] UnivPT에서 28기를 모집합니다!",
            "commentNum": 11,
            "thumbnail": require("../image/prmain3.jpg"),
            "clubImage": require("../image/user.png"),
            "clubName": "UnivPT",
            "createAt": "20230512"
        },
        {
            "id": 5,
            "title": "대학생 전시 기획 동아리 OOF CLUB 신입부원 모집 (~9/27)",
            "commentNum": 3,
            "thumbnail": require("../image/prmain1.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "OOF CLUB",
            "createAt": "20230512"
        },
        {
            "id": 6,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 5,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "MRA",
            "createAt": "20230512"
        },
        {
            "id": 7,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 3,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/global-news.png"),
            "clubName": "코마매거진",
            "createAt": "20230512"
        },
        {
            "id": 8,
            "title": "[대학생 연합 프레젠테이션 스터디] UnivPT에서 28기를 모집합니다!",
            "commentNum": 11,
            "thumbnail": require("../image/prmain3.jpg"),
            "clubImage": require("../image/global-news.png"),
            "clubName": "UnivPT",
            "createAt": "20230512"
        },
        {
            "id": 9,
            "title": "대학생 전시 기획 동아리 OOF CLUB 신입부원 모집 (~9/27)",
            "commentNum": 3,
            "thumbnail": require("../image/prmain1.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "OOF CLUB",
            "createAt": "20230512"
        },
        {
            "id": 10,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 5,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "MRA",
            "createAt": "20230512"
        },
        {
            "id": 11,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 3,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/global-news.png"),
            "clubName": "코마매거진",
            "createAt": "20230512"
        },
        {
            "id": 12,
            "title": "[대학생 연합 프레젠테이션 스터디] UnivPT에서 28기를 모집합니다!",
            "commentNum": 11,
            "thumbnail": require("../image/prmain3.jpg"),
            "clubImage": require("../image/global-news.png"),
            "clubName": "UnivPT",
            "createAt": "20230512"
        },
        {
            "id": 13,
            "title": "대학생 전시 기획 동아리 OOF CLUB 신입부원 모집 (~9/27)",
            "commentNum": 3,
            "thumbnail": require("../image/prmain1.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "OOF CLUB",
            "createAt": "20230512"
        },
        {
            "id": 14,
            "title": "END 대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 5,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "MRA",
            "createAt": "20230512"
        },//
        {
            "id": 15,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 3,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/ball.png"),
            "clubName": "코마매거진",
            "createAt": "20230512"
        },
        {
            "id": 16,
            "title": "[대학생 연합 프레젠테이션 스터디] UnivPT에서 28기를 모집합니다!",
            "commentNum": 11,
            "thumbnail": require("../image/prmain3.jpg"),
            "clubImage": require("../image/global-news.png"),
            "clubName": "UnivPT",
            "createAt": "20230512"
        },
        {
            "id": 17,
            "title": "대학생 전시 기획 동아리 OOF CLUB 신입부원 모집 (~9/27)",
            "commentNum": 3,
            "thumbnail": require("../image/prmain1.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "OOF CLUB",
            "createAt": "20230512"
        },
        {
            "id": 18,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 5,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "MRA",
            "createAt": "20230512"
        },
        {
            "id": 19,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 3,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/global-news.png"),
            "clubName": "코마매거진",
            "createAt": "20230512"
        },
        {
            "id": 20,
            "title": "[대학생 연합 프레젠테이션 스터디] UnivPT에서 28기를 모집합니다!",
            "commentNum": 11,
            "thumbnail": require("../image/prmain3.jpg"),
            "clubImage": require("../image/ball.png"),
            "clubName": "UnivPT",
            "createAt": "20230512"
        },
        {
            "id": 21,
            "title": "대학생 전시 기획 동아리 OOF CLUB 신입부원 모집 (~9/27)",
            "commentNum": 3,
            "thumbnail": require("../image/prmain1.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "OOF CLUB",
            "createAt": "20230512"
        },
        {
            "id": 22,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 5,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "MRA",
            "createAt": "20230512"
        },
        {
            "id": 23,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 3,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/ball.png"),
            "clubName": "코마매거진",
            "createAt": "20230512"
        },
        {
            "id": 24,
            "title": "[대학생 연합 프레젠테이션 스터디] UnivPT에서 28기를 모집합니다!",
            "commentNum": 11,
            "thumbnail": require("../image/prmain3.jpg"),
            "clubImage": require("../image/global-news.png"),
            "clubName": "UnivPT",
            "createAt": "20230512"
        },
        {
            "id": 25,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 5,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "MRA",
            "createAt": "20230512"
        },
        {
            "id": 26,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 3,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/global-news.png"),
            "clubName": "코마매거진",
            "createAt": "20230512"
        },
        {
            "id": 27,
            "title": "[대학생 연합 프레젠테이션 스터디] UnivPT에서 28기를 모집합니다!",
            "commentNum": 11,
            "thumbnail": require("../image/prmain3.jpg"),
            "clubImage": require("../image/global-news.png"),
            "clubName": "UnivPT",
            "createAt": "20230512"
        },
        {
            "id": 28,
            "title": "대학생 전시 기획 동아리 OOF CLUB 신입부원 모집 (~9/27)",
            "commentNum": 3,
            "thumbnail": require("../image/prmain1.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "OOF CLUB",
            "createAt": "20230512"
        },
        {
            "id": 29,
            "title": "END대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 5,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/mra.png"),
            "clubName": "MRA",
            "createAt": "20230512"
        },//
        {
            "id": 30,
            "title": "대학생 광고마케팅 잡지동아리 COMMA Magazine 2023 겨울호 신입 부원 모집",
            "commentNum": 3,
            "thumbnail": require("../image/prmain2.jpg"),
            "clubImage": require("../image/global-news.png"),
            "clubName": "코마매거진",
            "createAt": "20230512"
        },
        {
            "id": 31,
            "title": "[대학생 연합 프레젠테이션 스터디] UnivPT에서 28기를 모집합니다!",
            "commentNum": 11,
            "thumbnail": require("../image/prmain3.jpg"),
            "clubImage": require("../image/global-news.png"),
            "clubName": "UnivPT",
            "createAt": "20230512"
        }
    ]
})

//한 홍보물 내용
export const prPostViewAtom = atom({
    "key": "prPostViewAtom",
    "default": {
        "clubName": "IRUN", // 동아리 이름
        "profileImage": require("../image/race.png"), // 동아리 이미지
        "title": "[인하대 러닝크루 IRUN]", // 홍보물 제목
        "content": "📢. 정규러닝 일자 : 9월 19일 화요일 20시\n\
            📢. 인스타 계정: irun_inha\n\
            📢. 정식 크루원 자격: 정규런 2회 이상 참가\n\
            📢.정규러닝: 매주 화요일 20시 대운동장 ROTC 건물 앞코스: SK뷰 시티런\n\
            \n\
            페이스: A그룹: 5km(5: 30 / km) \n\
            B그룹: 4km(6: 30 / km) \n\
            C그룹: 3km(7:00 / km) * 페이스 및 코스는 당일 사정에 따라 변경될 수 있습니다!\n\
\n\
\n\
            🔥 크루소개\n\
            ‘LIFE SHORT, WE RUN’\n\
            아이런은 인하인들로 구성된 러닝크루로써 인하대학교를 거점으로 2019년 시작되었습니다🏃‍♂️🏃‍♀\n\
\n\
            ️학부생 대학원생 졸업생 모두 참여하고 있으며, 함께 뛰며 얻는 에너지에 중점을 두고 있습니다🔥🔥\n\
\n\
            대학러닝리그에 참여해 타 대학교 러닝크루와도 활발한 교류 및 경쟁을 진행하면서 인천 지역의 러닝 문화에 함께하고자 합니다.❤‍🔥\n\
\n\
            러닝은 우리를 웃게하는 힘😁\n\
            아이런과 함께 달려봐요!!🔥.\n\
\n\
\n\
             주요 활동 지역\n\
            인하대학교 대운동장 및 주변\n\
\n\
            🔥대학러닝리그 참가: 저번 학기에 이어 Runnable 대학러닝리그에 참가해 인하대를 대표할 예정입니다.전국 25개 이상 대학이 모여\n\
             경쟁하고 교류하는 리그에서 함께 달려보아요:) 더 풍부해진 후원 및 이벤트가 기다리고 있습니다\n\
\n\
            🔥기획팀, 홍보팀 등 운영진 모집: 정규러닝 및 계획을 함께 운영해가며 페이서, 진행을 도와줄 기획팀과 인스타계정 운영, 관리 및\n\
            정규러닝 시 사진과 동영상 촬영으로 아이런을 더욱 빛나게 해줄 홍보팀 운영진들을 모집할 계획이니 관심 있으신 분들은 언제든\n\
            문의 주세요:) \n\
            🔥. 활발한 소모임 및 뒷풀이: 더욱 활발한 뒷풀이와 등산과 같은 주말 소모임 활동을 늘려나가고자 합니다! 더 가까워진 아이런과\n\
함께해요:) \n\
\n\
\n\
            🏃🏃러닝경험 없어도 됩니다!! 함께 뛰실 분은 아래 인스타 계정 상단에 있는 링크로 신청해주시면 감사하겠습니다!\n\
\n\
\n\
            📢인스타 계정: irun_inha\n\
", // 홍보물 내용
        "promotionImages": [require("../image/prpostview1.jpg"), require("../image/prpostview2.jpg"), require("../image/prpostview3.jpg"), require("../image/prpostview4.jpg"), require("../image/prpostview4.jpg")], // 홍보물 이미지 경로 최대 5장
        "createdAt": "2023.05.14 10:33", // 홍보물 작성 날짜,
        "authorState": false // 홍보물 작성자 여부 (해당 동아리의 운영진인지)
    }
})

//홍보물 댓글
export const prPostCommentAtom = atom({
    "key": "prPostCommentAtom",
    "default": {
        "count": 3, // 게시물의 총 댓글 수
        "comments": [
            {
                "id": 0, // 댓글의 pk
                "content": "포항항 포항항 포항항항\n정말 재밌다~\n포항항 포항항", // 학번인데 내용으로 변경
                "manageState": true, // 댓글 수정, 삭제 여부
                "createdAt": "2023.05.15 02:23", // 작성 날짜
                "replyCount": 4, // 대댓글 개수
                "authorId": 3, // 작성자 pk
                "authorMajor": "인공지능공학과", // 작성자 학과
                "authorPosition": "미가입", // 작성자 직책
                "authorEntryYear": "21", // 작성자 학번
                "authorPcolor": "2fffff", // 작성자 퍼스널 컬러
            },
            {
                "id": 1, // 댓글의 pk
                "content": "포항항 포항항 포항항항\n정말 재밌다~\n포항항 포항항", // 학번인데 내용으로 변경
                "manageState": false, // 댓글 수정, 삭제 여부
                "createdAt": "2023.05.15 02:23", // 작성 날짜
                "replyCount": 0, // 대댓글 개수
                "authorId": 3, // 작성자 pk
                "authorMajor": "인공지능공학과", // 작성자 학과
                "authorPosition": "미가입", // 작성자 직책
                "authorEntryYear": "21", // 작성자 학번
                "authorPcolor": "2fffff", // 작성자 퍼스널 컬러
            },
            {
                "id": 2, // 댓글의 pk
                "content": "ㅇ ㅖ?", // 학번인데 내용으로 변경
                "manageState": true, // 댓글 수정, 삭제 여부
                "createdAt": "2023.05.15 02:23", // 작성 날짜
                "replyCount": 0, // 대댓글 개수
                "authorId": 3, // 작성자 pk
                "authorMajor": "인공지능공학과", // 작성자 학과
                "authorPosition": "미가입", // 작성자 직책
                "authorEntryYear": "21", // 작성자 학번
                "authorPcolor": "2fffff", // 작성자 퍼스널 컬러
            }
        ]
    }
})
//홍보물 한 댓글의 답글
export const prPostReplyAtom = atom({
    "key": "prPostReplyAtom",
    "default": {
        "count": 4,
        "replys": [
            {
                "id": 0, // 댓글의 pk
                "content": "..............?", // 학번인데 내용으로 변경
                "manageState": true, // 댓글 수정, 삭제 여부
                "createdAt": "2023.05.16 13:45", // 작성 날짜
                "authorId": 3, // 작성자 pk
                "authorMajor": "인공지능공학과", // 작성자 학과
                "authorPosition": "미가입", // 작성자 직책
                "authorEntryYear": "21", // 작성자 학번
                "authorPcolor": "2fffff", // 작성자 퍼스널 컬러
            },
            {
                "id": 1, // 댓글의 pk
                "content": "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ\n아닙니다...포항항", // 학번인데 내용으로 변경
                "manageState": false, // 댓글 수정, 삭제 여부
                "createdAt": "2023.05.16 13:45", // 작성 날짜
                "authorId": 3, // 작성자 pk
                "authorMajor": "인공지능공학과", // 작성자 학과
                "authorPosition": "미가입", // 작성자 직책
                "authorEntryYear": "21", // 작성자 학번
                "authorPcolor": "2fffff", // 작성자 퍼스널 컬러
            },
            {
                "id": 2, // 댓글의 pk
                "content": "..............?", // 학번인데 내용으로 변경
                "manageState": true, // 댓글 수정, 삭제 여부
                "createdAt": "2023.05.16 13:45", // 작성 날짜
                "authorId": 3, // 작성자 pk
                "authorMajor": "인공지능공학과", // 작성자 학과
                "authorPosition": "미가입", // 작성자 직책
                "authorEntryYear": "21", // 작성자 학번
                "authorPcolor": "2fffff", // 작성자 퍼스널 컬러
            },
            {
                "id": 3, // 댓글의 pk
                "content": "..............?", // 학번인데 내용으로 변경
                "manageState": true, // 댓글 수정, 삭제 여부
                "createdAt": "2023.05.16 13:45", // 작성 날짜
                "authorId": 3, // 작성자 pk
                "authorMajor": "인공지능공학과", // 작성자 학과
                "authorPosition": "미가입", // 작성자 직책
                "authorEntryYear": "21", // 작성자 학번
                "authorPcolor": "2fffff", // 작성자 퍼스널 컬러
            }
        ]
    }
})

//카테고리를 통한 동아리 검색결과
export const categoryResultClubAtom = atom({
    "key": "categoryResultClubAtom",
    "default": [
        {
            "id": 0, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "I&&D", // 동아리 이름
            "cover": "I&&D(아이앤디)는 순수 예술, 서브 컬처를 배제한 디자인 소모임입니다.\
             아이그루스 내 웹, 앱(현재는 없음), 게임, 보안, 임베디드, 알고리즘 소모임이\
              존재합니다. 이 중 웹, 앱, 게임은 디자이너와 협업이 필요합니다. 소모임 설립\
               목적은 다른 소모임(웹, 앱, 게임)과 디자이너 간 협업 환경 구축이지만, \
               디자인 소모임 자체적으로 진행하는 활동을 통해 다양한 분야의 디자이너들이 소통하고 \
               활동하는 환경을 만들어 인하대 내 최고의 디자인 동아리로 입지를 다지는 것이 최종 \
               목표입니다. 들어 인하대 내 최고의 디자인 동아리로 입니다.", // 동아리 소개글
            "isMember": false, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": false, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 1, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "IGDC", // 동아리 이름
            "cover": "IGDC(Inha Game Developer Club)는 PC 및 모바일 게임을 \
            개발하고 이에 필요한 지식을 연구하는 소모임입니다.\
            게임 개발에 관심 있는 사람들이 프로젝트를 통해 게임을 개발하고 출시할 수 \
            있습니다.게임 개발 경험이 없더라도, 입문 프로젝트를 통해 Unity 활용 능력을\
             기르거나, 프로젝트를 통해 게임을 출시해 볼 수 있습니다. IGDC는 게임 개발에\
              관심 있으신 분들이라면 누구든 환영합니다!", // 동아리 소개글
            "isMember": false, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": true, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 2, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "IRUN", // 동아리 이름
            "cover": "LIFE SHORT, WE RUN\
            아이런은 인하인들로 구성된 러닝크루로써 인하대학교를 거점으로 2019년 시작되었습니다🏃‍♂️🏃‍♀\
            ️학부생 대학원생 졸업생 모두 참여하고 있으며, 함께 뛰며 얻는 에너지에 중점을 두고 있습니다🔥🔥\
            대학러닝리그에 참여해 타 대학교 러닝크루와도 활발한 교류 및 경쟁을 진행하면서 인천 \
            지역의 러닝 문화에 함께하고자 합니다.\
            러닝은 우리를 웃게하는 힘😁\
            아이런과 함께 달려봐요!!🔥.", // 동아리 소개글
            "isMember": true, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": false, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 0, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "I&&D", // 동아리 이름
            "cover": "I&&D(아이앤디)는 순수 예술, 서브 컬처를 배제한 디자인 소모임입니다.\
            아이그루스 내 웹, 앱(현재는 없음), 게임, 보안, 임베디드, 알고리즘 소모임이 존재합니다.\
            이 중 웹, 앱, 게임은 디자이너와 협업이 필요합니다. 소모임 설립 목적은 \
            다른 소모임(웹, 앱, 게임)과 디자이너 간 협업 환경 구축이지만, 디자인 \
            소모임 자체적으로 진행하는 활동을 통해 다양한 분야의 디자이너들이 소통하고 \
            활동하는 환경을 만들어 인하대 내 최고의 디자인 동아리로 입지를 다지는 것이\
             최종 목표입니다.", // 동아리 소개글
            "isMember": false, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": false, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 1, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "IGDC", // 동아리 이름
            "cover": "IGDC(Inha Game Developer Club)는 PC 및 모바일 게임을 \
            개발하고 이에 필요한 지식을 연구하는 소모임입니다.\
            게임 개발에 관심 있는 사람들이 프로젝트를 통해 게임을 개발하고 출시할 수 \
            있습니다.게임 개발 경험이 없더라도, 입문 프로젝트를 통해 Unity 활용 능력을\
             기르거나, 프로젝트를 통해 게임을 출시해 볼 수 있습니다. IGDC는 게임 개발에\
              관심 있으신 분들이라면 누구든 환영합니다!", // 동아리 소개글
            "isMember": false, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": true, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 2, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "IRUN", // 동아리 이름
            "cover": "LIFE SHORT, WE RUN\
            아이런은 인하인들로 구성된 러닝크루로써 인하대학교를 거점으로 2019년 시작되었습니다🏃‍♂️🏃‍♀\
            ️학부생 대학원생 졸업생 모두 참여하고 있으며, 함께 뛰며 얻는 에너지에 중점을 두고 있습니다🔥🔥\
            대학러닝리그에 참여해 타 대학교 러닝크루와도 활발한 교류 및 경쟁을 진행하면서 인천 \
            지역의 러닝 문화에 함께하고자 합니다.\
            러닝은 우리를 웃게하는 힘😁\
            아이런과 함께 달려봐요!!🔥.", // 동아리 소개글
            "isMember": true, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": false, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 0, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "I&&D", // 동아리 이름
            "cover": "I&&D(아이앤디)는 순수 예술, 서브 컬처를 배제한 디자인 소모임입니다.\
            아이그루스 내 웹, 앱(현재는 없음), 게임, 보안, 임베디드, 알고리즘 소모임이 존재합니다.\
            이 중 웹, 앱, 게임은 디자이너와 협업이 필요합니다. 소모임 설립 목적은 \
            다른 소모임(웹, 앱, 게임)과 디자이너 간 협업 환경 구축이지만, 디자인 \
            소모임 자체적으로 진행하는 활동을 통해 다양한 분야의 디자이너들이 소통하고 \
            활동하는 환경을 만들어 인하대 내 최고의 디자인 동아리로 입지를 다지는 것이\
             최종 목표입니다.", // 동아리 소개글
            "isMember": false, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": false, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 1, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "IGDC", // 동아리 이름
            "cover": "IGDC(Inha Game Developer Club)는 PC 및 모바일 게임을 \
            개발하고 이에 필요한 지식을 연구하는 소모임입니다.\
            게임 개발에 관심 있는 사람들이 프로젝트를 통해 게임을 개발하고 출시할 수 \
            있습니다.게임 개발 경험이 없더라도, 입문 프로젝트를 통해 Unity 활용 능력을\
             기르거나, 프로젝트를 통해 게임을 출시해 볼 수 있습니다. IGDC는 게임 개발에\
              관심 있으신 분들이라면 누구든 환영합니다!", // 동아리 소개글
            "isMember": false, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": true, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 2, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "IRUN", // 동아리 이름
            "cover": "LIFE SHORT, WE RUN\
            아이런은 인하인들로 구성된 러닝크루로써 인하대학교를 거점으로 2019년 시작되었습니다🏃‍♂️🏃‍♀\
            ️학부생 대학원생 졸업생 모두 참여하고 있으며, 함께 뛰며 얻는 에너지에 중점을 두고 있습니다🔥🔥\
            대학러닝리그에 참여해 타 대학교 러닝크루와도 활발한 교류 및 경쟁을 진행하면서 인천 \
            지역의 러닝 문화에 함께하고자 합니다.\
            러닝은 우리를 웃게하는 힘😁\
            아이런과 함께 달려봐요!!🔥.", // 동아리 소개글
            "isMember": true, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": false, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 0, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "I&&D", // 동아리 이름
            "cover": "I&&D(아이앤디)는 순수 예술, 서브 컬처를 배제한 디자인 소모임입니다.\
            아이그루스 내 웹, 앱(현재는 없음), 게임, 보안, 임베디드, 알고리즘 소모임이 존재합니다.\
            이 중 웹, 앱, 게임은 디자이너와 협업이 필요합니다. 소모임 설립 목적은 \
            다른 소모임(웹, 앱, 게임)과 디자이너 간 협업 환경 구축이지만, 디자인 \
            소모임 자체적으로 진행하는 활동을 통해 다양한 분야의 디자이너들이 소통하고 \
            활동하는 환경을 만들어 인하대 내 최고의 디자인 동아리로 입지를 다지는 것이\
             최종 목표입니다.", // 동아리 소개글
            "isMember": false, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": false, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 1, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "IGDC", // 동아리 이름
            "cover": "IGDC(Inha Game Developer Club)는 PC 및 모바일 게임을 \
            개발하고 이에 필요한 지식을 연구하는 소모임입니다.\
            게임 개발에 관심 있는 사람들이 프로젝트를 통해 게임을 개발하고 출시할 수 \
            있습니다.게임 개발 경험이 없더라도, 입문 프로젝트를 통해 Unity 활용 능력을\
             기르거나, 프로젝트를 통해 게임을 출시해 볼 수 있습니다. IGDC는 게임 개발에\
              관심 있으신 분들이라면 누구든 환영합니다!", // 동아리 소개글
            "isMember": false, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": true, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 2, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "IRUN", // 동아리 이름
            "cover": "LIFE SHORT, WE RUN\
            아이런은 인하인들로 구성된 러닝크루로써 인하대학교를 거점으로 2019년 시작되었습니다🏃‍♂️🏃‍♀\
            ️학부생 대학원생 졸업생 모두 참여하고 있으며, 함께 뛰며 얻는 에너지에 중점을 두고 있습니다🔥🔥\
            대학러닝리그에 참여해 타 대학교 러닝크루와도 활발한 교류 및 경쟁을 진행하면서 인천 \
            지역의 러닝 문화에 함께하고자 합니다.\
            러닝은 우리를 웃게하는 힘😁\
            아이런과 함께 달려봐요!!🔥.", // 동아리 소개글
            "isMember": true, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": false, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 0, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "I&&D", // 동아리 이름
            "cover": "I&&D(아이앤디)는 순수 예술, 서브 컬처를 배제한 디자인 소모임입니다.\
            아이그루스 내 웹, 앱(현재는 없음), 게임, 보안, 임베디드, 알고리즘 소모임이 존재합니다.\
            이 중 웹, 앱, 게임은 디자이너와 협업이 필요합니다. 소모임 설립 목적은 \
            다른 소모임(웹, 앱, 게임)과 디자이너 간 협업 환경 구축이지만, 디자인 \
            소모임 자체적으로 진행하는 활동을 통해 다양한 분야의 디자이너들이 소통하고 \
            활동하는 환경을 만들어 인하대 내 최고의 디자인 동아리로 입지를 다지는 것이\
             최종 목표입니다.", // 동아리 소개글
            "isMember": false, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": false, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 1, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "IGDC", // 동아리 이름
            "cover": "IGDC(Inha Game Developer Club)는 PC 및 모바일 게임을 \
            개발하고 이에 필요한 지식을 연구하는 소모임입니다.\
            게임 개발에 관심 있는 사람들이 프로젝트를 통해 게임을 개발하고 출시할 수 \
            있습니다.게임 개발 경험이 없더라도, 입문 프로젝트를 통해 Unity 활용 능력을\
             기르거나, 프로젝트를 통해 게임을 출시해 볼 수 있습니다. IGDC는 게임 개발에\
              관심 있으신 분들이라면 누구든 환영합니다!", // 동아리 소개글
            "isMember": false, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": true, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 2, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "IRUN", // 동아리 이름
            "cover": "LIFE SHORT, WE RUN\
            아이런은 인하인들로 구성된 러닝크루로써 인하대학교를 거점으로 2019년 시작되었습니다🏃‍♂️🏃‍♀\
            ️학부생 대학원생 졸업생 모두 참여하고 있으며, 함께 뛰며 얻는 에너지에 중점을 두고 있습니다🔥🔥\
            대학러닝리그에 참여해 타 대학교 러닝크루와도 활발한 교류 및 경쟁을 진행하면서 인천 \
            지역의 러닝 문화에 함께하고자 합니다.\
            러닝은 우리를 웃게하는 힘😁\
            아이런과 함께 달려봐요!!🔥.", // 동아리 소개글
            "isMember": true, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": false, // 해당 동아리의 가입 신청 오픈 유무
        },
        {
            "id": 2, // 동아리 pk
            "profileImg": require("../image/race.png"), // 동아리 이미지 주소
            "name": "IRUN", // 동아리 이름
            "cover": "LIFE SHORT, WE RUN\
            아이런은 인하인들로 구성된 러닝크루로써 인하대학교를 거점으로 2019년 시작되었습니다🏃‍♂️🏃‍♀\
            ️학부생 대학원생 졸업생 모두 참여하고 있으며, 함께 뛰며 얻는 에너지에 중점을 두고 있습니다🔥🔥\
            대학러닝리그에 참여해 타 대학교 러닝크루와도 활발한 교류 및 경쟁을 진행하면서 인천 \
            지역의 러닝 문화에 함께하고자 합니다.\
            러닝은 우리를 웃게하는 힘😁\
            아이런과 함께 달려봐요!!🔥.", // 동아리 소개글
            "isMember": true, // 해당 동아리에 가입 되어있는 상태인지
            "isRecruit": false, // 해당 동아리의 가입 신청 오픈 유무
        }
    ]
})

//소분류 전체
export const smallCategoryAtom = atom({
    "key": "",
    "default": [
        {
            "id": 0,
            "name": "기악"
        },
        {
            "id": 1,
            "name": "밴드"
        },
        {
            "id": 2,
            "name": "연극/뮤지컬"
        },
        {
            "id": 3,
            "name": "무용"
        },
        {
            "id": 4,
            "name": "노래/합창"
        },
        {
            "id": 5,
            "name": "기타"//
        },
        {
            "id": 6,
            "name": "어학"//
        },
        {
            "id": 7,
            "name": "경제/사회"
        },
        {
            "id": 8,
            "name": "순수과학"
        },
        {
            "id": 9,
            "name": "기계/설비"
        },
        {
            "id": 10,
            "name": "SW/IT"
        },
        {
            "id": 11,
            "name": "역사/문화"
        }
        ,
        {
            "id": 12,
            "name": "기타"//
        },
        {
            "id": 13,
            "name": "사회"//
        },
        {
            "id": 14,
            "name": "종교"//
        },
        {
            "id": 15,
            "name": "예술/공예"
        },
        {
            "id": 16,
            "name": "미디어"
        },
        {
            "id": 17,
            "name": "문학"
        },
        {
            "id": 18,
            "name": "기타"//
        },
        {
            "id": 19,
            "name": "무예"//
        },
        {
            "id": 20,
            "name": "구기"//
        },
        {
            "id": 21,
            "name": "레저"//
        },
        {
            "id": 22,
            "name": "동물"
        },
        {
            "id": 21,
            "name": "아동/학생"
        },
        {
            "id": 22,
            "name": "기타"//
        }
    ]
})

//검색결과(이름) 동아리
export const searchResultClubAtom = atom({
    "key": "searchResultClubAtom",
    "default": [
        {
            "id": "1",
            "club": "MRA",
            "profileImage": "../../../image/mra.png"
        },
        {
            "id": "2",
            "club": "테니스부",
            "profileImage": "../../../image/tenislogo.jpeg"
        },
        {
            "id": "3",
            "club": "동아리3",
            "profileImage": "../../../image/tenislogo.jpeg"
        },
        {
            "id": "4",
            "club": "동아리4",
            "profileImage": "../../../image/tenislogo.jpeg"
        },
        {
            "id": "5",
            "club": "동아리5",
            "profileImage": "../../../image/tenislogo.jpeg"
        },
        {
            "id": "6",
            "club": "동아리6",
            "profileImage": "../../../image/tenislogo.jpeg"
        },
        {
            "id": "7",
            "club": "동아리7",
            "profileImage": "../../../image/tenislogo.jpeg"
        },
        {
            "id": "8",
            "club": "동아리8",
            "profileImage": "../../../image/tenislogo.jpeg"
        },
        {
            "id": "9",
            "club": "동아리9",
            "profileImage": "../../../image/tenislogo.jpeg"
        },
        {
            "id": "10",
            "club": "동아리10",
            "profileImage": "../../../image/tenislogo.jpeg"
        }
    ]
})

//한 동아리 프로필 내용
export const clubProfileAtom = atom({
    "key": "clubProfileAtom",
    "default": {
        "name": "MRA", // 동아리 이름
        "belong": "중앙동아리", // 동아리 소속
        "bigCategory": "봉사", // 동아리 대분류
        "smallCategory": "아동/학생", // 동아리 소분류
        "profileImage": require("../image/mra.png"), // 동아리 프로필 이미)지
        "bannerImage": "?", // 동아리 배너 이미지
        "cover": "IGDC(Inha Game Developer Club)는 PC 및 모바일 게임을 개발하고\
         이에 필요한 지식을 연구하는 소모임입니다. 게임 개발에 관심 있는 사람들이 프로젝트를 \
         통해 게임을 개발하고 출시할 수 있습니다.게임 개발 경험이 없더라도, 입문 프로젝트를 \
         통해 Unity 활용 능력을 기르거나, 프로젝트를 통해 게임을 출시해 볼 수 있습니다. \
         IGDC는 게임 개발에 관심 있으신 분들이라면 누구든 환영합니다!", // 동아리 간단 소개글
        "themeColor": "B466D4", // 동아리 테마 색상
        "memberCount": 101, // 동아리원 수
        "createdAt": "2023.05.21", // 동아리 생성 날짜 (YYYY.MM.DD)
        "manageState": true, // manage여부 (여기선 회장만?)
    }
})

//테마 컬러 리스트
export const themaColorAtom = atom({
    "key": "themaColorAtom",
    "default": [
        {
            "num": 0,
            "name": "Club Red",
            "code": "E94832",
        },
        {
            "num": 1,
            "name": "Club Orange",
            "code": "EC9323",
        },
        {
            "num": 2,
            "name": "Club Yellow",
            "code": "EFCD2A",
        },
        {
            "num": 3,
            "name": "Club Lime",
            "code": "3EC054",
        },
        {
            "num": 4,
            "name": "Club Green",
            "code": "22851B",
        },
        {
            "num": 5,
            "name": "Club Mint",
            "code": "2FEDCA",
        },
        {
            "num": 6,
            "name": "Club SkyBlue",
            "code": "669AEE",
        },
        {
            "num": 7,
            "name": "Club Blue",
            "code": "495FF8",
        },
        {
            "num": 8,
            "name": "Club Violet",
            "code": "B466D4",
        },
        {
            "num": 9,
            "name": "Club Pink",
            "code": "F03579",
        },
        {
            "num": 10,
            "name": "Club Brown",
            "code": "A15930",
        },
        {
            "num": 11,
            "name": "Club Gray",
            "code": "535353",
        }
    ]
})

export const checkClubNameAtom = atom({
    "key": "checkClubNameAtom",
    "default": false
})

export const selectBigAtom = atom({
    "key": "selectBigAtom",
    "default": false
})
export const selectSmallAtom = atom({
    "key": "selectSmallAtom",
    "default": false
})