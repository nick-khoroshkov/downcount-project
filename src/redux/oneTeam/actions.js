import { types } from "./types";

export const setTeam = ({ teamName, teamId }) => {
  return {
    type: types.SET_SELECTED_TEAM,
    payload: {
      teamName,
      teamId,
    },
  };
};
