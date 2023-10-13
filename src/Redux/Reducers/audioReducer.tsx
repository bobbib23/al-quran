import { Action, ActionType } from "../Actions/ActionType";

const initialState = {
  audioku: {},
  surat: {},
};

export const GetAudioReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_AUDIO:
      return {
        audioku: action.audioku,
      };
    default:
      return state;
  }
};

export const GetSuratReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_SURAT:
      return {
        surat: action.surat,
      };
    default:
      return state;
  }
};
