import { useState } from "react";
import { InputGroup } from "./InputGroup";

export function UserInput({ resultHandler }) {
  return (
    <section id="user-input">
      <InputGroup name={"INITIAL INVESTMENT"} resultHandler={resultHandler} />
      <InputGroup name={"ANNUAL INVESTMENT"} resultHandler={resultHandler} />
      <InputGroup name={"EXPECTED RETURN"} resultHandler={resultHandler} />
      <InputGroup name={"DURATION"} resultHandler={resultHandler} />
    </section>
  );
}