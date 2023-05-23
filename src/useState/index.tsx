import React, { useState } from "react";
import type { ChangeEvent } from "react";
// 只有当你在相同的位置渲染相同的组件时，React 才会一直保留着组件的 state。
// 在相同位置重置 state
// 1.将组件渲染在不同的位置
// 2.使用 key 赋予每个组件一个明确的身份
// 请记住 key 不是全局唯一的。它们只能指定 父组件内部 的顺序。
// 数组中一个合适的 key 可以帮助 React 推断发生了什么，从而得以正确地更新 DOM 树。
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
