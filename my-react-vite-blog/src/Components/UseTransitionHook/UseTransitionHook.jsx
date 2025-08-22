import React, { useState, useTransition } from 'react';

function UseTransitionHook() {
  const [isPending, startTransition] = useTransition();

  const handleButton = () => {
    startTransition(() => {
      setTimeout(() => {
        console.log("Long operation finished!");
      }, 2000);
    });
  };

  return (
    <>
      <h1>useTransition Hook</h1>
      <button disabled={isPending} onClick={handleButton}>
        {isPending ? "Loading..." : "Click"}
      </button>
    </>
  );
}

export default UseTransitionHook;
