import React, { Component } from 'react';

export default (function (_ref) {
  var tooltip = _ref.tooltip,
      onClick = _ref.onClick,
      isActive = _ref.isActive;
  return React.createElement(
    "div",
    { className: "sc-user-input--picker-wrapper" },
    tooltip,
    React.createElement(
      "button",
      { id: "sc-emoji-picker-button", className: "sc-user-input--emoji-icon-wrapper", onClick: onClick },
      React.createElement(
        "svg",
        {
          className: "sc-user-input--emoji-icon " + (isActive ? 'active' : ''),
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "100%",
          height: "10px",
          viewBox: "0 0 37 37",
          enableBackground: "new 0 0 37 37"
        },
        React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M18.696,37C8.387,37,0,29.006,0,18.696C0,8.387,8.387,0,18.696,0c10.31,0,18.696,8.387,18.696,18.696 C37,29.006,29.006,37,18.696,37z M18.696,2C9.49,2,2,9.49,2,18.696c0,9.206,7.49,16.696,16.696,16.696 c9.206,0,16.696-7.49,16.696-16.696C35.393,9.49,27.902,2,18.696,2z"
          })
        ),
        React.createElement(
          "g",
          null,
          React.createElement("circle", { cx: "12.379", cy: "14.359", r: "1.938" })
        ),
        React.createElement(
          "g",
          null,
          React.createElement("circle", { cx: "24.371", cy: "14.414", r: "1.992" })
        ),
        React.createElement(
          "g",
          null,
          React.createElement("path", { d: "M18.035,27.453c-5.748,0-8.342-4.18-8.449-4.357c-0.286-0.473-0.135-1.087,0.338-1.373 c0.471-0.286,1.084-0.136,1.372,0.335c0.094,0.151,2.161,3.396,6.74,3.396c4.713,0,7.518-3.462,7.545-3.497 c0.343-0.432,0.973-0.504,1.405-0.161c0.433,0.344,0.505,0.973,0.161,1.405C27.009,23.374,23.703,27.453,18.035,27.453z"
          })
        )
      )
    )
  );
});