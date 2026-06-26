export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-noir">
      <div className="w-12 h-12 rounded-full border-4 border-expedition border-t-forsythia animate-spin" aria-label="Loading..."></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
