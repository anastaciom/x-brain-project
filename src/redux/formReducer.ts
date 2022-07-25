import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IForm {
  email: string;
  name: string;
  gender: string;
}

const form = createSlice({
  name: "form",
  initialState: {
    data: <IForm>{ email: "", name: "", gender: "" },
  },
  reducers: {
    formReducer(state, action: PayloadAction<IForm>) {
      if (action.payload) {
        state.data = action.payload;
      }
    },
  },
});
export const { formReducer } = form.actions;
export default form.reducer;
