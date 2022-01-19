import React from 'react';

export type DialogsDataPropsType = {
    id: string
    name: string
}
export const dialogsData: Array<DialogsDataPropsType> = [
    {id: "1", name: "John"},
    {id: "2", name: "Ann"},
    {id: "3", name: "Kate"},
    {id: "4", name: "John"},
    {id: "5", name: "Travis"},
]


export type MessageDataPropsType = {
    text: string
    id: number
}
export const messageData: Array<MessageDataPropsType> = [
    {id: 1, text: "Hello, how are you?"},
    {id: 2, text: "Are you happy?"},
    {id: 3, text: "Yes, I will go to London next month"},
]


export type PostDataPropsType = {
    message: string
    likeCount: number
}
export const postData: Array<PostDataPropsType> = [
    {message: "Hi, how are you?", likeCount: 12},
    {message: "It's my first post.", likeCount: 24},
]

export let state = {
    profilePage:
        {

            postData: postData,

        },
    dialogPage:
        {
            dialogsData: dialogsData,
            messageData: messageData
        }

}
