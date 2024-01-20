/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// Start coding here

export function Button(props) {
  if (props.type === "primary") {
    return (
      <button
        css={css`
          width: 171.19px;
          height: 50px;
          border-radius: 4px;
          background-color: #074ee8;
        `}
      >
        button
      </button>
    );
  } else if (props.type === "secondary") {
    return (
      <button
        css={css`
          width: 171.19px;
          height: 50px;
          border-radius: 4px;
          background-color: #07a4e8;
        `}
      >
        button
      </button>
    );
  } else {
    return <h1>error</h1>;
  }
}

/*if (props.type === "primary") {
        return (
            <div css={css`
            border-radius = 4px
            background-color = #074EE8
            border
            `}>


            </div>
        )
    }
    return */
