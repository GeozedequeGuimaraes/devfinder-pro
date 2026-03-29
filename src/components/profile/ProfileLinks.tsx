import type { GithubUser } from "../../api/types";

interface Props {
  user: GithubUser;
}

export function ProfileLinks({ user }: Props) {
  const links = [
    { icon: "📍", value: user.location },
    { icon: "🏢", value: user.company },
    {
      icon: "🔗",
      value: user.blog,
      href: user.blog?.startsWith("http") ? user.blog : user.blog ? `https://${user.blog}` : undefined,
    },
    {
      icon: "🐦",
      value: user.twitter_username ? `@${user.twitter_username}` : null,
      href: user.twitter_username ? `https://twitter.com/${user.twitter_username}` : undefined,
    },
  ].filter((l) => l.value);

  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
      {links.map((link, i) => (
        <span key={i} className="flex items-center gap-1">
          <span>{link.icon}</span>
          {link.href ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {link.value}
            </a>
          ) : (
            <span>{link.value}</span>
          )}
        </span>
      ))}
    </div>
  );
}
