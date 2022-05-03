import React from "react";
import "../../style/explore.scss";
const Explore = () => {
  // create array from 1 to 100
  const arr = [...Array(100).keys()];
  console.log(arr);
  const check = (i) => {
    if (i % 4 === 0) {
      return `${i} / 1 / span 2 / span 2`;
    }
    return "auto";
  };
  return (
    <div className="explore">
      <div className="explore-list">
        {/* <div
          style={{ gridArea: "1 / 1 / span 2 / span 2" }}
          class="explore-list-item "
        ></div>
        <div
          style={{ gridArea: "5 / 2 / span 2 / span 2" }}
          class="explore-list-item "
        ></div>
        <div
          style={{ gridArea: "9 / 1 / span 2 / span 2" }}
          class="explore-list-item "
        ></div> */}
        {arr?.map((item, index) => {
          return (
            <div
              style={{
                gridArea: `${check(index)}`,
              }}
              className="explore-list-item"
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
