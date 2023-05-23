import React, { useState } from "react";
import type { ChangeEvent } from "react";
type taskType = {
    id: number;
    text: string;
    done: boolean;
};
type props = {
    tasks: taskType[];
    onChangeTask: (task: taskType) => void;
    onDeleteTask: (taskId: number) => void;
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: props) {
    const [editState, setEditState] = useState({
        id: -1,
        text: "",
        done: false
    });
    function handleChangeState(e: ChangeEvent<HTMLInputElement>, task: taskType) {
        onChangeTask({
            ...task,
            done: e.target.checked
        });
    }
    function handleEditText(task: taskType) {
        if (task.id === editState.id) {
            onChangeTask({
                ...task,
                text: editState.text
            });
            setEditState({
                id: -1,
                text: "",
                done: false
            });
        } else {
            setEditState({
                ...task
            });
        }
    }
    function handleChangeText(e: ChangeEvent<HTMLInputElement>) {
        setEditState({
            ...editState,
            text: e.target.value
        });
    }
    return (
        <>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={task.done}
                                    onChange={(e) => handleChangeState(e, task)}
                                />
                                {editState.id === task.id ? (
                                    <input value={editState.text} onChange={(e) => handleChangeText(e)} />
                                ) : (
                                    task.text
                                )}
                                <button onClick={() => handleEditText(task)}>
                                    {editState.id === task.id ? "保存" : "编辑"}
                                </button>
                                <button onClick={() => onDeleteTask(task.id)}>删除</button>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
