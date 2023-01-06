const App = (props) => {
  const [buttonText, setButtonText] = React.useState(props.initialButtonText);
  const [cssClasses, setCssClasses] = React.useState(props.initialCssClass);

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
root.render(<App initialButtonText="Click me" initialCssClass="" />);
