import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: "The Witcher"},
    {id: 2, title: "Foundation"},
    {id: 3, title: "Harry Potter and the Philosopher's Stone"},
    {id: 4, title: "To Kill a Mockingbird"},
    {id: 5, title: "1984"},
    {id: 6, title: "The Great Gatsby"},
    {id: 7, title: "The Catcher in the Rye"},
    {id: 8, title: "Pride and Prejudice"},
    {id: 9, title: "The Lord of the Rings"},
    {id: 10, title: "The Hobbit"},
    {id: 11, title: "The Hunger Games"},
    {id: 12, title: "The Da Vinci Code"},
    {id: 13, title: "Game of Thrones"},
    {id: 14, title: "The Alchemist"},
    {id: 15, title: "The Shining"},
    {id: 16, title: "The Girl with the Dragon Tattoo"},
    {id: 17, title: "The Road"},
    {id: 18, title: "Dune"},
    {id: 19, title: "The Chronicles of Narnia"},
    {id: 20, title: "The Girl on the Train"}
]

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {}
})

export default ordersSlice.reducer;