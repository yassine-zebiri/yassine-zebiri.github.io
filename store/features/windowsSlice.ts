import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { windowType } from '@/types'

// Define a type for the slice state
interface WindowsState {
  value: number,
  windows:windowType[]
}

// Define the initial state using that type
const initialState: windowType[] = []

export const windowsSlice = createSlice({
  name: 'windows',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addWindow:(state,action)=>{
      if(! state.find((item) => item.name === action.payload.name))
        
        state.push({
           /*  id:action.payload.id, */
            id:Math.ceil((new Date().getTime() * 159.5)/187.259),
            name:action.payload.name,
            top:action.payload.top,
            left:action.payload.left,
            cursor:action.payload.cursor,
            width:action.payload.width
        })
    },
    setPositionWindow:(state,action)=>{
        state.filter((item)=>item.id==action.payload.id)[0].left=action.payload.left;
        state.filter((item)=>item.id==action.payload.id)[0].top=action.payload.top;
        state.filter((item)=>item.id==action.payload.id)[0].cursor=action.payload.cursor;
    },
    DeleteWindow:(state,action)=>{
        const window=state.find((e)=>e.id==action.payload.id);
        if(window){
            const index=state.indexOf(window);
            state.splice(index,1);
            state=[...state];
        }
    }
  },
})

export const { addWindow ,setPositionWindow,DeleteWindow} = windowsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWindows = (state: RootState) => state.windows

export default windowsSlice.reducer