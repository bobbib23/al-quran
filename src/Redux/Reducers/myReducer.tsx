import { combineReducers } from "@reduxjs/toolkit";
import { GetAudioReducer, GetSuratReducer } from "./audioReducer";

const rootReducer = combineReducers({
  GetAudioReducer,
  GetSuratReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
