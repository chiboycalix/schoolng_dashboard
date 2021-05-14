import React from 'react';
import './custom-btn-styles.scss'

const CustomButton = (props) => {
  const buttonComponent = () => {
    switch (props.size) {
      case 'small':
        return (
          <button className={props.size} onClick={props.handleClick}>
            {props?.icon} &nbsp; {props?.children}
          </button>
        )
      case 'medium':
        return (
          <button className={props.size} onClick={props.handleClick}>
            {props?.icon} {props?.children}
          </button>
        )
      case 'large':
        return (
          <button className={props.size} onClick={props.handleClick}>
            {props?.icon} {props?.children}
          </button>
        )
    }
  }

  return (
    <>
      { buttonComponent()}
    </>
  )


}
export default CustomButton;
