const colors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  Swift: "#FA7343",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Vue: "#41b883",
  Haskell: "#5e5086",
  Lua: "#000080",
  R: "#198CE7",
  Jupyter: "#DA5B0B",
  Elixir: "#6e4a7e",
  Scala: "#c22d40",
  Outros: "#8b8b8b",
};

export function getLanguageColor(language: string): string {
  return colors[language] ?? "#8b8b8b";
}
