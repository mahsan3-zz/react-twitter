import React, {useEffect} from 'react';
import {loadTweets} from "../../store/actions/tweets.actions";
import {connect, MapDispatchToProps} from "react-redux";
import {Divider, Spin} from "antd";
import TweetCard, { ITweetCard } from "../components/TweetCard";
import TwitterUserHeader, {ITwitterUserInfo} from "../components/TwitterUserHeader";

function TweetsShell(props: any) {
    useEffect(() => {}, []);

    if(props.loadingTweets) {
        return (
            <Spin size="large" />
        );
    }else {
        return (
            <div>

                { props.accountInfo ? <TwitterUserHeader {...props.accountInfo} /> : null }

                <Divider>Latest Tweets</Divider>

                {props.tweets.map((t: ITweetCard, i: number) => (
                    <TweetCard key={i} {...t} />
                ))}

            </div>

        );
    }
}

function formatTweets(t: any): ITweetCard {
    return {
        text: t.text,
        createdAt: t.created_at,
        tweetLink: t.entities.urls.url,
        retweetCount: t.retweet_count,
        favoriteCount: t.favorite_count
    };
}

function getTweetsForAccount(state: any) {
    if(state.tweets.selectedTwitterAccount && state.tweets.tweets[state.tweets.selectedTwitterAccount]) {
        return state.tweets.tweets[state.tweets.selectedTwitterAccount].map((t: any) => formatTweets(t));
    }else {
        return [];
    }
}

function getTwitterAccountInfo(state: any): ITwitterUserInfo | null {
    const tweets = state.tweets.selectedTwitterAccount && state.tweets.tweets[state.tweets.selectedTwitterAccount];
    if(tweets && tweets.length >= 1) {
        const userInfo = tweets[0].user;
        return {
            name: userInfo.name,
            screenName: userInfo.screen_name,
            description: userInfo.description,
            followersCount: userInfo.followers_count,
            profileImage: userInfo.profile_image_url
        }
    }else {
        return null;
    }
}

function mapStateToProps(state: any) {
    return {
        tweets: getTweetsForAccount(state),
        screenName: state.tweets.selectedTwitterAccount,
        loadingTweets: state.tweets.isLoading,
        accountInfo: getTwitterAccountInfo(state)
    }
}

function mapDispatchToProps(dispatch: MapDispatchToProps<any, any>) {
    return {
      loadTweets: (screenName: string) => dispatch(loadTweets(screenName))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetsShell);
