import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://spotify-graphql-server.herokuapp.com/graphql',
    cache: new InMemoryCache()
});

const music = async (req, res) => {
    if (req.method !== 'POST') return res.status(404);
    const { search } = req.body;

    // const reSpotify = await client.query({
    //     query: gql`
    //         query {
    //             queryArtists(byName:"${search}") {
    //                 name
    //                 id
    //                 image
    //             }
    //         }
    //     `
    // }).catch(e => res.status(500).json(e));
    
    // res.status(200).json(reSpotify.data);

    return client.query({
        query: gql`
            query {
                queryArtists(byName:"${search}") {
                    name
                    id
                    image
                }
            }
        `
    })
        .then(r => res.status(200).json(r.data))
        .catch(e => res.status(500).json(e));
}

export default music;