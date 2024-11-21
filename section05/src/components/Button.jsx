const Button = ({ text }) => {
  const onClickButton = (event) => {
    console.log(event);
    console.log(text);
  };

  return <button onClick={onClickButton}>{text}</button>;
};

export default Button;
