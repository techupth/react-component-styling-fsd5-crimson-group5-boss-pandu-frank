/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frown from "../pic/frown.png";
import check from "../pic/check.png";
import circle from "../pic/circle.png";
import triangle from "../pic/triangle.png";

function Alert(props) {
  if (props.type === "error") {
    return (
      <div>
        <button
          css={css`
            padding: 2px;
            width: 500px;
            height: 80px;
            background-color: #f9c8c8;
            font-size: 16px;
            border-radius: 4px;
            color: black;
            font-weight: bold;
            flex-shrink: 0;
            margin: 10px;
          `}
        >
          <img src={frown} />
          {props.text}
        </button>
      </div>
    );
  } else if (props.type === "warning") {
    return (
      <div>
        <button
          css={css`
            padding: 2px;
            width: 500px;
            height: 80px;
            background-color: #f9d9c8;
            font-size: 16px;
            border-radius: 4px;
            color: black;
            font-weight: bold;
            flex-shrink: 0;
            margin: 10px;
          `}
        >
          <img src={triangle} />
          {props.text}
        </button>
      </div>
    );
  } else if (props.type === "info") {
    return (
      <div>
        <button
          css={css`
            padding: 2px;
            width: 500px;
            height: 80px;
            background-color: #f9ebc8;
            font-size: 16px;
            border-radius: 4px;
            color: black;
            font-weight: bold;
            flex-shrink: 0;
            margin: 10px;
          `}
        >
          <img src={circle} />
          {props.text}
        </button>
      </div>
    );
  } else if (props.type === "success") {
    return (
      <div>
        <button
          css={css`
            padding: 2px;
            width: 500px;
            height: 80px;
            background-color: #cef7cd;
            font-size: 16px;
            border-radius: 4px;
            color: black;
            font-weight: bold;
            flex-shrink: 0;
            margin: 10px;
          `}
        >
          <img src={check} />
          {props.text}
        </button>
      </div>
    );
  }
}

export default Alert;
