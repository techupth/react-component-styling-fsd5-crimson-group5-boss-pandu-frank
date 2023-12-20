/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary") {
    return (
      <div>
        <button
          css={css`
            background-color: #074ee8;
            font-size: 16px;
            border-radius: 4px;
            color: white;
            font-weight: bold;
            margin: 10px;
            width: 170px;
            height: 50px;
            text-align: center;
          `}
        >
          Button
        </button>
      </div>
    );
  } else if (props.type === "secondary") {
    return (
      <div>
        <button
          css={css`
            background-color: #07a4e8;
            font-size: 16px;
            border-radius: 4px;
            color: white;
            font-weight: bold;
            margin: 10px;
            width: 170px;
            height: 50px;
          `}
        >
          Button
        </button>
      </div>
    );
  }
  return <h1>Noting</h1>;
}

export default Button;
