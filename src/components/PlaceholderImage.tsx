import { RenderedSvgFrame } from "@/components/RenderedSvgFrame";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  label?: string;
};

export function PlaceholderImage({ src, alt, label }: PlaceholderImageProps) {
  return <RenderedSvgFrame alt={alt} label={label} src={src} />;
}
