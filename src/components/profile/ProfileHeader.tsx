import type { GithubUser } from "../../api/types";
import { formatDate } from "../../utils/formatDate";

interface Props {
  user: GithubUser;
}

export function ProfileHeader({ user }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
      <img
        src={user.avatar_url}
        alt={user.login}
        onError={(e) => {
          e.currentTarget.src = `https://ui-avatars.com/api/?name=${user.login}&size=112&background=3b82f6&color=fff`;
        }}
        className="h-28 w-28 rounded-full border-4 border-white shadow-lg dark:border-gray-700"
      />
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {user.name ?? user.login}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">@{user.login}</p>
        <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
          Membro desde {formatDate(user.created_at)}
        </p>
        {user.bio && (
          <p className="mt-3 max-w-xl text-gray-700 dark:text-gray-300">
            {user.bio}
          </p>
        )}
      </div>
    </div>
  );
}
