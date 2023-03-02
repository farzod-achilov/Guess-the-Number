import React, { useState } from "react";
import "./Game.scss";

function GuessTheNumber() {
  const [numberToGuess, setNumberToGuess] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 100");
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);
  const handleGuess = (evt) => {
    evt.preventDefault();

    Level1(evt);
  };

  //   setTable([...table, { number: getNumber() }]);

  function Level1(evt) {
    const guessValue = parseInt(guess);
    if (isNaN(guessValue) || guessValue < 1 || guessValue > 100) {
      setMessage("Please enter a valid number between 1 and 100");
    } else if (guessValue < numberToGuess) {
      setMessage(`The number is higher than ${guessValue}`);
    } else if (guessValue > numberToGuess) {
      setMessage(`The number is lower than ${guessValue}`);
    } else {
      setMessage(`Congratulations! You guessed the number ${numberToGuess}`);
      setNumberToGuess(Math.floor(Math.random() * 100) + 1);
      setGuess("");
    }
  }

  function Level2(evt) {
    const guessValue = parseInt(guess);
    if (isNaN(guessValue) || guessValue < 1 || guessValue > 100) {
      setMessage("Please enter a valid number between 1 and 100");
    } else if (guessValue < numberToGuess) {
      setMessage(`The number is higher than ${guessValue}`);
    } else if (guessValue > numberToGuess) {
      setMessage(`The number is lower than ${guessValue}`);
    } else {
      setMessage(`Congratulations! You guessed the number ${numberToGuess}`);
      setNumberToGuess(Math.floor(Math.random() * 999) + 1);
      setGuess("");
    }
  }

  return (
    <div className="game__wrapper">
      <h1 className="game__header">Guess the Number</h1>
      <p className="game__message">{message}</p>
      <form className="game__form" onSubmit={handleGuess}>
        <input
          className="game__input"
          type="number"
          value={guess}
          onChange={(evt) => setGuess(evt.target.value)}
        />
        <button className="game__btn" type="submit">
          Guess
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th colspan="2">Numbers entered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Higher</td>
            <td>Lower</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GuessTheNumber;
