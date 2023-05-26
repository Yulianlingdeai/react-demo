import React from "react";
import { useState, useCallback, memo } from "react";
import type { ChangeEvent } from "react";

const A = ({ onClick }: { onClick: () => void }) => {
    // A 父组件的count变化时，A组件会不断的re-render
    console.log("case2: render_A");
    return <button onClick={onClick}>A组件+count</button>;
};
const B = memo(A);
export default function Case2() {
    const [count, setCount] = useState(0);
    const onChange = (data: ChangeEvent<HTMLInputElement>) => {
        setCount(+data.target.value);
    };
    const onClick = useCallback(() => {
        console.log(count + 1);
    }, [count]);

    return (
        <>
            <p>count:{count}</p>
            <input value={count} onChange={onChange} />
            <B onClick={onClick} />
        </>
    );
}
