import React, { useState } from "react";
import type { ChangeEvent } from "react";
type props = {
    onAddTask: (text: string) => void;
};

export default function AddTask({ onAddTask }: props) {
    const [state, setState] = useState("");
    function handleAddTask() {
        onAddTask(state);
        setState("");
    }
    function handleChangeTask(e: ChangeEvent<HTMLInputElement>) {
        setState(e.target.value);
    }
    return (
        <>
            <div>
                <input type="text" value={state} onChange={(e) => handleChangeTask(e)} placeholder="添加任务" />
                <button onClick={handleAddTask}>添加</button>
            </div>
        </>
    );
}
