import { atom } from "recoil";

export const dialogContentState = atom<Task>({
  key: "dialogContentState",
  default: {
    done: false,
    content: "",
    deadline: null,
    priority: 1
  }
});