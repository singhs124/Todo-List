"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    console.log(mainTask);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    const copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <div
          key={i}
          className="bg-gray-200 p-5 m-5 flex justify-around items-center"
        >
          <h5>{i}</h5>
          <h2>{t.title}</h2>
          <p>{t.desc}</p>
          <button
          onClick={()=>{
            deleteHandler(i)
          }}
          className="bg-black p-3 text-white rounded">Delete</button>
        </div>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-center text-4xl p-5">
        My Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Title"
          className="border-4 border-black m-3 p-2"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Description"
          className="border-4 border-black m-3 p-2"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white rounded p-3">Add Task</button>
      </form>
      <div className="bg-slate-400 p-5 m-5 ">{renderTask}</div>
    </>
  );
};

export default page;
