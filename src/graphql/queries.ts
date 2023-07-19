import { gql } from "graphql-request"


export const GET_POSTS = gql`
    query GET_RECENT_POSTS_FOR_HOME {
        posts {
            data {
            id
            attributes {
                post_title
                post_slug
                featured_media {
                data {
                    attributes {
                    url
                    }
                }
                }
            }
            }
        }
    }
`