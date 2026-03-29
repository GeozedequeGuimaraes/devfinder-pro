import { useQuery } from "@tanstack/react-query";
import { fetchRepos } from "../api/reposApi";

export function useGithubRepos(username: string) {
  return useQuery({
    queryKey: ["github-repos", username],
    queryFn: () => fetchRepos(username),
    enabled: !!username,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}
