import { PostsStateInterface } from '../posts/types/postsState.interface';

// global state of the application
export interface AppStateInterface {
  posts: PostsStateInterface;
}
