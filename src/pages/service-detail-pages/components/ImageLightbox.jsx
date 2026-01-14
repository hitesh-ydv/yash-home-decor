import React, { useEffect } from "react";
import Icon from "../../../components/AppIcon";

const ImageLightbox = ({ isOpen, image, title, onClose }) => {

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/95
        backdrop-blur-sm
        flex
        items-center
        justify-center
        px-3 sm:px-6
      "
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="
          absolute top-4 right-4
          text-white z-50
          p-2 rounded-full
          bg-black/40
        "
        aria-label="Close image"
      >
        <Icon name="X" size={26} />
      </button>

      {/* Scroll Wrapper (IMPORTANT) */}
      <div
        className="
          w-full
          max-w-5xl
          max-h-[calc(100dvh-5rem)]
          overflow-auto
          flex
          items-center
          justify-center
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt={title}
            className="
              max-w-full
              max-h-[calc(100dvh-8rem)]
              object-contain
              rounded-lg
            "
          />

        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
