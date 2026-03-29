import type { GithubUser, GithubRepo } from "../../api/types";
import { StatCard } from "../ui/StatCard";
import { formatNumber } from "../../utils/formatNumber";

interface Props {
  user: GithubUser;
  repos: GithubRepo[];
}

export function ProfileStats({ user, repos }: Props) {
  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <StatCard icon="📦" label="Repos" value={formatNumber(user.public_repos)} />
      <StatCard icon="👥" label="Seguidores" value={formatNumber(user.followers)} />
      <StatCard icon="➡️" label="Seguindo" value={formatNumber(user.following)} />
      <StatCard icon="⭐" label="Stars Total" value={formatNumber(totalStars)} />
    </div>
  );
}
