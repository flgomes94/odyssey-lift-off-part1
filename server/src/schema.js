const {gql} = require('apollo-server')

const typeDefs = gql`
    type Query {
        "Query to get all tracks array for the homepageGrid"
        tracksFromHome:[Track!]!
    }
    "A track is a group of modules that teaches about a specific topic"
    type Track{
        id:ID!
        "the track title"
        title: String!
        "the tracker main's author"
        author:Author!
        "The track's approximate length to complete, in minutes"
        length: Int
        "illustration to display the track card page detail"
        thumbnail: String
        "the number of modules that this track contains"
        modulesCount:Int
    }
    "Author of a completed track"
    type Author {
        id:ID!
        "name of one author"
        name:String!
        "author's profile picture url"
        photo:String
    }

`;

module.exports = typeDefs;