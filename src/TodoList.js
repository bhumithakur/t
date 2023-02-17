import React from "react";

export function TodoList() {
  const [listData, setListData] = React.useState([]);
  const [activity, setActivity] = React.useState("");
  function delActivity(data) {
    const updatedListData = listData.filter((ele, id) => {
      return data != id;
    });
    setListData(updatedListData);
  }

  function addActivity() {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      setActivity("");
      return updatedList;
    });
  }
  function delAll() {
    setListData([]);
  }
  return (
    <>
      <div className="container">
        <div className="header">Todo List </div>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p>Here is your List :) </p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div>{data}</div>
                  <button onClick={() => delActivity(i)}>del</button>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && <button onClick={delAll}>Delete All</button>}
      </div>
    </>
  );
}
