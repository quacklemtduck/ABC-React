import React from 'react'
import styles from './PersonBubble.module.css'
import { ShowPopup } from './PopupInfo';

function PersonInfo(person){
    return (
        <div>
            <h3 style={{marginBottom: "0px"}}>{person.Name}</h3>
            <ul style={{paddingLeft: "10px"}}>
                <li><b>Age: </b>{ person.Age }</li>
                <li><b>ShoeSize: </b>{ person.ShoeSize }</li>
                <li><b>Gender: </b>{ person.Gender }</li>
                {person.Children.length !== 0 ? ( <li><b>Children: </b> {person.Children.map((c, i) => c.Name  ).join(" ")} </li>) : null}
            </ul>
        </div>
    )
}

export default function PersonBubble(props){
    const person = props.person;

    function showInfo(){
        ShowPopup(PersonInfo(person))
    }

    return (
        <button onClick={showInfo} className={styles.container}>
            <p className={styles.letter}>{ person.Name[0] }</p>
        </button>
    )
}