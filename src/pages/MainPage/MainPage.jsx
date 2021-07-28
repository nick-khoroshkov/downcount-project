import React, { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { useQuery } from "react-query";
import { api, getTeamsShedule } from "api/api";
import types from "redux/types";
import getGameIndex from "helpers/getGameIndex";

import queryString from "query-string";

import useLocalStorage from "hooks/useLocalStorage";

import Header from "components/Header";
import Dashboard from "components/Dashboard";
import DashboardOneTeam from "components/Dashboard/DashboardOneTeam";
import Loading from "components/Loading";
import ChoiceTitle from "components/ChoiceTitle";

import "react-toastify/dist/ReactToastify.css";
import {
  BodyContainer,
  MainContainer,
  StyledHeader,
  StyledFooter,
} from "components/App/style";

function MainPage() {
  const location = useLocation();
  const parsedUrl = queryString.parse(location.search);

  const games = useSelector((state) => state?.games?.data);
  const currentGame = useSelector((state) => state?.games?.current);
  const selectedTeam = useSelector((state) => state?.selectedTeam.teamName);
  const selectedTeamId = useSelector((state) => state?.selectedTeam.teamId);
  const selectedLeague = useSelector(
    (state) => state?.selectedLeague.leagueName
  );
  const selectedLeagueId = useSelector(
    (state) => state?.selectedLeague.leagueId
  );
  const dispatch = useDispatch();

  const [savedLeague, setSavedLeague] = useLocalStorage("chosen-league", "");
  const [currentGameIndex, setCurrentGameIndex] = useState(currentGame);

  const { data, status, error } = useQuery("getConfig", () =>
    api.config.getConfig()
  );

  useEffect(() => {
    dispatch({
      type: types.GET_LEAGUES_START,
    });
    // eslint-disable-next-line
  }, []);

  //** PARSE URL PARAMS and API FUNCTION AFTER LINK SHARED */

  useEffect(() => {
    if (parsedUrl && !savedLeague) {
      const { game, teamId } = parsedUrl;
      if (game) {
        getTeamsShedule(teamId).then((res) => {
          const gameId = getGameIndex(res, game);
          setCurrentGameIndex(gameId);
        });
      }
    }
    // eslint-disable-next-line
  }, []);

  if (data?.data) {
    dispatch({
      type: types.SET_CONFIG_DATA,
      payload: data?.data,
    });
  }

  console.log("currentGameIndex", currentGameIndex);

  if (status === "loading" && !games && !currentGame) return <Loading />;
  if (status === "error") return <div>{error}</div>;

  return (
    <>
      <ToastContainer autoClose={5000} />
      <BodyContainer>
        <StyledHeader>
          <Header configuration={data?.data} />
        </StyledHeader>
        <MainContainer>
          {!games && !currentGame && data?.data.display_one_team !== "true" && (
            <ChoiceTitle oneLeague={data?.data.display_teams_select} />
          )}
          {!games && !currentGame && <Loading />}
          {data?.data.display_one_team !== "true" && games && currentGame && (
            <Dashboard
              configuration={data?.data}
              // games={games}
              currentGame={currentGameIndex || currentGame}
              selectedTeam={selectedTeam}
              selectedLeague={selectedLeague}
              selectedTeamId={selectedTeamId}
              selectedLeagueId={selectedLeagueId}
            />
          )}
          {games && currentGame && data?.data.display_one_team === "true" && (
            <DashboardOneTeam
              configuration={data?.data}
              currentGame={currentGameIndex || currentGame}
              selectedTeam={selectedTeam}
              selectedLeague={selectedLeague}
              selectedTeamId={selectedTeamId}
              selectedLeagueId={selectedLeagueId}
            />
          )}
        </MainContainer>
        <StyledFooter></StyledFooter>
      </BodyContainer>
    </>
  );
}

export default memo(MainPage);
