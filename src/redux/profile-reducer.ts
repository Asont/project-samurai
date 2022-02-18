import {PostDataPropsType} from "./state";

const actionAddNewPost = "ADD-NEW-POST"


export const actionNewPostCreater = (newPost: string) =>

    (
    {type: actionAddNewPost, postMassege: newPost})

let initailState = {
    profilePage:

        {
            messageForNewPost: "",
            postData: [
                {id: 1, message: "Hi, how are you?", likeCount: 12},
                {id: 2, message: "It's my first post.", likeCount: 24},
            ],

        },
}

const profileReducer = (state: any =initailState, action: any) => {
    switch (action.type) {
        case actionAddNewPost:
            debugger
            let newPost: PostDataPropsType = {id: 13, message: action.postMassege, likeCount: 4}
            return state.profilePage.postData.push(newPost)
        default:
            return state
    }
}

export default profileReducer

