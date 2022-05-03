import React, { useState } from "react";

function LoungeForm({ userState, board }) {
  const { name, __id } = userState;
  const { title, context } = board;
  const [form, setForm] = useState({
    title: [title] ? [title] : "",
    context: [context] ? [context] : "",
  });
  return (
    <div>
      <form></form>
    </div>
  );
}

export default LoungeForm;
