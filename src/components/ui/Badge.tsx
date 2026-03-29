interface Props {
  label: string;
  color?: string;
}

export function Badge({ label, color }: Props) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
      style={{ backgroundColor: color ?? "#6b7280" }}
    >
      {label}
    </span>
  );
}
