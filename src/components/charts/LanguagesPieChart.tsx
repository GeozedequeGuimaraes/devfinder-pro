import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import type { LanguageStat } from "../../api/types";

interface Props {
  data: LanguageStat[];
}

export function LanguagesPieChart({ data }: Props) {
  if (data.length === 0) return null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
        Linguagens usadas
      </h3>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="language"
              cx="50%"
              cy="50%"
              outerRadius={80}
              strokeWidth={2}
              stroke="transparent"
            >
              {data.map((entry) => (
                <Cell key={entry.language} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value} repos`, name]}
              contentStyle={{
                backgroundColor: "#1f2937",
                border: "none",
                borderRadius: "0.5rem",
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <ul className="flex flex-col gap-1.5 text-sm">
          {data.map((s) => (
            <li key={s.language} className="flex items-center gap-2">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-gray-700 dark:text-gray-300">
                {s.language}
              </span>
              <span className="text-gray-400">{s.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
