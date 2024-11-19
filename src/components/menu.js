import timer from "../components/timer";
import { useDispatch, useSelector } from "react-redux";
import { addNoteName, addNoteText, addPodatak, saveEdit } from "../redux/data";

const Menu = () => {
  const { editableMode, noteName, noteText } = useSelector(
    (state) => state.data
  );
  const dispatch = useDispatch();
  return (
    <div className="menuDiv">
      <input
        className="inputName"
        onChange={(e) => {
          dispatch(addNoteName(e.target.value));
        }}
        placeholder="Enter name..."
        value={noteName}
      />
      <textarea
        className="inputText"
        onChange={(e) => {
          dispatch(addNoteText(e.target.value));
        }}
        placeholder="Enter text..."
        value={noteText}
      />
      {!editableMode ? (
        <button
          className="addBtn"
          onClick={() =>
            dispatch(
              addPodatak({ name: noteName, text: noteText, time: timer() })
            )
          }
        >
          Add
        </button>
      ) : (
        <button
          className="saveBtn"
          onClick={() => dispatch(saveEdit({ name: noteName, text: noteText }))}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default Menu;
