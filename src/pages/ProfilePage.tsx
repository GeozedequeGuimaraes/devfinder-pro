import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useGithubUser } from "../hooks/useGithubUser";
import { useGithubRepos } from "../hooks/useGithubRepos";
import { useSearchHistory } from "../store/searchHistoryStore";
import { calcLanguageStats } from "../utils/calcLanguageStats";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import { ProfileStats } from "../components/profile/ProfileStats";
import { ProfileLinks } from "../components/profile/ProfileLinks";
import { RepoList } from "../components/repos/RepoList";
import { LanguagesPieChart } from "../components/charts/LanguagesPieChart";
import { ReposPerYearChart } from "../components/charts/ReposPerYearChart";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { Skeleton } from "../components/ui/Skeleton";
import { ErrorMessage } from "../components/ui/ErrorMessage";
import { SearchBar } from "../components/ui/SearchBar";

export function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const addSearch = useSearchHistory((s) => s.addSearch);

  const {
    data: user,
    isLoading: loadingUser,
    error: userError,
  } = useGithubUser(username ?? "");

  const {
    data: repos,
    isLoading: loadingRepos,
    error: reposError,
  } = useGithubRepos(username ?? "");

  useEffect(() => {
    if (user) {
      addSearch({ username: user.login, avatarUrl: user.avatar_url });
    }
  }, [user, addSearch]);

  const handleSearch = (newUsername: string) => {
    navigate(`/profile/${newUsername}`);
  };

  const isLoading = loadingUser || loadingRepos;
  const error = userError ?? reposError;
  const languageStats = useMemo(
    () => calcLanguageStats(repos ?? []),
    [repos]
  );

  if (error) {
    const status = axios.isAxiosError(error) ? error.response?.status : null;
    const is404 = status === 404;
    const isRateLimit = status === 403 || status === 429;

    return (
      <div className="min-h-screen px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              &larr; Voltar
            </button>
            <ThemeToggle />
          </div>
          {is404 ? (
            <ErrorMessage
              title="Usuário não encontrado"
              message={`O usuário '@${username}' não existe no GitHub.`}
              onBack={() => navigate("/")}
            />
          ) : isRateLimit ? (
            <ErrorMessage
              title="Limite da API atingido"
              message="Limite de requisições da API do GitHub atingido. Tente novamente em alguns minutos."
              onBack={() => navigate("/")}
            />
          ) : (
            <ErrorMessage
              title="Erro"
              message="Ocorreu um erro ao buscar o perfil. Tente novamente."
              onBack={() => navigate("/")}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => navigate("/")}
            className="self-start text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            &larr; Voltar
          </button>
          <SearchBar onSearch={handleSearch} initialValue={username} />
          <ThemeToggle />
        </div>

        {isLoading ? (
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Skeleton className="h-28 w-28 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-64" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-24" />
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Skeleton className="h-64" />
              <Skeleton className="h-64" />
            </div>
          </div>
        ) : user ? (
          <div className="flex flex-col gap-8">
            <ProfileHeader user={user} />
            <ProfileLinks user={user} />
            <ProfileStats user={user} repos={repos ?? []} />

            {repos && repos.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <LanguagesPieChart data={languageStats} />
                <ReposPerYearChart repos={repos} />
              </div>
            )}

            {repos ? (
              <RepoList repos={repos} />
            ) : loadingRepos ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <Skeleton className="h-64" />
                <Skeleton className="h-64" />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
