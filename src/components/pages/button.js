import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR = ['main-green', 'deep-green', 'red', 'blue'];

export const Button = ({
  childeren,
  type,
  onClick,
  btnStyle,
  btnSize,
  btnColor
}) => {
  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  const checkBtnColor = COLOR.includes(btnColor) ? btnColor : COLOR[0];

  return (
    <button className={`btn ${checkBtnStyle} ${checkBtnSize} ${checkBtnColor}`} onClick={onClick} type={type}>{childeren}</button>
  )
}