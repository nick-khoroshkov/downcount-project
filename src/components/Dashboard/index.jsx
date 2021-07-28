import React, { useState, useEffect, memo } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Mousewheel } from "swiper";

import GameDate from "components/GameDate";
import Teams from "components/Teams";
import TvChannel from "components/TvChannel";
import GameResult from "components/GameResult";

import "swiper/swiper-bundle.css";
import {
  StyledSection,
  LeftSideBar,
  RightSideBar,
  SlideContent,
} from "./style";

SwiperCore.use([Navigation, Mousewheel]);

function Dashboard({
  // games,
  currentGame,
  selectedTeam,
  selectedLeague,
  selectedTeamId,
  selectedLeagueId,
  configuration,
}) {
  const history = useHistory();
  const [progress, setProgress] = useState();
  const games = useSelector((state) => state?.games?.data);
  const [startGame, setStartGame] = useState(currentGame);

  //** URL CHANGE */
  useEffect(() => {
    if (selectedLeague && selectedTeam) {
      history.push(
        `?league=${selectedLeague.toLowerCase()}&leagueId=${selectedLeagueId}&team=${selectedTeam}&teamId=${selectedTeamId}&game=${progress}`
      );
    }
  }, [
    history,
    selectedLeague,
    selectedTeam,
    progress,
    selectedTeamId,
    selectedLeagueId,
  ]);

  //** FIND event_id FUNCTION */
  function slideChanged(index) {
    if (!games) return;
    const oneGame = games[index]?.event_id;
    if (oneGame) {
      setProgress(oneGame);
    }
  }

  return (
    <>
      <StyledSection>
        <Swiper
          navigation={{
            prevEl: ".swiper-button-prev-unique",
            nextEl: ".swiper-button-next-unique",
          }}
          id="main-slider"
          tag="section"
          wrapperTag="ul"
          mousewheel={true}
          slidesPerView={1}
          grabCursor={true}
          onSlideChange={(swiper) => {
            slideChanged(swiper.activeIndex);
          }}
          initialSlide={startGame}
        >
          {games?.map((game) => (
            <SwiperSlide key={game.event_id} tag="li">
              <SlideContent>
                <Teams
                  team={selectedTeam || configuration.one_team.team_name}
                  opponent={game.event_text}
                  location={game.event_location}
                />
                <GameDate
                  eventTime={game.event_start}
                  eventState={game.event_state}
                />
                <TvChannel channel={game.event_tv_channel} />

                <GameResult
                  date={game.event_start}
                  result={game.event_outcome}
                />
              </SlideContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledSection>
      <LeftSideBar>
        <div className="swiper-button-prev-unique"></div>
      </LeftSideBar>
      <RightSideBar>
        <div className="swiper-button-next-unique"></div>
      </RightSideBar>{" "}
    </>
  );
}

export default memo(Dashboard);
