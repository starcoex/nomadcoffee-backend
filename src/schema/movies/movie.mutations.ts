import { Movie } from "@prisma/client";
import client from "../../libs/client";

export default {
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
