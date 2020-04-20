import { useState } from "react";

export default function Image({
  alt,
  src,
  previewSrc,
  className,
  childProps = {},
  ...rest
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const styles = {
    lqip: {
      filter: "blur(10px)",
    },
  };

  // Hide preview when image has loaded.
  if (imageLoaded) {
    styles.lqip.opacity = 0;
  }

  return (
    <span className={`block relative ${className}`} {...rest}>
      <img
        {...childProps.preview}
        className={`absolute top-0 left-0 z-10 w-full transition-opacity duration-500 ease-in opacity-100 ${
          childProps.preview && childProps.preview.className
        }`}
        src={previewSrc}
        alt={alt}
        style={styles.lqip}
      />

      <img
        {...childProps.img}
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
      />
    </span>
  );
}
