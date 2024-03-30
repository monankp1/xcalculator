import React from 'react'

const Button = ({name, onClick}) => {
    const buttonStyle = {
        border: '2px solid grey',
        borderRadius: '5px',
        height: '40px',
        width: '40px',
        margin: '5px'
    };

  return (
    <div>
        <button style={buttonStyle} onClick={() => onClick(name)}>{name}</button>
    </div>
  )
}

export default Button