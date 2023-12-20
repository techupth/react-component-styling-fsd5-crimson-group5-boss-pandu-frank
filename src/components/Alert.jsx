/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frown from "../assets/image/frown.svg";
import check from "../assets/image/check-circle.svg";
import circle from "../assets/image/alert-circle.svg";
import triangle from "../assets/image/alert-triangle.svg";

function Alert(props) {
  if (props.type === "error") {
    return (
      <div>
        <button
          css={css`
            padding: 20px;
            width: 500px;
            height: 80px;
            background-color: #f9c8c8;
            font-size: 16px;
            border-radius: 4px;
            color: black;
            font-weight: bold;
            flex-shrink: 0;
            margin: 10px;
            text-align: left;'
            gap: 200;
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
            padding: 20px;
            width: 500px;
            height: 80px;
            background-color: #f9d9c8;
            font-size: 16px;
            border-radius: 4px;
            color: black;
            font-weight: bold;
            flex-shrink: 0;
            margin: 10px;
            text-align: left;
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
            padding: 20px;
            width: 500px;
            height: 80px;
            background-color: #f9ebc8;
            font-size: 16px;
            border-radius: 4px;
            color: black;
            font-weight: bold;
            flex-shrink: 0;
            margin: 10px;
            text-align: left;
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
            padding: 20px;
            width: 500px;
            height: 80px;
            background-color: #cef7cd;
            font-size: 16px;
            border-radius: 4px;
            color: black;
            font-weight: bold;
            flex-shrink: 0;
            margin: 10px;
            text-align: left;
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
