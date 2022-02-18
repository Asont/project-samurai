import {MessageDataPropsType, RootStateType} from "./state";

const sendMessage = "SEND-MESSAGE"

export const actionMessageCreater =(newMessage:string) => ({type:sendMessage, newText:newMessage})

let initialState = {
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
        }
}

const dialogsReducer = (state:any=initialState, action:any) =>{
    switch (action.type){
        case sendMessage:
        let newTextMessage:MessageDataPropsType = {id:32, text:action.newText}
            return state.dialogPage.messageData.push(newTextMessage)
        default: return state
    }
}

export default dialogsReducer