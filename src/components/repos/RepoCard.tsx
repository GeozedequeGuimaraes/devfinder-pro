import type { GithubRepo } from "../../api/types";
import { Badge } from "../ui/Badge";
import { getLanguageColor } from "../../utils/getLanguageColor";
import { formatNumber } from "../../utils/formatNumber";

interface Props {
  repo: GithubRepo;
}

export function RepoCard({ repo }: Props) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-blue-600 dark:text-blue-400">
          {repo.name}
        </h3>
        <div className="flex shrink-0 gap-1.5">
          {repo.fork && (
            <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">fork</span>
          )}
          {repo.archived && (
            <span className="rounded bg-yellow-100 px-1.5 py-0.5 text-xs text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">archived</span>
          )}
        </div>
      </div>

      {repo.description && (
        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {repo.description}
        </p>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
        {repo.language && (
          <Badge label={repo.language} color={getLanguageColor(repo.language)} />
        )}
        {repo.topics.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
        <span>⭐ {formatNumber(repo.stargazers_count)}</span>
        <span>🍴 {formatNumber(repo.forks_count)}</span>
      </div>
    </a>
  );
}
