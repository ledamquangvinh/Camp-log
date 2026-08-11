'use client';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold text-red-700">
        Something went wrong
      </h1>

      <p className="mt-4 max-w-md text-gray-600">
        We couldn't load this page. Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="mt-8 rounded-lg bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-700"
      >
        Try Again
      </button>
    </div>
  );
}