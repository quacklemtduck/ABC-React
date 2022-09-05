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

    function getAverageShoeSize(members){
        let sum = members.reduce((previous, current) => previous + current.ShoeSize, 0)
        return sum / members.length
    }

    return (
        <div className={styles.container}>
            <h1>Shoe sizes</h1>
            <div className={styles.genderSelector}>
                <button className={[styles.toggle, styles.toggleLeft, (chosenGender === 'M') ? styles.selected : ""].join(" ")} onClick={() => setMale()}>Male</button>
                <button className={[styles.toggle, styles.toggleRight, (chosenGender === 'F') ? styles.selected : ""].join(" ")} onClick={() => setFemale()}>Female</button>
            </div>

            <h4>Average Shoe Size:</h4>
            <h3>{getAverageShoeSize(chosenMembers).toFixed(1)}</h3>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {chosenMembers.map((m, i) => <th className={styles.th} key={i}> {m.Name} </th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {chosenMembers.map((m, i) => <td className={styles.td} key={i}> {m.ShoeSize} </td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}