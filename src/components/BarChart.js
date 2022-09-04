import React, { useState } from "react";
import styles from "./BarChart.module.css";

export default function BarChart(props) {
  const width = props.width === undefined ? 640 : props.width;
  const height = props.height === undefined ? 400 : props.height;

  const [sortBy, setSortBy] = useState("ascending");
  let [members, setMembers] = useState([...props.members].sort((a, b) => a.Age - b.Age));

  var maxAge = 0;
  members.forEach(m => {
      maxAge = Math.max(maxAge, m.Age)
  });

  const barHeight = height - 20 - 100;
  const barWidth = ((width - 60 - 30) / (members.length)) - 20

  function handleChange(e) {
    setSortBy(e.target.value);

    if(e.target.value === "ascending"){
        setMembers(prev => {
            return prev.sort((a, b) => a.Age - b.Age)
        })
    }else if(e.target.value === "descending"){
        setMembers(prev => {
            return prev.sort((a, b) => b.Age - a.Age)
        })
    }
  }
  

  return (
    <div style={{ width: width, height: height }} className={styles.container}>
      <div className={styles.titleBar}>
        <h2>Age</h2>
        <div className={styles.selector}>
          <label htmlFor="sort">Sort by:</label>
          <select value={sortBy} onChange={handleChange} name="sort">
            <option value={"ascending"}>Ascending</option>
            <option value={"descending"}>Descending</option>
          </select>
        </div>
      </div>
      <div >
            <svg className={styles.chart} width={width} height={height-60} xmlns="http://www.w3.org/2000/svg">
            
                {members.map((m, i) => {
                    return (<rect style={{fill: "#E38B29"}} width={barWidth} height={m.Age / maxAge * barHeight} x={60 + (i * (barWidth + 20))} y={height - 100 - (m.Age / maxAge * barHeight)}/>)
                }) }
                <line x1={40} y1={20} x2={40} y2={height - 100} stroke="black"/>
                <line x1={40} y1={height - 100} x2={width - 30} y2={height - 100} stroke="black"/>
            </svg>
      </div>
    </div>
  );
}
