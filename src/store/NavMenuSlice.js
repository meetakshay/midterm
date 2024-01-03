


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showMenu : false,
    toggleForm:false,
    isLoading:true,
}

const NavMenuSlice = createSlice({
    name: 'menubar',
    initialState,
    reducers: {
        menuOpen : (state) => {
            state.showMenu = !state.showMenu
        },
        showForm : (state) => {
            state.toggleForm = !state.toggleForm
        },
        loading : (state) => {
            state.isLoading = !state.isLoading
        },
    }
})

export default NavMenuSlice.reducer;
export const {menuOpen, showForm, loading} = NavMenuSlice.actions;