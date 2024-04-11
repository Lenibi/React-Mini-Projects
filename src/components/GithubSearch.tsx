"use client";
import React, { useState } from "react";
const API_URL = "https://api.github.com";


interface GithubUser {
  avatar_url: string;
  html_url: string;
  login: string;
}


async function fetchApi(query: string): Promise<GithubUser[]> {
  const response = await fetch(`${API_URL}/search/users?q=${query}`);
  const results = await response.json();
  return results.items || [];
}

const GithubSearch = () => {
  const [results, setResults] = useState<GithubUser[]>([]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const textBox = form.querySelector<HTMLInputElement>('input[name="textBox"]');
    if (!textBox) {
      return;
    }
    const resultsInfo = await fetchApi(textBox.value);
    setResults(resultsInfo);
    console.log(resultsInfo);
    form.reset();
  }


  return (
    <>
      <form onSubmit={onSubmit}>
        <input name="textBox" className="searchBox" type="text" />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
      <h2>Results</h2>

      <ul>
        {results.map((item, index) => {
          return (
            <li key={index}>
              <div className="userProfile">
                <img
                  className="userAvatar"
                  src={item.avatar_url}
                  alt="User profile avatar image"
                />
                <br />
                <a className="userLink" href={item.html_url}>
                  {item.login}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GithubSearch;
