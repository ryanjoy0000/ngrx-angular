import { createReducer, on } from "@ngrx/store";
import { PostsStateInterface } from "../types/postsState.interface";
import * as PostActions from "./actions";

// set initial state
export const initialState: PostsStateInterface = <PostsStateInterface>{
    isLoading: false,
    posts: [],
    error: null
};

// create a reducer of actions
export const reducers = createReducer(
    initialState,
    on(
        PostActions.getPosts,
        (state) => ({...state, isLoading: true})
    ),
    on(
        PostActions.getPostsSuccess,
        (state, action) => ({...state, isLoading: false, posts: action.posts})
    ),
    on(
        PostActions.getPostsFailure,
        (state, action) => ({...state, isLoading: false, error: action.error})
    ),
    );