// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frown from "../img/frown.png";
import check from "../img/check-circle.png";
import warning from "../img/alert-triangle.png";
import info from "../img/alert-circle.png";

export function Alert(props) {
  if (props.status === "success") {
    return (
      <button
        css={css`
          width: 650px;
          height: 76px;
          border-radius: 10px;
          background-color: #cef7cd;
          color: #444444;
          font-size: 20px;
          font-weight: bold;
        `}
      >
        <img src={check} />
        This is {props.status} alert box
      </button>
    );
  } else if (props.status === "info") {
    return (
      <button
        css={css`
          width: 650px;
          height: 76px;
          border-radius: 10px;
          background-color: #f9ebc8;
          color: #444444;
          font-size: 20px;
          font-weight: bold;
        `}
      >
        <img src={info} />
        This is {props.status} alert box
      </button>
    );
  } else if (props.status === "warning") {
    return (
      <button
        css={css`
          width: 650px;
          height: 76px;
          border-radius: 10px;
          background-color: #f9d9c8;
          color: #444444;
          font-size: 20px;
          font-weight: bold;
        `}
      >
        <img src={warning} />
        This is {props.status} alert box
      </button>
    );
  } else if (props.status === "error") {
    return (
      <button
        css={css`
          width: 650px;
          height: 76px;
          border-radius: 10px;
          background-color: #f9c8c8;
          color: #444444;
          font-size: 20px;
          font-weight: bold;
        `}
      >
        <img src={frown} />
        This is {props.status} alert box
      </button>
    );
  }
}
