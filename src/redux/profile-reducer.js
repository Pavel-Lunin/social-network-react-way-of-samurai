import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

let initialState = {
  posts: [
    {
      id: 1,
      message: "Hi,how are you?",
      likesCount: "3",
    },
    {
      id: 2,
      message: "It`s my first post",
      likesCount: "15",
    },
    {
      id: 1,
      message: "Hi,how are you?",
      likesCount: "3",
    },
    {
      id: 2,
      message: "It`s my first post",
      likesCount: "15",
    },
    {
      id: 1,
      message: "Yo! Hi,how are you?",
      likesCount: "3",
    },
    {
      id: 2,
      message: "It`s my live!",
      likesCount: "15",
    },
  ],
  newPostText: "it",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USERS_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export default profileReducer;
