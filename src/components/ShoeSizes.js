import React, { useState } from 'react'
import styles from './ShoeSizes.module.css'

export default function ShoeSizes(props){
    const members = [...props.members]

    const maleMembers = members.filter(m => m.Gender === 'M')
    const femaleMembers = members.filter(m => m.Gender === 'F')

    const [chosenGender, setChosenGender] = useState('M');
    const [chosenMembers, setChosenMembers] = useState(maleMembers);

    function setMale(){
        setChosenGender('M')
        setChosenMembers(maleMembers)
    }

    function setFemale(){
        setChosenGender('F')
        setChosenMembers(femaleMembers)
    }

    return (
        <div className={styles.container}>
            <h1>Shoe sizes</h1>
            <div className={styles.genderSelector}>
                <button className={[styles.toggle, styles.toggleLeft, (chosenGender === 'M') ? styles.selected : ""].join(" ")} onClick={() => setMale()}>Male</button>
                <button className={[styles.toggle, styles.toggleRight, (chosenGender === 'F') ? styles.selected : ""].join(" ")} onClick={() => setFemale()}>Female</button>
                
            </div>
        </div>
    )
}