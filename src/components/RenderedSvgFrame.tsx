import Image from "next/image";

type RenderedSvgFrameProps = {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
};

export function RenderedSvgFrame({
  src,
  alt,
  label,
  priority
}: RenderedSvgFrameProps) {
  return (
    <figure className="overflow-hidden rounded-card border border-border bg-sand shadow-soft">
      <div className="relative aspect-[16/10] w-full">
        <Image
          alt={alt}
          className="h-full w-full object-cover"
          fill
          loading={priority ? undefined : "lazy"}
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={src}
        />
      </div>
      {label ? (
        <figcaption className="border-t border-border bg-warm px-4 py-3 text-sm font-semibold text-harbor">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
