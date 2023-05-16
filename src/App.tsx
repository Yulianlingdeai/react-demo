import React, { useState } from "react";
import type { ChangeEvent } from "react";
type state = {
    name: string;
    age: number | string;
};
function Father() {
    const [state, setState] = useState({
        name: "",
        age: ""
    } as {
        name: string;
        age: number | string;
    });
    return (
        <div>
            <div>
                <span>姓名：{state.name}</span>
                <span>年龄：{state.age}</span>
            </div>
            <button onClick={() => setState({ name: "123", age: 18 })}>按钮</button>
        </div>
    );
}
class Son extends React.Component {
    age = 18;
    state: Readonly<state> = {
        name: "yxy",
        age: ""
    };
    handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        this.setState({
            age: +e.target.value
        });
    };
    render() {
        const { name, age } = this.state;
        return (
            <>
                <div>Son</div>
                <div>{name}</div>
                <div>{age}</div>
                <div>{this.age}</div>
                <input type="text" onChange={this.handleChangeAge} value={age} placeholder="请输入年龄" />
            </>
        );
    }
}
/**这是根组件 */
function App() {
    return (
        <div>
            {Father()}
            <br />
            <br />
            <Son />
        </div>
    );
}

export default App;
