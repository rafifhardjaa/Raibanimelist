
const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop()
  }
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop()
  }
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-light text-xl">
      {page <= 1 ? null :
        <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Previous Page</button>
      }

      <p>{page} of {lastPage}</p>
      {page >= lastPage ? null :
        <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next Page</button>
      }
    </div>
  );
}

export default Pagination;
