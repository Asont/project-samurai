import profileReducer from "./profile-reducer";
import dialogsReducer from "./dilalogs-reducer";

let reRenderTree = (state: RootStateType) => {
    console.log("state changed")
}

//types
export type DialogsDataPropsType = {
    id: string
    name: string
}
export type MessageDataPropsType = {
    text: string
    id: number
}
export type PostDataPropsType = {
    id: number
    message: string
    likeCount: number
}
type ProfilePageType = {
    postData: Array<PostDataPropsType>
    messageForNewPost: string
}
type DialogPageType = {
    dialogsData: Array<DialogsDataPropsType>
    messageData: Array<MessageDataPropsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}





let store = {
    _state: {
        profilePage:

            {
                messageForNewPost: "",
                postData: [
                    {id: 1, message: "Hi, how are you?", likeCount: 12},
                    {id: 2, message: "It's my first post.", likeCount: 24},
                ],

            },
        dialogPage:
            {
                dialogsData: [
                    {id: "1", name: "John"},
                    {id: "2", name: "Ann"},
                    {id: "3", name: "Kate"},
                    {id: "4", name: "John"},
                    {id: "5", name: "Travis"},
                ],
                messageData: [
                    {id: 1, text: "Hello, how are you?"},
                    {id: 2, text: "Are you happy?"},
                    {id: 3, text: "Yes, I will go to London next month"},
                ],
            },
        sidebar : {}

    },
    _callsubscriber() {

    },
    getState() {
        return this._state
    },
    subscribe(observe: any) {
        this._callsubscriber = observe
    },
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        debugger
        reRenderTree(this._state)
    }
}




export default store