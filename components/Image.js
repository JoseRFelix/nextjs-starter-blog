import "lazysizes";

export default function Image({ alt, src, previewSrc, webpSrc, className }) {
  return (
    <img
      className={`lazyload blur-up ${className}`}
      alt={alt}
      src={src}
      srcset={previewSrc}
      data-srcset={webpSrc}
    />
  );
}
