import { createSlice } from "@reduxjs/toolkit";


const contactList = createSlice({
    name: "contacts",
    initialState:[],
    reducers:{
        addContact:{
            reducer(state, action){
            const contactNameLowerCase = action.payload.name.toLowerCase();
            const isInContact = state.find (el=>el.name.toLowerCase()===contactNameLowerCase);
            if(isInContact){
            alert(`${action.payload.name} is already in contact`)
            return }
            state.push(action.payload);},
            prepare(userObj) {
                return {
                  payload: userObj,
                };}
            
        },
    
        deleteContact(state, action){
            return state.filter(contact=> contact.id !== action.payload)
        },
    }

})

export const { addContact, deleteContact} = contactList.actions;
export const contactsReducer = contactList.reducer;
