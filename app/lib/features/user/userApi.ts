import baseApi from "@/app/lib/features/baseApi";
import User from "@/app/models/User.model";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: (userId) => ``,
    }),
    addLike: builder.mutation<void, { userId: string; recipeId: string }>({
      queryFn: (args) => {},
    }),
  }),
});

export const {} = userApi;
