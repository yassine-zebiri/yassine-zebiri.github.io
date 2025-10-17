import { configureStore } from '@reduxjs/toolkit'
import { windowsSlice } from './features/windowsSlice'
import { ScreenSlice } from './features/ScreenSlice'
// ...

export const store = configureStore({
  reducer: {
    windows:windowsSlice.reducer,
    screen:ScreenSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch