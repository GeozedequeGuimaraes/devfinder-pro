import type { RepoFilters as Filters } from "../../api/types";

interface Props {
  filters: Filters;
  onChange: (filters: Filters) => void;
  languages: string[];
}

export function RepoFilters({ filters, onChange, languages }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        value={filters.language ?? ""}
        onChange={(e) =>
          onChange({ ...filters, language: e.target.value || null })
        }
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        <option value="">Todas linguagens</option>
        {languages.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>

      <select
        value={filters.sort}
        onChange={(e) =>
          onChange({ ...filters, sort: e.target.value as Filters["sort"] })
        }
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="updated">Atualização</option>
        <option value="name">Nome</option>
      </select>

      <select
        value={filters.direction}
        onChange={(e) =>
          onChange({
            ...filters,
            direction: e.target.value as Filters["direction"],
          })
        }
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
      >
        <option value="desc">Decrescente</option>
        <option value="asc">Crescente</option>
      </select>

      <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <input
          type="checkbox"
          checked={filters.hideForked}
          onChange={(e) =>
            onChange({ ...filters, hideForked: e.target.checked })
          }
          className="rounded"
        />
        Ocultar forks
      </label>
    </div>
  );
}
