import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Input.css";
import { Octokit } from "@octokit/core";
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
const octokit = new Octokit({ auth: process.env.AUTH_API});

function Input() {
    const [StarCount, setStarCount] = useState(0);
    const [Text, setText] = useState("");
    let getStarcount = async(Text) => {
        let spilitArr = Text.split('/')
        let username = spilitArr[0]
        let repo_name = spilitArr[1]
        const response = await octokit.request(`GET /repos/${username}/${repo_name}`, {
          }).then((response)=>{
              console.log(response.data.stargazers_count)
              setStarCount(response.data.stargazers_count)
          }).catch((err)=>{
              console.log(err)
              console.error(err.message)
          })	
    };
    return (
    <div className="Input">
      <input
        placeholder="username/repo"
        className="Input__box"
        type="text"
        value={Text}
        onChange={(e)=> setText(e.target.value)}
      />
      <button onClick={()=>{getStarcount(Text)}}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </div>
  );
}

export default Input;
