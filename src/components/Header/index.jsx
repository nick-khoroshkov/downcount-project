import React, { useEffect, useState, useCallback, useMemo, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { api } from "api/api";
import queryString from "query-string";
import { toast } from "react-toastify";

import useLocalStorage from "hooks/useLocalStorage";
import { changeFavicon, changeFaviconTeam } from "helpers/changeFavicon";
import generatePageTitle from "helpers/generatePageTitle";

import Select from "react-select";
import Loading from "components/Loading";

import types from "redux/types";

import {
  StyledSelect,
  StyledSelectTeam,
  SelectContainer,
  StyledLabel,
  SelectTitles,
  BackgroundImg,
} from "./style";

function Header({ configuration }) {
  const teams = useSelector((state) => state?.teams?.data);
  const leagues = useSelector((state) => state?.leagues?.data);
  const teamsError = useSelector((state) => state?.teams?.error);

  const dispatch = useDispatch();
  const location = useLocation();
  const parsedUrl = queryString.parse(location.search);

  //** CHANGE BACKGROUND FUNCTION */
  const loadImage = useCallback((imgName) => {
    if (imgName) {
      import(`assets/img/${imgName}.jpg`)
        .then((image) => {
          setBackground(image.default);
        })
        .catch((error) => {
          loadImage(defaultBackground);
          console.log("Error", error);
        });
    }
  }, []);

  //** NEED FOR LINK SHARING FOR PROPER GAME ID */
  const { data, status, error } = useQuery("getLeagues", () =>
    api.leagues.getLeagues()
  );

  const allLeagues = useMemo(() => leagues, [leagues]);
  const allTeams = useMemo(() => teams, [teams]);
  const defaultBackground = "basic";

  const [background, setBackground] = useState(() =>
    loadImage(defaultBackground)
  );
  const [savedLeague, setSavedLeague] = useLocalStorage("chosen-league", "");
  const [savedTeam, setSavedTeam] = useLocalStorage("chosen-team", "");

  if (configuration.display_one_team === "true") {
    //** one team display */
    console.log("ONE TEAM");
    changeFaviconTeam(configuration.one_team.team_name);

    console.log("ONE TEAM ID", configuration.one_team.id);

    dispatch({
      type: types.GET_GAMES_START,
      payload: configuration.one_team.id,
    });
  } else if (configuration.display_teams_select === "true") {
    //** one league display */
    console.log("ONE LEAGUE");

    loadImage(configuration?.one_league.league_name);
    changeFavicon("nba");
  } else if (configuration.display_leagues_select === "true") {
    //** display all leagues and teams selection */
    console.log("ALL Leagues and Teams");
    changeFavicon("favicon");
  }

  //** SET LEAGUE AND TEAM AFTER REFRESH */
  useEffect(() => {
    if (savedLeague && savedTeam) {
      console.log("if reload");
      dispatch({
        type: types.GET_TEAMS_START,
        payload: savedLeague.value,
      });

      dispatch({
        type: types.SET_SELECTED_LEAGUE,
        payload: { leagueName: savedLeague.label, leagueId: savedLeague.value },
      });

      dispatch({
        type: types.GET_GAMES_START,
        payload: savedTeam.value,
      });

      dispatch({
        type: types.SET_SELECTED_TEAM,
        payload: { teamName: savedTeam.label, teamId: savedTeam.value },
      });
    }
    // eslint-disable-next-line
  }, []);

  //** PARSE URL PARAMS and API FUNCTION AFTER LINK SHARED */

  useEffect(() => {
    if (parsedUrl && !savedLeague) {
      const { league, leagueId, team, teamId } = parsedUrl;
      if (league) {
        console.log("refresh header");
        setSavedLeague({
          value: `${leagueId}`,
          label: `${league.toUpperCase()}`,
        });
        setSavedTeam({ value: `${teamId}`, label: `${team}` });

        dispatch({
          type: types.GET_TEAMS_START,
          payload: leagueId,
        });

        dispatch({
          type: types.GET_GAMES_START,
          payload: teamId,
        });

        dispatch({
          type: types.SET_SELECTED_TEAM,
          payload: { teamName: team, teamId: teamId },
        });
      }
    }
    // eslint-disable-next-line
  }, []);

  const handleLeaguesChange = useCallback(
    (selected) => {
      dispatch({
        type: types.GET_TEAMS_START,
        payload: selected.value,
      });

      dispatch({
        type: types.SET_SELECTED_LEAGUE,
        payload: { leagueName: selected.label, leagueId: selected.value },
      });

      loadImage(selected.label);

      setSavedLeague(selected);
    },
    [dispatch, loadImage, setSavedLeague]
  );

  const handleTeamChange = useCallback(
    (selected) => {
      dispatch({
        type: types.GET_GAMES_START,
        payload: selected.value,
      });

      dispatch({
        type: types.SET_SELECTED_TEAM,
        payload: { teamName: selected.label, teamId: selected.value },
      });

      setSavedTeam(selected);
    },
    [dispatch, setSavedTeam]
  );

  //** FUNCTION TO SET PAGE TITLE AT THE BROWSER WINDOW AND META DESCRIPTION */

  useEffect(() => {
    if (
      configuration.site_name &&
      configuration.sport_level &&
      configuration.sport_type
    ) {
      generatePageTitle({
        title: `${configuration.site_name} - ${window.location.origin}`,
        metaDescription: `${configuration.sport_level} ${configuration.sport_type} league game schedule`,
      });
    }
  }, [
    configuration.site_name,
    configuration.sport_type,
    configuration.sport_level,
  ]);

  const handleOneTeamChange = () => {
    dispatch({
      type: types.GET_TEAMS_START,
      payload: configuration?.one_league.id,
    });

    setSavedLeague({
      label: configuration?.one_league.league_name,
      value: configuration?.one_league.id,
    });
  };

  useEffect(() => {
    if (teamsError) {
      console.log("error");
      toast.error(teamsError);
    }
  }, []);

  if (status === "loading") return <Loading />;

  return (
    <>
      <BackgroundImg imgUrl={background}></BackgroundImg>
      {configuration.display_leagues_select === "true" && (
        <SelectContainer>
          <StyledLabel>
            <SelectTitles>League</SelectTitles>

            <Select
              defaultValue={savedLeague}
              onChange={handleLeaguesChange}
              options={allLeagues?.map((item) => ({
                label: item.league_name,
                value: item.league_id,
              }))}
              isSearchable={false}
              styles={StyledSelect}
              components={{ IndicatorSeparator: () => null }}
            />
          </StyledLabel>

          <StyledLabel>
            <SelectTitles>Team</SelectTitles>
            <Select
              defaultValue={savedTeam}
              onChange={handleTeamChange}
              options={allTeams?.map((item) => ({
                label: item.team_name,
                value: item.team_id,
              }))}
              isSearchable={false}
              styles={StyledSelectTeam}
              components={{ IndicatorSeparator: () => null }}
            />
          </StyledLabel>
        </SelectContainer>
      )}

      {configuration.display_teams_select === "true" && (
        <SelectContainer centered={true}>
          <StyledLabel>
            <SelectTitles>Team</SelectTitles>
            <Select
              onMenuOpen={handleOneTeamChange}
              defaultValue={savedTeam}
              onChange={handleTeamChange}
              options={allTeams?.map((item) => ({
                label: item.team_name,
                value: item.team_id,
              }))}
              isSearchable={false}
              styles={StyledSelectTeam}
              components={{ IndicatorSeparator: () => null }}
            />
          </StyledLabel>
        </SelectContainer>
      )}
    </>
  );
}

function arePropsEqual(prevProps, nextProps) {
  return prevProps.configuration === nextProps.configuration;
}

export default memo(Header, arePropsEqual);
