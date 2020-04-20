import "lazysizes";

export default function Image({ alt, src, previewSrc, className }) {
  return (
    <img
      className={`lazyload blur-up ${className}`}
      alt={alt}
      src={previewSrc}
      data-srcset={src}
    />
  );
}
