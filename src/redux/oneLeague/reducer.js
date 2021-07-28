import types from "../types";

const selectedLeague = (state = { leagueName: "", leagueId: "" }, action) => {
  switch (action.type) {
    case types.SET_SELECTED_LEAGUE:
      return {
        leagueName: action.payload.leagueName,
        leagueId: action.payload.leagueId,
      };
    default:
      return state;
  }
};

export default selectedLeague;
