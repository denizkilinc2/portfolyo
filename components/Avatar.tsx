import { fotograf } from "@/data/site";

export default function Avatar() {
  return (
    <span className="relative flex h-12 w-12 flex-none items-center justify-center overflow-hidden rounded-full border border-line bg-ink-card">
      {fotograf.hazir ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={fotograf.src}
          alt={fotograf.alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="font-mono text-[0.8rem] font-bold tracking-tight text-accent">
          DK
        </span>
      )}

      {/* Kenardaki ince kehribar halka */}
      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-accent/25" />
    </span>
  );
}