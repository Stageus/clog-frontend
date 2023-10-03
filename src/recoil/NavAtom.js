import { atom } from "recoil";

//nav에 뜨는 나의 계정정보
export const accountInfoAtom = atom({
    "key": "accountInfoAtom",
    "default": {
        "name": "이현아",
        "personalColor": "239858",
        "major": "인공지능공학과",
        "entryYear": "21",
        "createdAt": "20230512"
    }
})

//알람 개수
export const alarmNumAtom = atom({
    "key": "alarmNumAtom",
    "default": 30
})

//가입한 동아리 목록
export const clubListAtom = atom({
    "key": "clubListAtom",
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

export const alarmListAtom = atom({
    "key": "alarmListAtom",
    "default": [
        {
            "isNew": true,
            "type": "clubkey",
            "sentence": "[홈] 내가 쓴 글에 댓글이 달렸습니다.",
            "key": 0
        },
        {
            "isNew": true,
            "type": "clubkey",
            "sentence": "[홈] 내가 쓴 댓글에 답글이 달렸습니다.",
            "key": 0
        },
        {
            "isNew": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isNew": false,
            "type": "clubkey",
            "sentence": "[MRA] 운영진으로 임명되었습니다.",
            "key": 0
        },
        {
            "isNew": false,
            "type": "clubkey",
            "sentence": "[테니스부] 회장으로 임명되었습니다.",
            "key": 0
        },
        {
            "isNew": false,
            "type": "clubkey",
            "sentence": '[테니스부] "유동선"님이 댓글을 달았습니다.',
            "key": 0
        },
        {
            "isNew": false,
            "type": "clubkey",
            "sentence": "[테니스부] 일반 동아리원이 되었습니다.",
            "key": 0
        },
        {
            "isNew": true,
            "type": "clubkey",
            "sentence": "[홈] 내가 쓴 글에 댓글이 달렸습니다.",
            "key": 0
        },
        {
            "isNew": true,
            "type": "clubkey",
            "sentence": "[홈] 내가 쓴 댓글에 답글이 달렸습니다.",
            "key": 0
        },
        {
            "isNew": false,
            "type": "clubkey",
            "sentence": "[테니스부] 새로운 동아리에 가입되었습니다",
            "key": 0
        },
        {
            "isNew": false,
            "type": "clubkey",
            "sentence": "[MRA] 운영진으로 임명되었습니다.",
            "key": 0
        }
        // {
        //     "isNew": false,
        //     "type": "clubkey",
        //     "sentence": "[테니스부] 회장으로 임명되었습니다.",
        //     "key": 0
        // },
        // {
        //     "isNew": false,
        //     "type": "clubkey",
        //     "sentence": '[테니스부] "유동선"님이 댓글을 달았습니다.',
        //     "key": 0
        // },
        // {
        //     "isNew": false,
        //     "type": "clubkey",
        //     "sentence": "[테니스부] 일반 동아리원이 되었습니다.",
        //     "key": 0
        // }
    ]
})


