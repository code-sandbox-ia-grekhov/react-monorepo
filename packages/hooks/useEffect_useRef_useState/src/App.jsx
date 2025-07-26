import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  // Сохранение данных между перерендерами без перерендера при обновлении значения в useRef
  const counter = useRef(0);
  // Сохранение данных между перерендерами c перерендером при обновлении значения в useState
  const [counterRerender, setCounterRerender] = useState(0);

  useEffect(() => {
    const handler = () => {
      console.log("Move");
      counter.current += 1;
      setCounterRerender(counter.current);
      console.log("counter.current: ", counter.current);
    };

    window.addEventListener("pointermove", handler);

    return () => {
      window.removeEventListener("pointermove", handler);
      console.log("Отписка");
    };
  }, []);

  return (
    <>
      <div>Zopa</div>
      <div>{counter.current}</div>
      <div>{counterRerender}</div>
    </>
  );
}

export default App;
