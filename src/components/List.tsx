"use client";
import React, { useState } from "react";
import ListItem from "./ListItem";

const arr: string[] = [];

const List = () => {
  const [list, setList] = useState(arr);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    setList(list.concat(form.textBox.value));
    form.reset();
  }
  function removeItem(index: number) {
    const toRemove = list[index];
    const newArr = list.filter((item) => item !== toRemove);
    setList(newArr);
  }

  return (
    <div className="whiteBox">
      <h2>Items To Buy</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add new item"
          required
          name="textBox"
          className="textBox"
          type="text"
        />
        <button type="submit" className="addButton">
          Add
        </button>
      </form>

      <ul>
        {list.map((listValue: string, index: number) => {
          return (
            <li key={index}>
              <ListItem>
                <div className="listText">
                {listValue}{" "}
                <button
                  className="xButton"
                  onClick={() => removeItem(index)}
                >
                  X
                </button>
                </div>
              </ListItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
