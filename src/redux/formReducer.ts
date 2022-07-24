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
    loading: false,
  },
  reducers: {
    formReducer(state, action: PayloadAction<IForm>) {
      state.loading = true;
      if (action.payload) {
        state.data = action.payload;
        state.loading = false;
      }
    },
  },
});
export const { formReducer } = form.actions;
export default form.reducer;
