export default function ImageBlock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-xs font-semibold uppercase tracking-wide text-slate-500 ${className}`}
    >
      Photo
    </div>
  );
}
