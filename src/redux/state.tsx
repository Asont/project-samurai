

let reRenderTree =(state:RootStateType)=> {
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
    id:number
    message: string
    likeCount: number
}
type ProfilePageType ={
    postData:Array<PostDataPropsType>
    messageForNewPost:string
}
type DialogPageType = {
    dialogsData:Array<DialogsDataPropsType>
    messageData:Array<MessageDataPropsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

//state
/*export let state:RootStateType = {
    profilePage:

        {
            messageForNewPost:"",
            postData:  [
                {id:1, message: "Hi, how are you?", likeCount: 12},
                {id:2, message: "It's my first post.", likeCount: 24},
            ],

        },
    dialogPage:
        {
            dialogsData : [
                {id: "1", name: "John"},
                {id: "2", name: "Ann"},
                {id: "3", name: "Kate"},
                {id: "4", name: "John"},
                {id: "5", name: "Travis"},
            ],
            messageData:  [
                {id: 1, text: "Hello, how are you?"},
                {id: 2, text: "Are you happy?"},
                {id: 3, text: "Yes, I will go to London next month"},
            ],
        }

}*/

//functions
/*export const addNewMessageText = (postMassege:string) => {
    let newPost:PostDataPropsType = {id:4, message:postMassege, likeCount:4}
    state.profilePage.postData.push(newPost)
    reRenderTree(state);

}
export const changeText = (text:string)=>{
    state.profilePage.messageForNewPost=text
    reRenderTree(state);

}
export const subscribe = (observe:any)=> {
    reRenderTree=observe
}*/


let store = {
    _state: {
        profilePage:

            {
                messageForNewPost:"",
                postData:  [
                    {id:1, message: "Hi, how are you?", likeCount: 12},
                    {id:2, message: "It's my first post.", likeCount: 24},
                ],

            },
        dialogPage:
            {
                dialogsData : [
                    {id: "1", name: "John"},
                    {id: "2", name: "Ann"},
                    {id: "3", name: "Kate"},
                    {id: "4", name: "John"},
                    {id: "5", name: "Travis"},
                ],
                messageData:  [
                    {id: 1, text: "Hello, how are you?"},
                    {id: 2, text: "Are you happy?"},
                    {id: 3, text: "Yes, I will go to London next month"},
                ],
            }

    },
    getState () {
        debugger
        return this._state
    },
    addNewMessageText (postMassege:string)  {
        debugger
        let newPost:PostDataPropsType = {id:1, message:postMassege, likeCount:4}
        this._state.profilePage.postData.push(newPost)
        reRenderTree(this._state);

    },
     changeText (text:string){
        this._state.profilePage.messageForNewPost=text
        reRenderTree(this._state);

    },
     subscribe (observe:any) {
        this.reRenderTree=observe
    },
     reRenderTree (state:RootStateType) {
        console.log("state changed")
    },

}

export default store