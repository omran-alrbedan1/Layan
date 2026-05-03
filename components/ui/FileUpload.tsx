import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface FileUploadProps {
  id?: string;
  accept?: string;
  maxSizeMB?: number;
  onFileChange: (file: File | null) => void;
  selectedFile?: File | null;
  className?: string;
  label?: string;
}

export default function FileUpload({
  id = 'file-upload',
  accept = 'image/*',
  maxSizeMB = 5,
  onFileChange,
  selectedFile,
  className = '',
  label,
}: FileUploadProps) {
  const t = useTranslations('customDesign');
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  
  // Use translated label or fallback to provided label
  const uploadLabel = label || t('fileUpload.uploadLabel');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size
      if (file.size > maxSizeMB * 1024 * 1024) {
        alert(t('fileUpload.sizeError', { size: maxSizeMB }));
        e.target.value = '';
        onFileChange(null);
        return;
      }
      
      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
      
      onFileChange(file);
    } else {
      onFileChange(null);
      setPreview(null);
    }
  };

  const handleRemove = () => {
    const input = document.getElementById(id) as HTMLInputElement;
    if (input) input.value = '';
    onFileChange(null);
    setPreview(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > maxSizeMB * 1024 * 1024) {
        alert(t('fileUpload.sizeError', { size: maxSizeMB }));
        return;
      }
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
      onFileChange(file);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-all duration-200 ${
          isDragging 
            ? 'border-[#c9a98a] bg-[#c9a98a]/5' 
            : 'border-gray-300 hover:border-[#c9a98a] hover:bg-gray-50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          id={id}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
        
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt={t('fileUpload.previewAlt')}
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 transition-colors shadow-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <label
            htmlFor={id}
            className="flex flex-col items-center justify-center cursor-pointer py-4"
          >
            <div className="w-16 h-16 rounded-full bg-[#c9a98a]/10 flex items-center justify-center mb-4">
              <Upload className="w-8 h-8 text-[#c9a98a]" />
            </div>
            <p className="text-sm font-medium text-gray-700 mb-1">{uploadLabel}</p>
            <p className="text-xs text-gray-500 text-center">
              {t('fileUpload.dragDropText')}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              {t('fileUpload.maxSizeText', { size: maxSizeMB })}
            </p>
          </label>
        )}
      </div>
      
      {selectedFile && !preview && (
        <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
          <ImageIcon className="w-4 h-4 text-[#c9a98a]" />
          <span className="text-xs text-green-700 flex-1 truncate">
            {selectedFile.name}
          </span>
          <span className="text-xs text-green-600">
            ({(selectedFile.size / 1024).toFixed(2)} KB)
          </span>
          <button
            type="button"
            onClick={handleRemove}
            className="text-[#c9a98a] hover:text-[#b8956f] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
