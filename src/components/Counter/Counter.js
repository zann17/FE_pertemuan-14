import { useEffect, useState } from "react";

function Counter() {
  const [angka, setAngka,] = useState(0);

  function addAngka() {
    setAngka(angka + 1);
  }

  useEffect(() => {
    console.log("Dijalankan ketika component dimount dan update")

    document.title = `Angka: ${angka}`;
  }, {angka});

  console.log("Dijalankan ketika component di-render")

  return (
    <div>
      <p>Nilai Angka: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;