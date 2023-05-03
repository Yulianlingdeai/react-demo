function App() {
    function abc() {
        return 1;
    }
    return (
        <div>
            <span>app</span>
            {abc()}
        </div>
    );
}

export default App;
