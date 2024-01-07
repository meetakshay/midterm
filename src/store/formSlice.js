


import { createSlice } from "@reduxjs/toolkit";

const FORM_KEY = "FormSlice"

const loadState = () => {
    try{
      const form = localStorage.getItem(FORM_KEY);
      if(form === null){
        return undefined;
      }
      return JSON.parse(form);
    }catch(error){
      return undefined;
    }
  }
  
  const saveState = (state) => {
    try{
      const form = JSON.stringify(state);
      localStorage.setItem(FORM_KEY, form)
    }catch(error){
      console.error("An error occurred", error)
    }
  }


   const initialState = {
       userData : null,
       isAuthenticated : false,
    }


const FormSlice = createSlice({
    name :'form',
    initialState : loadState() || initialState,
    reducers:{
        signUp : (state,  action) => {
             state.userData = action.payload
             state.isAuthenticated = false;
             saveState(state)
        },

        login : (state, action) => {
          state.userData = action.payload;
          state.isAuthenticated = true;
          saveState(state)

        },
        logout : (state, action) => {
          state.userData = null;
          state.isAuthenticated = false;
          saveState(state)

        }

        

    }
})

export default  FormSlice.reducer
export const {signUp, login, logout } = FormSlice.actions
