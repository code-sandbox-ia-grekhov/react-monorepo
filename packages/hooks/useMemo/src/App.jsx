import React, { useMemo, useEffect } from "react";
import "./App.css";

function App({ numbers = [1, 2, 5] }) {
  // Мемоизируем вычисление суммы — пересчитываем только, когда меняется массив numbers
  const sum = useMemo(() => {
    console.log("Вычисляем сумму");
    return numbers.reduce((acc, n) => acc + n, 0);
  }, [numbers]);

  // Используем useEffect, который срабатывает, когда меняется сумма
  useEffect(() => {
    console.log("Сумма изменилась:", sum);
    // Здесь можно что-то сделать — например, отправить данные на сервер
  }, [sum]);

  return (
    <div>
      <p>Сумма: {sum}</p>
    </div>
  );
}

export default App;
