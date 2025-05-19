
const ImagePlaceholder: React.FC<{
  alt: string;
  className?: string;
}> = ({ alt, className }) => {
  return (
    <div 
      className={`bg-gray-100 flex items-center justify-center ${className}`}
      role="img" 
      aria-label={alt}
    >
      <div className="text-gray-400 text-xs">{alt}</div>
    </div>
  );
};

export default ImagePlaceholder;
