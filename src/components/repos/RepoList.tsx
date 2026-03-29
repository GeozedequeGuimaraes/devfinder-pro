import { useMemo, useState } from "react";
import type { GithubRepo, RepoFilters as FiltersType } from "../../api/types";
import { RepoCard } from "./RepoCard";
import { RepoFilters } from "./RepoFilters";

interface Props {
  repos: GithubRepo[];
}

export function RepoList({ repos }: Props) {
  const [filters, setFilters] = useState<FiltersType>({
    language: null,
    sort: "stars",
    direction: "desc",
    hideForked: false,
  });

  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => {
      if (r.language) set.add(r.language);
    });
    return Array.from(set).sort();
  }, [repos]);

  const filtered = useMemo(() => {
    let result = [...repos];

    if (filters.hideForked) {
      result = result.filter((r) => !r.fork);
    }

    if (filters.language) {
      result = result.filter((r) => r.language === filters.language);
    }

    result.sort((a, b) => {
      let cmp = 0;
      switch (filters.sort) {
        case "stars":
          cmp = a.stargazers_count - b.stargazers_count;
          break;
        case "forks":
          cmp = a.forks_count - b.forks_count;
          break;
        case "updated":
          cmp =
            new Date(a.pushed_at).getTime() - new Date(b.pushed_at).getTime();
          break;
        case "name":
          cmp = a.name.localeCompare(b.name);
          break;
      }
      return filters.direction === "desc" ? -cmp : cmp;
    });

    return result;
  }, [repos, filters]);

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Repositórios ({filtered.length})
      </h2>
      <RepoFilters
        filters={filters}
        onChange={setFilters}
        languages={languages}
      />
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {filtered.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-2 py-8 text-center text-gray-500 dark:text-gray-400">
            Nenhum repositório encontrado com esses filtros.
          </p>
        )}
      </div>
    </section>
  );
}
