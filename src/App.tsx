import React from "react";
import Son from "./son";
import Father from "./Father";

/**这是根组件 */
function App() {
    return (
        <div>
            <span>app</span>
            {Father()}
            <Son name={18} />
        </div>
    );
}

export default App;
