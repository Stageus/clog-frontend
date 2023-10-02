import { atom } from "recoil";


export const accountInfoAtom = atom({
    "key": "accountInfoAtom",
    "default": {
        "name": "이현아",
        "personalColor": "242424",
        "major": "인공지능공학과",
        "entryYear": "21",
        "createdAt": "20230512"
    }
})


// export const clubListAtom = atom({
//     "key": "accountInfoAtom",
//     "default": [
//         {
//             "id": "1",
//             "club": "MRA",
//             "profileImage": "url"
//         },
//         {
//             "id": "2",
//             "club": "테니스부",
//             "profileImage": "url"
//         }
//     ]
// })
