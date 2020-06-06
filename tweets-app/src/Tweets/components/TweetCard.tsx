import React from 'react';
import { Card, Tag } from 'antd';
import Moment from 'react-moment';

export interface ITweetCard {
    text: string;
    createdAt: string;
    tweetLink: string;
    retweetCount: number;
    favoriteCount: number;
}

function TweetCard(props: ITweetCard) {
    return (
        <Card bordered={false} style={{ marginBottom: 15 }}>
            <p>{props.text}</p>
            <p style={{ margin: 0, textAlign: "right" }}>
                Posted:
                <Moment format="DD-MM-YYYY hh:mm">
                    {props.createdAt}
                </Moment>
            </p>
            <Tag color="magenta">{props.retweetCount} Retweets</Tag>
            <Tag color="green">{props.favoriteCount} Favorites</Tag>
        </Card>
    );
}

export default TweetCard;
