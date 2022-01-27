// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { octokit } from './octokit';

export function Commits(params: any): React.ReactElement {

  const { owner, repo, per_page, sha } = params;
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    octokit.repos.listCommits({ owner, repo, per_page, sha }).then(res => setCommits(res.data));
  }, [owner, repo, per_page]);

  return <div className="Commits">
    <h1><code>magento/magento2/2.4-develop</code></h1>
    {
      commits.length ?
        <table>
          <thead>
            <tr>
              <th>Hash</th>
              <th>Author</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {commits.map(commit =>
              <tr key={commit.sha}>
                <td>{commit.sha}
                </td>
                <td>{commit.commit.author.name}</td>
                <td>{commit.commit.message}</td>
                <td>{commit.commit.author.date}</td>
              </tr>
            )}
          </tbody>
        </table>
        : <h1>Loading...</h1>
    }

  </div>
}