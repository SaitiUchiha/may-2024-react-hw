export interface IComment {
    "id": number,
    "body": string,
    "postId": number,
    "likes": number,
    "user":ICommentUserDetails,
}

export interface ICommentUserDetails {
    "id": number,
    "username": string,
    "fullName": string
}