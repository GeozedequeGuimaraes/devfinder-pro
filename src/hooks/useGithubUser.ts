import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/userApi";

export function useGithubUser(username: string) {
  return useQuery({
    queryKey: ["github-user", username],
    queryFn: () => fetchUser(username),
    enabled: !!username,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}
