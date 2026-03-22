export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-sunshine">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-sky/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-sky animate-spin" />
        </div>
        <p className="text-slate text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
