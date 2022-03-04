import React, { useEffect, useState } from "react";

function App(): React.ReactElement {
  const [prods, prodsSet] = useState<any>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        prodsSet([...prods, json.data])
        console.log(json)});
  }, []);
  return (
    <div>
      <h1>{prods}</h1>
    </div>
  );
}

export default App;
