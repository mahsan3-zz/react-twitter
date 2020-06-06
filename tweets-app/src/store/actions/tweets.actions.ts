import {Action} from "redux";

export const LOAD_TWEETS = 'LOAD_TWEETS';
export const LOAD_TWEETS_SUCCESS = 'LOAD_TWEETS_SUCCESS';
export const LOAD_TWEETS_FAIL = 'LOAD_TWEETS_FAIL';

/**
 * =====================================================
 *                      LOAD TWEETS
 * =====================================================
 */
export const loadTweets = (screenName: string) => ({
    type: LOAD_TWEETS,
    payload: screenName
});

export const loadTweetsSuccess = (tweets: any) => ({
    type: LOAD_TWEETS_SUCCESS,
    payload: tweets
});

export const loadTweetsFail = (e: any) => ({
    type: LOAD_TWEETS_FAIL,
    payload: e
});
