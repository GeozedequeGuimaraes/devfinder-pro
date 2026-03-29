import githubClient from "./githubClient";
import type { GithubUser } from "./types";

export async function fetchUser(username: string): Promise<GithubUser> {
  const { data } = await githubClient.get<GithubUser>(`/users/${username}`);
  return data;
}
