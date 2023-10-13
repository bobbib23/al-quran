import axios from "axios";

export const BASE_URL = "https://equran.id/api/v2/";
export const GET_SURAT = BASE_URL + "surat";
export const GET_DETAIL_SURAT = GET_SURAT + ":idsurat";

export function getSurat() {
  return axios.get(GET_SURAT);
}

export function getDetailSurat() {
  return axios.get(GET_DETAIL_SURAT);
}
