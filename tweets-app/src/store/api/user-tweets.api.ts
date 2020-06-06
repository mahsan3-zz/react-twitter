const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAMHt9gAAAAAAan4Ola9b%2B%2BNRRn2s1j%2BbtFusd8I%3D8vOVUNdCrRJaWEQseActwvS6EnnU9yB1kECaJVDnPe4zueSknr';
const numberOfTweets = 40;
const tweetsApiUrl = `/1.1/statuses/user_timeline.json?count=${numberOfTweets}&screen_name=`;
export const userTweetsApi = async(screenName: string) => {
    try {

        const response = await fetch(tweetsApiUrl + screenName, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        });
        return await response.json();

    } catch (e) {

        console.log('We had an error...');
        console.log(e);

    }
}
