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
      newImage.style.border = '1px solid rgb(209 213 219 / 1)';
      newImage.style.borderRadius = '0.5rem';
      newImage.style.width = '150px';
      newImage.style.height = '150px';
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
          width={150}
          height={150}
          className='border border-gray-300 rounded-lg text-center'
        />
      ) : (
        <div className='border border-gray-300 rounded p-4'>
          <ImageIcon
            color='gray'
            width={150}
            height={150}
          />
        </div>
      )}
    </div>
  );
};

export default FileInput;
