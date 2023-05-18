import React from "react";

import type { ChangeEvent } from "react";
type state = {
    name: string;
    age: number | string;
};
interface MyProps {
    name: number;
}
export default class Son extends React.Component<MyProps> {
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
                <br />
                <br />
                <div>Son{this.props.name}</div>
                <div>{name}</div>
                <div>{age}</div>
                <div>{this.age}</div>
                <input type="text" onChange={this.handleChangeAge} value={age} placeholder="请输入年龄" />
            </>
        );
    }
}
