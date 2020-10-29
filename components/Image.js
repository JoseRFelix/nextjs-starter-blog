import "lazysizes";

export default function Image({ alt, src, previewSrc, webpSrc, className }) {
  return (
    <img
      className={`lazyload blur-up ${className}`}
      alt={alt}
      src={previewSrc}
      data-srcset={webpSrc}
      data-src={src}
      type="image/webp"
    />
  );
}
