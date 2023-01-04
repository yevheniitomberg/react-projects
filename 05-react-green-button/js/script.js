const App = () => {
  const [buttonText, setButtonText] = React.useState("Click me");
  const [cssClasses, setCssClasses] = React.useState("");

  const onButtonClick = () => {
    setButtonText("I was changed");
    setCssClasses("green-btn");
  };

  return (
    <div className="app">
      <button onClick={onButtonClick} className={cssClasses}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
