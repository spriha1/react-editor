import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState, RichUtils } from "draft-js";
import "./App.css";

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

  function _onItalicClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  }

  function _onUnderlineClick() {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  }

  return (
    <div className="Editor">
      <div className="mt-2">
        <button onClick={_onBoldClick} className="btn btn-light mr-1 ml-1">
          Bold
        </button>
        <button onClick={_onItalicClick} className="btn btn-light mr-1 ml-1">
          Italic
        </button>
        <button onClick={_onUnderlineClick} className="btn btn-light mr-1 ml-1">
          Underline
        </button>
      </div>
      <div className="TextArea mt-2">
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </div>
    </div>
  );
}

export default MyEditor;

// ReactDOM.render(<MyEditor />, document.getElementById("root"));
