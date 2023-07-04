import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Movie, PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const typeDefs = `
  type Movie {
    id: Int!
    title: String!
    year: Int!
    genre: String
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    movies: [Movie]
    movie(id:Int!): Movie
  }
  type Mutation {
    createMovie(title: String!, year:Int!, genre:String): Movie
    deleteMovie(title: Int!): Movie
    updateMovie(id:Int!, year:Int!): Movie
  }
`;
const resolvers = {
  Query: {
    movies: () => client.movie.findMany(),
    movie: (_, { id }: Movie) => {
      client.movie.findFirst({ where: { id } });
    },
  },
  Mutation: {
    createMovie: (_, { title, year, genre }: Movie) => {
      return client.movie.create({
        data: {
          title,
          year,
          genre,
        },
      });
    },
    deleteMovie: (_, { id }: Movie) => {
      return client.movie.delete({ where: { id } });
    },
    updateMovie: (_, { id, year }: Movie) => {
      return client.movie.update({
        where: { id },
        data: {
          year,
        },
      });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
