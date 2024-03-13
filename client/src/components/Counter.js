import { React, useState } from "react";

const Counter = () => {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍{like}</button>
      <button onClick={() => setDisLike(disLike + 1)}>👎{disLike}</button>
    </div>
  );
};

export default Counter;
