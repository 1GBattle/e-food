import baseApi from "@/app/lib/features/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addLike: builder.mutation<void, { recipeId: string; userId: string }>({
            queryFn: (args) => {
                const {recipeId, userId} = args;
                try {
                    addLike
                }
            },
        }),
    }),
});

export const {useAddLikeMutation} = userApi;
