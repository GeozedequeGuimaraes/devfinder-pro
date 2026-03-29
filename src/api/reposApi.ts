import githubClient from "./githubClient";
import type { GithubRepo } from "./types";

export async function fetchRepos(username: string): Promise<GithubRepo[]> {
  const allRepos: GithubRepo[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const { data } = await githubClient.get<GithubRepo[]>(
      `/users/${username}/repos`,
      { params: { per_page: perPage, page, sort: "updated" } }
    );
    allRepos.push(...data);
    if (data.length < perPage) break;
    page++;
  }

  return allRepos;
}
