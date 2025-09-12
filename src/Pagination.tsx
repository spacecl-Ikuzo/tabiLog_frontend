import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from './components/ui/pagination';

type PaginationStyleProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function CustomPagination({ currentPage, totalPages, onPageChange }: PaginationStyleProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const getPages = () => {
    const pages = [];
    const maxPagesToShow = 5; // 한 번에 보여줄 페이지 수

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 5페이지 단위로 그룹핑
      const currentGroup = Math.floor((currentPage - 1) / maxPagesToShow);
      const startPage = currentGroup * maxPagesToShow + 1;
      const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }
    return pages;
  };

  const handlePrevious = () => {
    if (!isFirstPage) {
      onPageChange(Math.floor(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      onPageChange(Math.floor(currentPage + 1));
    }
  };

  const handlePreviousGroup = () => {
    // 현재 페이지가 속한 그룹의 첫 페이지로 이동
    const currentGroup = Math.floor((currentPage - 1) / 5);
    const groupStartPage = currentGroup * 5 + 1;
    onPageChange(groupStartPage);
  };

  const handleNextGroup = () => {
    // 현재 페이지가 속한 그룹의 마지막 페이지로 이동
    const currentGroup = Math.floor((currentPage - 1) / 5);
    const groupEndPage = Math.min((currentGroup + 1) * 5, totalPages);
    onPageChange(groupEndPage);
  };

  return (
    <div className="relative w-[400px] mx-auto">
      {/* 왼쪽 그룹 이동 버튼 */}
      <div className="absolute left-0 top-0 h-full flex items-center z-10 hover:cursor-pointer">
        <PaginationLink onClick={handlePreviousGroup}>&lt;&lt;</PaginationLink>
      </div>
      {/* 왼쪽 화살표 */}
      <div className="absolute left-8 top-0 h-full flex items-center z-10 hover:cursor-pointer">
        <PaginationLink onClick={handlePrevious}>&lt;</PaginationLink>
      </div>
      <Pagination>
        <PaginationContent className="justify-center">
          {getPages().map((page, index) => (
            <PaginationItem key={index}>
              {typeof page === 'number' ? (
                <PaginationLink
                  isActive={page === currentPage}
                  onClick={() => onPageChange(Math.floor(page))}
                  className="hover:cursor-pointer"
                >
                  {page}
                </PaginationLink>
              ) : (
                <PaginationEllipsis />
              )}
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
      {/* 오른쪽 화살표 */}
      <div className="absolute right-8 top-0 h-full flex items-center z-10 hover:cursor-pointer">
        <PaginationLink onClick={handleNext}>&gt;</PaginationLink>
      </div>
      {/* 오른쪽 그룹 이동 버튼 */}
      <div className="absolute right-0 top-0 h-full flex items-center z-10 hover:cursor-pointer">
        <PaginationLink onClick={handleNextGroup}>&gt;&gt;</PaginationLink>
      </div>
    </div>
  );
}
