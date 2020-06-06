import React from 'react';
import {PageHeader} from "antd";

export interface ITwitterUserInfo {
    name: string;
    screenName: string;
    description: string;
    followersCount: number;
    profileImage: string;
}

function TwitterUserHeader(props: ITwitterUserInfo) {
    return (
        <PageHeader
            title={props.name}
            subTitle={props.screenName}
            avatar={{ src: props.profileImage }}
        >
            <p>{props.description}</p>
        </PageHeader>
    );
}

export default TwitterUserHeader;
