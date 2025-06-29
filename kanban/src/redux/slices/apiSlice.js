import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["user-list","task-list", "tanks-by-id"],
  endpoints: (builder) => ({

    getusers : builder.query({
      query : () => "/users",
      providesTags:["user-list"]
    }),
    addUsers: builder.mutation({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["user-list"],
    }),
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["task-list"],
    }),
    getTaskId: builder.query({
      query: (taskId) => `/tasks/${taskId}`,
      providesTags: ["tanks-by-id"],
    }),
    addTask: builder.mutation({
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["task-list"],
    }),
    updateTask: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `tasks/${id}`,
        method: "PATCH",
        body: rest,
      }),
      invalidatesTags: ["task-list"],
    }),
    editTask: builder.mutation({
      query: (editTask) => ({
        url: `/tasks/${editTask.id}`,
        method: "PUT",
        body: editTask,
      }),
      invalidatesTags: ["task-list", "tanks-by-id"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE", // Capitalized correctly
      }),
      invalidatesTags: ["task-list", "task-by-id"], // Fix typo: 'tanks-by-id' → 'task-by-id'
    }),

    
  }),
});
export const {
  useGetusersQuery,
  useAddUsersMutation,
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useGetTaskIdQuery,
  useEditTaskMutation,
  useDeleteTaskMutation,
} = apiSlice;
