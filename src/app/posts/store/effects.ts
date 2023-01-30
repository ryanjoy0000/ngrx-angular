import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PostsService } from '../services/posts.service';
import * as PostActions from './actions';

@Injectable()
export class PostsEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getPosts),
      mergeMap(() => {
        return this.postsService
          .getPosts()
          .pipe(
            map((posts) => PostActions.getPostsSuccess({ posts })),
            catchError(err => of(PostActions.getPostsFailure({error: err.message})))          
          );
      })
    )
  );

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
