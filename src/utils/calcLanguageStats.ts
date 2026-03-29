import type { GithubRepo, LanguageStat } from "../api/types";
import { getLanguageColor } from "./getLanguageColor";

export function calcLanguageStats(repos: GithubRepo[]): LanguageStat[] {
  const counts: Record<string, number> = {};
  let total = 0;

  for (const repo of repos) {
    if (repo.language) {
      counts[repo.language] = (counts[repo.language] ?? 0) + 1;
      total++;
    }
  }

  const sorted = Object.entries(counts).sort(([, a], [, b]) => b - a);
  const top5 = sorted.slice(0, 5);
  const othersCount = sorted.slice(5).reduce((sum, [, c]) => sum + c, 0);

  const stats: LanguageStat[] = top5.map(([language, count]) => ({
    language,
    count,
    percentage: Math.round((count / total) * 100),
    color: getLanguageColor(language),
  }));

  if (othersCount > 0) {
    stats.push({
      language: "Outros",
      count: othersCount,
      percentage: Math.round((othersCount / total) * 100),
      color: getLanguageColor("Outros"),
    });
  }

  return stats;
}
