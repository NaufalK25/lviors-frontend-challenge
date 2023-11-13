import { FC } from 'react';
import {
  CustomFlowbiteTheme,
  Flowbite,
  Pagination as FBPagination
} from 'flowbite-react';

const customPaginationTheme: CustomFlowbiteTheme = {
  pagination: {
    pages: {
      selector: {
        active: 'bg-blue-700 text-white'
      }
    }
  }
};

type PaginationProps = {
  currentPage: number;
  totalPage: number;
  handlePageChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPage,
  handlePageChange
}) => {
  return (
    <div className='flex overflow-x-auto sm:justify-center'>
      <Flowbite theme={{ theme: customPaginationTheme }}>
        <FBPagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={handlePageChange}
        />
      </Flowbite>
    </div>
  );
};

export default Pagination;
