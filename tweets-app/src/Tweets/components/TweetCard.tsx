import React from 'react';
import { Card, Tag } from 'antd';

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
            <Tag color="magenta">{props.retweetCount} Retweets</Tag>
            <Tag color="green">{props.favoriteCount} Favorites</Tag>
        </Card>
    );
}

export default TweetCard;
