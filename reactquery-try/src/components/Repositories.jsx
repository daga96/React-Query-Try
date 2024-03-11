import React, { Fragment } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import "../styles/style.css";

const Repositories = () => {
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["repo"],
    () => {
      return axios
        .get("https://api.github.com/users/daga96/repos")
        .then((res) => res.data);
    }
  );

  if (isLoading) return "Loading...";
  if (isError) return "Error: " + error.message;

  console.log(data);

  return (
    <>
      <div className="grid">
        {data.map((repo) => {
          return (
            <div className="grid-element" key={repo.id}>
              <a href={repo.clone_url}>{repo.name}</a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Repositories;
