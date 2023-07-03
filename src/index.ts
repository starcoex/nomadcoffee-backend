import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `
  type Movie {
    title: String
    year: Int
  }
  type Query {
    movies: [Movie]
    movie: Movie
  }
  type Mutation {
    createMovie(title:String): Boolean
    deleteMovie(title:String): Boolean
  }
`;
const resolvers = {
  Query: {
    movies: () => [],
    movie: () => ({ title: "Movie", year: 40 }),
  },
  Mutation: {
    createMovie: (root, args, context, info) => {
      console.log(root, args, context, info);
      return true;
    },
    deleteMovie: (root, args, context, info) => {
      console.log(root, args, context, info);
      return true;
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
