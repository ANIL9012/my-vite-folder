import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
           const text = action.payload.trim();

           if(text.length > 0){
            state.items.push({id: nanoid(), text});
           }
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload
            const updatedText = text.trim();
            if(updatedText.length > 0){
                const todo = state.items.find(todo=> todo.id === id);
                if(todo){
                    todo.text = updatedText;
                }
            }
        },

    },
});

export const {addTodo, deleteTodo, updateTodo} = todosSlice.actions;

export default todosSlice.reducer;