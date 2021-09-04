import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./MainSection.css";
import { Octokit } from "@octokit/core";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Star from "./Star";
import Confetti from "react-confetti";

const octokit = new Octokit({ auth: process.env.AUTH_API });

function MainSection() {
  const [StarCount, setStarCount] = useState(0);
  const [RenderStar, setRenderStar] = useState(false);
  const [Text, setText] = useState("");
  let getStarcount = async (Text) => {
    let spilitArr = Text.split("/");
    let username = spilitArr[0];
    let repo_name = spilitArr[1];
    // eslint-disable-next-line
    const response = await octokit
      .request(`GET /repos/${username}/${repo_name}`, {})
      .then((response) => {
        console.log(response.data.stargazers_count);
        setStarCount(response.data.stargazers_count);
      })
      .catch((err) => {
        console.log(err);
        console.error(err.message);
      });
    setRenderStar(true);
  };
  return (
    <div className="mainSection">
      <div className="Input">
        <input
          placeholder="username/repo"
          className="Input__box"
          type="text"
          value={Text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="input__btn"
          onClick={() => {
            getStarcount(Text);
          }}
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div>
      <div>
        {" "}
        {RenderStar ? (
          <>
            <Star size={StarCount} />
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={2000}
              recycle={false}
            />
          </>
        ) : null}{" "}
      </div>
    </div>
  );
}

export default MainSection;
