import { FC } from 'react';
import { Image as ImageIcon } from 'react-feather';
import { FileInput as FBFileInput } from 'flowbite-react';

type FileInputProps = { src?: string; disabled?: boolean };

const FileInput: FC<FileInputProps> = ({ src, disabled }) => {
  const handlePreviewImageChange = (event: React.FormEvent) => {
    const fileInput = event.currentTarget.firstChild?.firstChild
      ?.firstChild as HTMLInputElement;
    if (fileInput.files) {
      const filePath = URL.createObjectURL(fileInput.files[0]);

      const templatePreviewImage = event.currentTarget.lastChild as HTMLElement;
      event.currentTarget.removeChild(templatePreviewImage);

      const newImage = document.createElement('img');
      newImage.src = filePath;
      newImage.alt = 'display-tmp';
      newImage.width = 150;
      newImage.height = 150;
      event.currentTarget.appendChild(newImage);
    }
  };

  return (
    <div
      className='flex flex-col items-center w-full gap-y-4'
      onChange={event => handlePreviewImageChange(event)}
    >
      <FBFileInput
        className='w-full'
        accept='.jpg, .jpeg, .png'
        disabled={disabled}
      />

      {src ? (
        <img
          src={src}
          alt='display-tmp'
          width={100}
          height={100}
        />
      ) : (
        <div className='border border-gray-300 rounded p-4'>
          <ImageIcon
            color='gray'
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default FileInput;
