import "lazysizes";

export default function Image({ alt, src, previewSrc, webpSrc, className }) {
  return (
    <picture>
      <source type="image/webp" data-srcset={webpSrc} />
      <source type="image/png" data-srcset={src} />
      <img className={`lazyload blur-up ${className}`} alt={alt} src={src} />
    </picture>
  );
}
