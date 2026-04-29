import { RenderedSvgFrame } from "@/components/RenderedSvgFrame";

type ImageFrameProps = {
  src: string;
  alt: string;
  label?: string;
};

export function ImageFrame({ src, alt, label }: ImageFrameProps) {
  return <RenderedSvgFrame alt={alt} label={label} src={src} />;
}
