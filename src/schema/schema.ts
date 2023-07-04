const path = require("path");

import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";

const { loadFiles } = require("@graphql-tools/load-files");

import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";

// const typesArray = loadFilesSync(path.join(__dirname, "./*.types.ts"));
// const resolversArray = loadFilesSync(path.join(__dirname, "./*.resolvers.ts"));

// const loadedTypes = loadFilesSync(`${__dirname}/*.types.ts`);
// const loadedTypes = loadFilesSync(`${__dirname}/*.types.ts`);
// const loadedTypes = loadFilesSync(path.join(__dirname, "./**/*.types.*"));
// const loadedResolvers = loadFilesSync(`${__dirname}/*.resolvers.ts`);
// const loadedResolvers = loadFilesSync(
//   path.join(__dirname, "./**/*.resolvers.*")
// );
const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(
  `${__dirname}/**/*.{queries,mutations}.js`
);

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
