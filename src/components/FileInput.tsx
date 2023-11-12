import { Image as ImageIcon } from 'react-feather';

const FileInput = () => {
  const handlePreviewImageChange = (event: React.FormEvent) => {
    const fileInput = event.currentTarget.firstChild as HTMLInputElement;
    if (fileInput.files) {
      const filePath = URL.createObjectURL(fileInput.files[0]);

      const templatePreviewImage = event.currentTarget.lastChild as HTMLElement;
      event.currentTarget.removeChild(templatePreviewImage);

      const newImage = document.createElement('img');
      newImage.src = filePath;
      newImage.alt =
        fileInput.value.split('\\')[fileInput.value.split('\\').length - 1] ||
        '-';
      newImage.width = 100;
      newImage.height = 100;
      event.currentTarget.appendChild(newImage);
    }
  };

  return (
    <div
      className='flex flex-col items-center w-full gap-y-4'
      onChange={event => handlePreviewImageChange(event)}
    >
      <input
        type='file'
        placeholder='Photo'
        className='input'
        accept='.jpg, .jpeg, .png'
      />
      <div className='border border-gray-300 rounded p-4'>
        <ImageIcon
          color='gray'
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default FileInput;
