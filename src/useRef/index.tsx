import React from "react";
import { useRef } from "react";
// ref添加到不是原生的子组件需要用到forwardRef
// useImperativeHandle只暴露需要的功能
// const MyInput = forwardRef((props, ref) => {
//     const realInputRef = useRef(null);
//     useImperativeHandle(ref, () => ({
//          // 只暴露 focus，没有别的
//         focus() {
//             realInputRef.current.focus();
//         }
//     }));
//     return <input {...props} ref={realInputRef} />;
// });
// flushSync立即更新dom
// flushSync(() => {
//     setTodos([ ...todos, newTodo]);
// });

export default function CatFriends() {
    const itemsRef = useRef<Map<number, HTMLElement> | null>(null);

    function scrollToId(itemId: number) {
        const map = getMap();
        const node = map.get(itemId);
        node &&
            node.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
    }

    function getMap() {
        if (!itemsRef.current) {
            // 首次运行时初始化 Map。
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    }

    return (
        <>
            <nav>
                <button onClick={() => scrollToId(0)}>Tom</button>
                <button onClick={() => scrollToId(5)}>Maru</button>
                <button onClick={() => scrollToId(9)}>Jellylorum</button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat) => (
                        <li
                            key={cat.id}
                            ref={(node) => {
                                const map = getMap();
                                if (node) {
                                    map.set(cat.id, node);
                                } else {
                                    map.delete(cat.id);
                                }
                            }}
                        >
                            <img src={cat.imageUrl} alt={"Cat #" + cat.id} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

const catList: { id: number; imageUrl: string }[] = [];
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: "https://placekitten.com/250/200?image=" + i
    });
}
