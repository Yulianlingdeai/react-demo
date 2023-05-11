import React from "react";
function father() {
    return <div>father</div>;
}
class Son extends React.Component {
    render() {
        return <div>Son</div>;
    }
}
/**这是根组件 */
function App() {
    return (
        <div>
            <span>app</span>
            {father()}
            <Son />
        </div>
    );
}

export default App;
