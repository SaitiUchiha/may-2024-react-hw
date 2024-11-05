import {IComment} from "./IComment";
import {IPost} from "./IPost";

export type PostWithCommentsType = IPost & {comments:IComment[]}