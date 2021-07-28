import axios from "axios";

// axios.defaults.baseURL = "https://legacy.districtapps.com/";
const BASE_URL = "http://dev.api.downkount.com";

//http://legacy.districtapps.com/get_teams.php?league_id=2
// https://legacy.districtapps.com/get_metadata.php?test-url=https://jazzti.me - Laker Time config data
// https://legacy.districtapps.com/get_metadata.php?test-url=https://cubti.me - Cube Time config data
// https://legacy.districtapps.com/get_metadata.php?test-url=https://downkount.com - Downkount config data
// https://legacy.districtapps.com/get_metadata.php?test-url=https://nbati.me - NBA config data

export const api = {
  leagues: {
    // getLeagues: () => axios.get("get_leagues.php"),
    getLeagues: () => axios.get(`${BASE_URL}/api/league`),
  },
  teams: {
    // getTeams: (id) => axios.get(`get_teams.php?league_id=${id}`),
    getTeams: (id) => axios.get(`${BASE_URL}/api/get_teams/${id}`),
  },
  games: {
    // getSchedule: (id) => axios.get(`get_schedule.php?team_id=${id}`),
    getSchedule: (id) => axios.get(`${BASE_URL}/api/get_schedule/${id}`),
  },
  config: {
    getConfig: () =>
      axios.get("https://legacy.districtapps.com/get_metadata.php"),
    // getConfig: () => axios.get("get_metadata.php?test-url=https://cubti.me"),
    // getConfig: () => axios.get("get_metadata.php?test-url=https://nbati.me"),
  },
};

export default api;

/** API calls when url parsing after sharing */

export async function getTeamsShedule(id) {
  try {
    const response = await axios.get(
      // `https://legacy.districtapps.com/get_schedule.php?team_id=${id}`
      `${BASE_URL}/api/get_schedule/${id}`
    );
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function getTeamsList(id) {
  try {
    const response = await axios.get(
      // `https://legacy.districtapps.com/get_teams.php?league_id=${id}`
      `${BASE_URL}/api/get_teams/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getLeaguesList() {
  try {
    const response = await axios.get(
      // "https://legacy.districtapps.com/get_leagues.php"
      `${BASE_URL}/api/league`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
