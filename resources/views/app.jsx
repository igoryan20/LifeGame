class App extends React.Component {
    render() {
        return (
            <div>
                <div className="centerContainer">
                    <h1 className="welcome">Добро пожаловать в <bdi>Life Game</bdi></h1>
                    <button className="btn btn-transparent w-100">Начнем наше путешествие</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));