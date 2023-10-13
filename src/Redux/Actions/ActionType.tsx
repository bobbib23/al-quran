export enum ActionType {
  GET_AUDIO = "GET_AUDIO",
  GET_SURAT = "GET_SURAT",
}

interface ActionGetAudio {
  type: ActionType.GET_AUDIO;
  audioku: any;
}

interface ActionGetSurat {
  type: ActionType.GET_SURAT;
  surat: any;
}

export type Action = ActionGetAudio | ActionGetSurat;
