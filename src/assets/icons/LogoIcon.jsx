import React from "react";

export const LogoIcon = ({ size=24, styles }) => {
    return (
        <svg className={styles} xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
            <path fill="currentColor" d="M720-680H240v-120q0-17 11.5-28.5T280-840h400q17 0 28.5 11.5T720-800v120Zm0 220q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460ZM320-200h320v-160H320v160Zm0 80q-33 0-56.5-23.5T240-200v-80H120q-17 0-28.5-11.5T80-320v-200q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v200q0 17-11.5 28.5T840-280H720v80q0 33-23.5 56.5T640-120H320Z"/>
        </svg>
      
    )
}