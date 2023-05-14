import React from "react";
import type { ChangeEvent } from "react";
type state = {
    name: string;
    age: number | string;
};
function father() {
    return <div>father</div>;
}
interface MyProps {
    name: number;
}
class Son extends React.Component<MyProps> {
    age = 18;
    state: Readonly<state> = {
        name: "yxy",
        age: ""
    };
    handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        this.setState({
            age: +e.target.value + 1
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
            <span>app</span>
            {father()}
            <Son name={18} />
        </div>
    );
}

export default App;
