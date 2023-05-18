import React, { useState } from "react";
import type { ChangeEvent } from "react";

type userInfo = {
    name: string;
    age: number | string;
};
export default function Father() {
    const [state, setState] = useState<userInfo>({
        name: "",
        age: ""
    });

    const [info, setInfo] = useState<userInfo>({
        name: "",
        age: ""
    });

    function handleClick() {
        setState(info);
        setInfo({
            name: "",
            age: ""
        });
    }
    function handleChangeName(e: ChangeEvent<HTMLInputElement>) {
        setInfo({
            ...info,
            name: e.target.value
        });
    }
    function handleChangeAge(e: ChangeEvent<HTMLInputElement>) {
        setInfo({
            ...info,
            age: e.target.value
        });
    }
    return (
        <div>
            <div>
                <span>姓名：{state.name}</span>
                <span>年龄：{state.age}</span>
            </div>
            <label>
                姓名：
                <input type="text" value={info.name} onChange={handleChangeName} />
            </label>
            <label>
                年龄：
                <input type="text" value={info.age} onChange={handleChangeAge} />
            </label>
            <button onClick={handleClick}>按钮</button>
        </div>
    );
}
