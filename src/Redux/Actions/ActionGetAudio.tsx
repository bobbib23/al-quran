import { Dispatch } from "redux";
import { ActionType, Action } from "./ActionType";
import axios from "axios";
import { GET_SURAT } from "../../Auth/authApi";

export const getAudio = (audi: any) => async (dispatch: Dispatch<Action>) => {
  try {
    const response = audi;
    dispatch({
      type: ActionType.GET_AUDIO,
      audioku: response,
    });
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
};

export const getSuratApi = () => async (dispatch: Dispatch<Action>) => {
  try {
    const response = await axios.get(GET_SURAT, { responseType: "json" });
    dispatch({
      type: ActionType.GET_SURAT,
      surat: response.data.data,
    });
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
};
