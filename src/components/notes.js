import { useDispatch, useSelector } from "react-redux";
import { editPodatak, delThisPodatak } from "../redux/data";

const Notes = () => {
  const { editableMode, podaci } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  return (
    <div className="allDivs">
      {podaci && !editableMode ? (
        podaci.map((item, index) => (
          <div key={index} id={index} className="reducerDivs">
            <small
              className="reducerDivsCloseBtn"
              onClick={(e) =>
                dispatch(delThisPodatak(e.target.parentElement.id))
              }
            >
              ❌
            </small>
            <h3 className="reducerDivsName">{item.name}</h3>
            <p className="reducerDivsText">{item.text}</p>
            <small className="reducerDivsTimer">{item.time}</small>

            <small
              className="reducerDivsEditBtn"
              onClick={(e) => dispatch(editPodatak(e.target.parentElement.id))}
            >
              ✏️
            </small>
          </div>
        ))
      ) : (
        <div className="saveTextDiv">
          <h3>Edit....</h3>
        </div>
      )}
    </div>
  );
};

export default Notes;
