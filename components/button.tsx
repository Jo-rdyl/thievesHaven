let handleClick = () => alert("Hello!")
function MyButton() {
    return (
      <>
      <button onClick={handleClick}>button!</button>
      <style jsx>{`
      button {
          background: transparent;
          border-radius: 3px;
          border: 2px solid palevioletred;
          color: palevioletred;
          margin: 0.5em 1em;
          padding: 0.25em 1em;
          } button:hover {
            color:orange;
            border: 2px solid orange;
          }`}
      </style>
      </>
    )
  }
export default MyButton;