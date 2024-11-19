import { createSlice } from "@reduxjs/toolkit";
import timer from "../components/timer";
export const dataSlice = createSlice({
  name: "data",
  initialState: {
    editableMode: false,
    editableSelected: NaN,
    noteName: "",
    noteText: "",
    podaci:
      localStorage.getItem("StickyNotesRedux") != null
        ? Array.from(JSON.parse(localStorage.getItem("StickyNotesRedux")))
        : [],
  },
  reducers: {
    addNoteName: (state, action) => {
      state.noteName = action.payload;
    },
    addNoteText: (state, action) => {
      state.noteText = action.payload;
    },
    addPodatak: (state, action) => {
      if (state.noteName != "" && state.noteText != "") {
        state.podaci.push(action.payload);
        localStorage.setItem("StickyNotesRedux", JSON.stringify(state.podaci));
        state.noteName = "";
        state.noteText = "";
      } else {
        alert("You must enter name and text of the note!");
      }
    },
    editPodatak: (state, action) => {
      state.noteName = state.podaci[action.payload].name;
      state.noteText = state.podaci[action.payload].text;
      state.editableMode = true;
      state.editableSelected = action.payload;
    },
    saveEdit: (state, action) => {
      state.podaci[state.editableSelected].name = state.noteName;
      state.podaci[state.editableSelected].text = state.noteText;
      state.podaci[state.editableSelected].time = timer();
      localStorage.setItem("StickyNotesRedux", JSON.stringify(state.podaci));
      state.editableMode = false;
      state.editableSelected = NaN;
      state.noteName = "";
      state.noteText = "";
    },
    delThisPodatak: (state, action) => {
      state.podaci.splice(action.payload, 1);
      if (state.podaci.length == 0) {
        localStorage.removeItem("StickyNotesRedux");
      } else {
        localStorage.setItem("StickyNotesRedux", JSON.stringify(state.podaci));
      }
    },
  },
});

export const {
  addNoteName,
  addNoteText,
  addPodatak,
  editPodatak,
  saveEdit,
  delThisPodatak,
} = dataSlice.actions;

export default dataSlice.reducer;
