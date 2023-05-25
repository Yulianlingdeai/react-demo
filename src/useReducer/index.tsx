import React from "react";
// import { useReducer } from "react";
// import type { Reducer } from "react";
import { useImmerReducer } from "use-immer";
import type { ImmerReducer } from "use-immer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
type taskType = {
    id: number;
    text: string;
    done: boolean;
};

type actionType =
    | {
          type: "deleted";
          id: number;
      }
    | {
          type: "changed";
          task: taskType;
      }
    | {
          type: "added";
          id: number;
          text: string;
      };

let nextId = 3;
const initialTasks: taskType[] = [
    { id: 0, text: "参观卡夫卡博物馆", done: true },
    { id: 1, text: "看木偶戏", done: false },
    { id: 2, text: "打卡列侬墙", done: false }
];

export default function Container() {
    // const [tasks, dispatch] = useReducer<Reducer<taskType[], actionType>>(tasksReducer, initialTasks);
    const [tasks, dispatch] = useImmerReducer<taskType[], actionType>(tasksReducer2, initialTasks);
    function handleAddTask(text: string) {
        dispatch({
            type: "added",
            id: nextId++,
            text: text
        });
    }
    function handleChangeTask(task: taskType) {
        dispatch({
            type: "changed",
            task: task
        });
    }
    function handleDeleteTask(taskId: number) {
        dispatch({
            type: "deleted",
            id: taskId
        });
    }
    return (
        <>
            <div>这是useReducer</div>
            <h1>布拉格的行程安排</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
        </>
    );
}

const tasksReducer2: ImmerReducer<taskType[], actionType> = (draft, action) => {
    switch (action.type) {
        case "added": {
            draft.push({
                id: action.id,
                text: action.text,
                done: false
            });
            break;
        }
        case "changed": {
            const index = draft.findIndex((t) => t.id === action.task.id);
            draft[index] = action.task;
            break;
        }
        case "deleted": {
            return draft.filter((t) => t.id !== action.id);
        }
        // default: {
        //     throw Error("未知 action：" + action.type);
        // }
    }
};

// const tasksReducer: Reducer<taskType[], actionType> = (tasks, action) => {
//     switch (action.type) {
//         case "added": {
//             return [
//                 ...tasks,
//                 {
//                     id: action.id,
//                     text: action.text,
//                     done: false
//                 }
//             ];
//         }
//         case "changed": {
//             return tasks.map((t) => {
//                 if (t.id === action.task.id) {
//                     return action.task;
//                 } else {
//                     return t;
//                 }
//             });
//         }
//         case "deleted": {
//             return tasks.filter((t) => t.id !== action.id);
//         }
//         // default: {
//         //     throw Error("未知 action：" + action.type);
//         // }
//     }
// };
