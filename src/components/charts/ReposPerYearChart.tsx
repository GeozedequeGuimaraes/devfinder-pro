import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { GithubRepo, ReposByYear } from "../../api/types";

interface Props {
  repos: GithubRepo[];
}

function groupByYear(repos: GithubRepo[]): ReposByYear[] {
  const map: Record<string, number> = {};
  for (const repo of repos) {
    const year = new Date(repo.created_at).getFullYear().toString();
    map[year] = (map[year] ?? 0) + 1;
  }
  return Object.entries(map)
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => a.year.localeCompare(b.year));
}

export function ReposPerYearChart({ repos }: Props) {
  const data = groupByYear(repos);

  if (data.length === 0) return null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
        Repos por ano
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="year" tick={{ fill: "#9ca3af", fontSize: 12 }} />
          <YAxis allowDecimals={false} tick={{ fill: "#9ca3af", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              borderRadius: "0.5rem",
              color: "#fff",
            }}
          />
          <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
