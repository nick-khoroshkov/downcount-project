import types from "../types";

const selectedTeam = (state = { teamName: "", teamId: "" }, action) => {
  switch (action.type) {
    case types.SET_SELECTED_TEAM:
      return {
        teamName: action.payload.teamName,
        teamId: action.payload.teamId,
      };
    default:
      return state;
  }
};

export default selectedTeam;
