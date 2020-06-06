import { call, put, takeLatest } from 'redux-saga/effects'
import {LOAD_TWEETS, LOAD_TWEETS_FAIL, LOAD_TWEETS_SUCCESS} from "../actions/tweets.actions";
import {userTweetsApi} from "../api/user-tweets.api";

function* getTweets(action: any) {
    try {
        const tweets = yield call(userTweetsApi, action.payload);
        yield put({type: LOAD_TWEETS_SUCCESS, payload: tweets});
    } catch (e) {
        yield put({type: LOAD_TWEETS_FAIL, payload: e.message});
    }
}

export default  function* loadTweetsSaga() {
    yield takeLatest(LOAD_TWEETS, getTweets);
}
