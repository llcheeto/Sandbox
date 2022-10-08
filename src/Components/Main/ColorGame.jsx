import React from "react";
import "./colorgame.css";
import { useState, useEffect } from "react";

export default function ColorGame() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isWrongSelection, setIsWrongSelection] = useState(undefined);

  const getRandomColor = () => {
    const digits = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    const color = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");

    return `#${color}`;
  };

  const pickcolor = () => {
    const acutalColor = getRandomColor();
    setColor(acutalColor);
    setAnswers(
      [acutalColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    pickcolor();
  }, []);

  function handleAnswerClicked(answer) {
    if (answer === color) {
      setIsWrongSelection(false);
      pickcolor();
    } else {
      setIsWrongSelection(true);
    }
  }

  return (
    <div>
      <div className="block" style={{ background: color }}>
        {" "}
      </div>

      <div className="col">
        <div className="button--group">
          {answers.map((answer) => (
            <button key={answer} onClick={() => handleAnswerClicked(answer)}>
              {answer}
            </button>
          ))}
          {isWrongSelection === true && (
            <div className="wrong">Wrong Answer</div>
          )}
          {isWrongSelection === false && <div className="right">Correct</div>}
        </div>
      </div>
    </div>
  );
}
