import React from "react";
function father() {
    return <div>father</div>;
}
function App() {
    return (
        <div>
            <span>app</span>
            {father()}
        </div>
    );
}

export default App;
