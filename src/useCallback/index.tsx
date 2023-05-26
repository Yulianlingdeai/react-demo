import React from "react";
import { useState, useCallback, memo } from "react";

//默认情况下，当一个组件重新渲染时，React 会递归地重新渲染它的所有子组件。
const A = ({ onClick }: { onClick: () => void }) => {
    // A 父组件的count变化时，A组件不会re-render
    console.log("case2: render_A");
    return <button onClick={onClick}>A组件+count</button>;
};
const B = memo(A);
export default function Case2() {
    const [count, setCount] = useState(0);

    const onClick = useCallback(() => {
        setCount((count) => count + 1);
    }, []);
    console.log(onClick);

    return (
        <>
            <p>count:{count}</p>
            <B onClick={onClick} />
        </>
    );
}
