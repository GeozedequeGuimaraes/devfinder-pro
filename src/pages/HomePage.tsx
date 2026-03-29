import { useNavigate } from "react-router-dom";
import { SearchBar } from "../components/ui/SearchBar";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { useSearchHistory } from "../store/searchHistoryStore";

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return "agora";
  if (mins < 60) return `${mins}min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
}

export function HomePage() {
  const navigate = useNavigate();
  const { history, clearHistory } = useSearchHistory();

  const handleSearch = (username: string) => {
    navigate(`/profile/${username}`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          DevFinder Pro
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Explore qualquer perfil do GitHub
        </p>

        <SearchBar onSearch={handleSearch} />

        {history.length > 0 && (
          <div className="w-full max-w-lg">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Buscas recentes
              </span>
              <button
                onClick={clearHistory}
                className="text-xs text-red-500 hover:text-red-600"
              >
                Limpar
              </button>
            </div>
            <ul className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
              {history.map((item) => (
                <li key={item.username}>
                  <button
                    onClick={() => navigate(`/profile/${item.username}`)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <img
                      src={item.avatarUrl}
                      alt={item.username}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="flex-1 font-medium text-gray-900 dark:text-white">
                      {item.username}
                    </span>
                    <span className="text-xs text-gray-400">
                      {timeAgo(item.searchedAt)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
