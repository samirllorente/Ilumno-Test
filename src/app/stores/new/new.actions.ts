import { createAction, props } from "@ngrx/store";
import { New } from './new.model';

export const GET_NEWS = createAction('[New] Get news');
export const GET_NEWS_FAIL = createAction('[New] Get news fail');
export const GET_NEWS_SUCCESS = createAction(
    '[New] Get news success',
    props<{ news: Array<New> }>()
);
