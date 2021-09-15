import { ActionTypes } from "Redux/constants/action-types";
import { db, timeStamp } from "../../firebase/firebase";

//saved news to the database
export const addNews = (userID, newsID, item) => (dispatch) => {
  const createdAt = timeStamp();

  db.collection("users")
    .doc(userID)
    .collection("saved")
    .doc(newsID)
    .set({
      ...item,
      createdAt,
    })
    .then(() => {
      dispatch({ type: ActionTypes.OPEN_SNACKBAR });
    });
};

//get saved news from the database
export const getSavedNews = (userID) => (dispatch) => {
  dispatch({ type: ActionTypes.START_LOADING });
  db.collection("users")
    .doc(userID)
    .collection("saved")
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      let arrData = [];
      snapshot.forEach((doc) => {
        arrData.push({ ...doc.data() });
      });

      dispatch({ type: ActionTypes.GET_SAVED_NEWS, payload: arrData });
      dispatch({ type: ActionTypes.END_LOADING });
    });
};

//delete the movie from the database

export const deleteNews = (userID, newsID) => (dispatch) => {
  db.collection("users").doc(userID).collection("saved").doc(newsID).delete();
};
