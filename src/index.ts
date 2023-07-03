import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const todos = [
  {
    text: "todo",
  },
  {
    text: "todo2 asfas",
  },
];

const typeDefs = `
  type Todo {
    text: String
  }
  type Query {
    todos: [Todo]
  }
`;
const resolvers = {
  Query: {
    todos: () => todos,
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
