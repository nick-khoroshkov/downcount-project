import { combineReducers } from "redux";
import leagues from "./leagues/reducer";
import teams from "./teams/reducer";
import games from "./games/reducer";
import configuration from "./config/reducer";
import selectedTeam from "./oneTeam/reducer";
import selectedLeague from "./oneLeague/reducer";

export default combineReducers({
  leagues,
  teams,
  games,
  configuration,
  selectedTeam,
  selectedLeague,
});
