import Image from "next/image";

export default function ImageBlock({
  className = "",
  src,
  alt,
  priority = false,
}: {
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-xs font-semibold uppercase tracking-wide text-slate-500 ${className}`}
      >
        Photo
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-stone-200 ${className}`}>
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
