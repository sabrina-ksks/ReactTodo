import { atom } from "recoil";

export const dialogOpenState = atom<boolean>({
  key: "dialogOpenState",
  default: false
});