import React from 'react'
import styles from './PersonBubble.module.css'

export default function PersonBubble(props){
    const person = props.person;

    function showInfo(){
        alert(`Name ${props.person.Name}`)
    }

    return (
        <button onClick={showInfo} className={styles.container}>
            <p className={styles.letter}>{ person.Name[0] }</p>
        </button>
    )
}