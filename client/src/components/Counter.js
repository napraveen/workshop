import { IconButton } from "@mui/material";
import { React, useState } from "react";
import Badge from "@mui/material/Badge";

const Counter = () => {
  let [like, setLike] = useState(0);
  let [disLike, setDisLike] = useState(0);
  const incrementLike = () => {
    setLike(like + 1);
  };
  const incrementDisLike = () => {
    setDisLike(disLike + 1);
  };
  return (
    <div>
      <IconButton aria-label="Like" color="primary" onClick={incrementLike}>
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        aria-label="DisLike"
        color="primary"
        onClick={incrementDisLike}
      >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
};

export default Counter;
