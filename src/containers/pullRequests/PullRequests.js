import React from "react";
import "./PullRequests.css";
import { Fade } from "react-reveal";
import PullRequestCard from "../../components/pullRequestCard/PullRequestCard";

const PullRequests = ({ statsData, theme }) => {
  return (
    <div>
      <div className="pull-requests-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="pull-requests-header" style={{ color: theme.text }}>
            Pull Requests
          </h1>
        </Fade>
      </div>
      <div className="pull-request-body-div">
        {statsData["User"]["PullRequests"]["nodes"].map((pullRequest) => {
          return <PullRequestCard pullRequest={pullRequest} />;
        })}
      </div>
    </div>
  );
};

export default PullRequests;
