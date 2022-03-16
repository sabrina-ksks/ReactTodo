import { atom } from "recoil";

export const tasksState = atom<Task[]>({
  key: "taskState",
  default: [
    {
      done: false,
      content: "Reactの学習",
      deadline: new Date('2022-04-01T12:00'),
      priority: 5
    },
    {
      done: true,
      content: "TypeScriptの学習",
      deadline: new Date('2022-05-01T18:54'),
      priority: 4
    },
    {
      done: false,
      content: "MUIの学習",
      deadline: new Date('2022-10-20T18:54'),
      priority: 1
    }
  ]
});