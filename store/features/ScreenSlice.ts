import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { screenType } from '@/types'



const initialState:screenType = {
    active:false,
    name:""
}

export const ScreenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setStateScreen:(state,action)=>{
        state.active=true;
        state.name=action.payload.name

    },
    setStateScreenClose:(state)=>{
        state.active=false;
        state.name="";
    }
  },
})

export const {setStateScreen,setStateScreenClose } = ScreenSlice.actions

export const selectScreen = (state: RootState) => state.screen

export default ScreenSlice.reducer