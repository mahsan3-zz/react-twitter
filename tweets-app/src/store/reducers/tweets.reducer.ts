import {Action, AnyAction} from "redux";
import {LOAD_TWEETS, LOAD_TWEETS_FAIL, LOAD_TWEETS_SUCCESS} from "../actions/tweets.actions";

// interface ITweetObject {
//     name: string;
//     post: string;
// }

interface IAllTweets {
    [key: string]: any[];
}

interface ITweetsState {
    selectedTwitterAccount: string;
    isLoading: boolean;
    tweets: IAllTweets;
}

const initialState: ITweetsState = {
    selectedTwitterAccount: '',
    isLoading: true,
    tweets: {}
};

export default function tweetsReducer(state = initialState, action: AnyAction): ITweetsState {

    switch (action.type) {

        case LOAD_TWEETS:
            return {
                ...state,
                selectedTwitterAccount: action.payload,
                isLoading: true
            };

        case LOAD_TWEETS_SUCCESS:
            return {
                ...state,
                tweets: {
                    ...state.tweets,
                    [state.selectedTwitterAccount]: action.payload
                },
                isLoading: false
            };

        case LOAD_TWEETS_FAIL:
            return initialState;

        default:
            return state;

    }

}
