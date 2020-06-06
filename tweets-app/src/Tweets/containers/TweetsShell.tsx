import React, {useEffect} from 'react';
import {loadTweets} from "../../store/actions/tweets.actions";
import {connect, DispatchProp, MapDispatchToProps} from "react-redux";

function TweetsShell(props: any) {
    useEffect(() => {
        props.loadTweets('realDonaldTrump');
    }, []);

    if(props.loadingTweets) {
        return (
            <h2>Loading...</h2>
        );
    }else {
        return (
            <div>
                <h1>Hello {props.screenName}</h1>
                <ul>
                    {props.tweets.map((t: any) => <li>{t.text}</li>)}
                </ul>
            </div>

        );
    }
}

function mapStateToProps(state: any) {
    return {
        tweets: state.tweets.selectedTwitterAccount ? state.tweets.tweets[state.tweets.selectedTwitterAccount] : [],
        screenName: state.tweets.selectedTwitterAccount,
        loadingTweets: state.tweets.isLoading
    }
}


function mapDispatchToProps(dispatch: MapDispatchToProps<any, any>) {

    return {
      loadTweets: (screenName: string) => dispatch(loadTweets(screenName))
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(TweetsShell);
