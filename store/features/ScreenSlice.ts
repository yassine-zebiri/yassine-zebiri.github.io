import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { screenType } from '@/types'



const initialState:screenType = {
    active:false,
    name:"",
    sound:true
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
    },
    setStateSound:(state)=>{
      state.sound=!state.sound;
    }
  },
 
})

export const {setStateScreen,setStateScreenClose,setStateSound } = ScreenSlice.actions

export const selectScreen = (state: RootState) => state.screen

export default ScreenSlice.reducer