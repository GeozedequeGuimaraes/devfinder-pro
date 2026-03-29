interface Props {
  label: string;
  value: string | number;
  icon: string;
}

export function StatCard({ label, value, icon }: Props) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <span className="text-2xl">{icon}</span>
      <span className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
        {value}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
    </div>
  );
}
