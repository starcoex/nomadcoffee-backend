import { Movie } from "@prisma/client";
import client from "../libs/client";

export default {
  Query: {
    movies: () => client.movie.findMany(),
    movie: (_, { id }: Movie) => {
      client.movie.findFirst({ where: { id } });
    },
  },
};
