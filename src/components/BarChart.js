import React from 'react'
import styles from './BarChart.module.css'

export default function BarChart(props){

    const width = (props.width === undefined) ? 640 : props.width;
    const height = (props.height === undefined) ? 400 : props.height;

    return (
        <div style={{width: width, height: height}} className={styles.container}>
            <h2>Age</h2>
        </div>
    )
}