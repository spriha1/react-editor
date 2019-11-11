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
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  }

  function _onBoldClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  }

  return (
    <React.Fragment>
      <button onClick={_onBoldClick}>Bold</button>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
      />
    </React.Fragment>
  );
}

export default MyEditor;

// ReactDOM.render(<MyEditor />, document.getElementById("root"));
