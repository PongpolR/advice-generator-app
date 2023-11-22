/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //https://api.adviceslip.com/advice
  const [data, setData] = useState([]);
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  useEffect(() => {
    // let abortController = new AbortController();
    const loadapi = async () => {
      await fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) => setData(data));

      setAdvice(data?.slip?.advice);
      setAdviceId(data?.slip?.id);
    };

    loadapi();
    // return () => abortController.abort();
  }, [advice]);

  // console.log(data?.slip?.advice);

  const refresh = () => {
    console.log("click");
    // let abortController = new AbortController();
    const loadapi = () => {
      fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) => setData(data));

      setAdvice(data?.slip?.advice);
      setAdviceId(data?.slip?.id);
    };

    loadapi();
    console.log(data);
    // return () => abortController.abort();
  };

  return (
    <>
      <div className="container">
        <div className="header">advice # {adviceId}</div>
        <div className="body">{`"${advice}"`}</div>
        <div className="button">
          <button onClick={refresh}>Test</button>
        </div>
      </div>
    </>
  );
}

export default App;
