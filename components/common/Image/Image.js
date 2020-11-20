import "lazysizes";

export function Image({ alt, src, previewSrc, webpSrc, className }) {
  return (
    <picture className={className}>
      <source type="image/webp" data-srcset={webpSrc} />
      <source type="image/png" data-srcset={src} />
      <img
        className={`lazyload blur ${className}`}
        alt={alt}
        src={previewSrc}
      />
    </picture>
  );
}
