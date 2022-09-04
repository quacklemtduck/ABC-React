import React, { useState } from "react";
import styles from "./BarChart.module.css";

export default function BarChart(props) {
  const width = props.width === undefined ? 640 : props.width;
  const height = props.height === undefined ? 400 : props.height;

  const [sortBy, setSortBy] = useState("ascending");
  let [members, setMembers] = useState(
    [...props.members].sort((a, b) => a.Age - b.Age)
  );

  var maxAge = 0;
  members.forEach((m) => {
    maxAge = Math.max(maxAge, m.Age);
  });

  const barHeight = height - 20 - 100;
  const barWidth = (width - 60 - 30) / members.length - 20;

  function handleChange(e) {
    setSortBy(e.target.value);

    if (e.target.value === "ascending") {
      setMembers((prev) => {
        return prev.sort((a, b) => a.Age - b.Age);
      });
    } else if (e.target.value === "descending") {
      setMembers((prev) => {
        return prev.sort((a, b) => b.Age - a.Age);
      });
    }
  }

  const numRows = Math.floor(maxAge / 10);
  const rows = [];
  for (let i = 1; i <= numRows; i++) {
    let rowY = height - 100 - ((i * 10) / maxAge) * barHeight;
    rows.push(
      <g>
        <text className={styles.text} textAnchor="end" x={38} y={rowY}>
          {i * 10}
        </text>
        <line
          strokeWidth={1}
          stroke="#b3b3b3"
          x1={40}
          x2={width - 30}
          y1={rowY}
          y2={rowY}
        />
      </g>
    );
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
      <div>
        <svg
          className={styles.chart}
          width={width}
          height={height - 60}
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            className={styles.text}
            textAnchor="end"
            x={38}
            y={height - 100}
          >
            {0}
          </text>
          <g>
            <text className={styles.text} textAnchor="end" x={38} y={20}>
              {maxAge}
            </text>
            <line
              strokeWidth={1}
              x1={40}
              y1={20}
              x2={width - 30}
              y2={20}
              stroke="#b3b3b3"
            />
          </g>

          {rows}

          {members.map((m, i) => {
              let middle = (60 + i * (barWidth + 20)) + barWidth/2
              let bottomInfo = (height - 155 - (m.Age / maxAge) * barHeight) + 40
            return (
              <g className={styles.bar}>
                <g className={styles.barInfo}>
                  <rect
                    x={60 + i * (barWidth + 20)}
                    y={height - 155 - (m.Age / maxAge) * barHeight}
                    width={barWidth}
                    height={40}
                    style={{ fill: "#FFD8A9" }}
                    rx={5}
                  />
                  <path style={{ fill: "#FFD8A9" }} d={`M ${middle - 12} ${bottomInfo - 2} L ${middle} ${bottomInfo + 15} L ${middle + 12} ${bottomInfo - 2}`} />
                  <text className={styles.text}
                  textAnchor="middle" x={middle} y={bottomInfo - 12}>{m.Age}</text>
                </g>
                <rect
                  style={{ fill: "#E38B29" }}
                  width={barWidth}
                  height={(m.Age / maxAge) * barHeight}
                  x={60 + i * (barWidth + 20)}
                  y={height - 100 - (m.Age / maxAge) * barHeight}
                />
                <text
                  className={styles.text}
                  textAnchor="middle"
                  x={60 + i * (barWidth + 20) + barWidth / 2}
                  y={height - 80}
                >
                  {m.Name}
                </text>
              </g>
            );
          })}
          <line x1={40} y1={20} x2={40} y2={height - 100} stroke="black" />
          <line
            x1={40}
            y1={height - 100}
            x2={width - 30}
            y2={height - 100}
            stroke="black"
          />
        </svg>
      </div>
    </div>
  );
}
