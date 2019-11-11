import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState, RichUtils } from "draft-js";

function MyEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // handleChange = editorState => setEditorState(editorState);
  // function handleChange(editorState) {
  //   setEditorState(editorState);
  // }

  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  }

  return (
    <Editor
      editorState={editorState}
      handleKeyCommand={handleKeyCommand}
      onChange={setEditorState}
    />
  );
}

export default MyEditor;

// ReactDOM.render(<MyEditor />, document.getElementById("root"));
