const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {name: "Luna", animal: "Dog", breed: "Havanese"}),
            React.createElement(Pet, {name: "Maano", animal: "Cat", breed: "Persian"}),
            React.createElement(Pet, {name: "Roman", animal: "Bird", breed: "Love Bird"})
        ]
    );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));