interface Props {
  title: string;
  message: string;
  onBack?: () => void;
}

export function ErrorMessage({ title, message, onBack }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <div className="text-6xl">😕</div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="max-w-md text-gray-500 dark:text-gray-400">{message}</p>
      {onBack && (
        <button
          onClick={onBack}
          className="mt-2 rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
        >
          Voltar
        </button>
      )}
    </div>
  );
}
