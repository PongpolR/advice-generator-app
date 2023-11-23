/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "./App.css";
import IconDice from "./assets/icon-dice.svg";

function App() {
  const [data, setData] = useState([]);
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  const loadapi = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if (res.status != 200) {
        // log out
      } else {
        const data = await res.json();
        setData(data);
        setAdvice(data?.slip?.advice);
        setAdviceId(data?.slip?.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // let abortController = new AbortController();
    loadapi();
    // return () => abortController.abort();
  }, [advice]);

  // console.log(data?.slip?.advice);

  const refresh = async () => {
    await loadapi();
  };

  return (
    <>
      <div className="container">
        <div className="header">advice # {adviceId}</div>
        <div className="body">{`"${advice}"`}</div>
        <hr className="divider" />
        <div className="button">
          <button className="dice" onClick={refresh}>
            <img src={IconDice} />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
