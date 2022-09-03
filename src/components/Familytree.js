import React from 'react'
import styles from './Familytree.module.css'

export default function Familytree(props){
    const members = props.members;

    return(
    <div className={styles.familyTreeContainer}>
        {members[0].Name}
    </div>
    )
}