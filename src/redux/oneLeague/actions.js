import { types } from "./types";

export const setLeague = ({ leagueName, leagueId }) => {
  return {
    type: types.SET_SELECTED_LEAGUE,
    payload: {
      leagueName,
      leagueId,
    },
  };
};
