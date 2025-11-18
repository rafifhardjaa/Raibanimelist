const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changePage = (num) => {
    setPage(num);
    scrollTop();
  };

  const getNumbers = () => {
    const nums = [];

    if (lastPage <= 6) {
      for (let i = 1; i <= lastPage; i++) nums.push(i);
      return nums;
    }

    if (page <= 3) return [1, 2, 3, 4, "...", lastPage];
    if (page >= lastPage - 2)
      return [1, "...", lastPage - 3, lastPage - 2, lastPage - 1, lastPage];

    return [1, "...", page - 1, page, page + 1, "...", lastPage];
  };

  const RoundBtn = ({ disabled, onClick, children }) => (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-12 h-12 flex items-center justify-center rounded-full text-xl font-semibold transition-all
        ${
          disabled
            ? "opacity-30 cursor-not-allowed bg-color-secondary"
            : "bg-color-primary text-color-light hover:bg-color-accent hover:text-color-dark shadow-lg shadow-color-primary/40"
        }
      `}
    >
      {children}
    </button>
  );

  const NumBtn = ({ num }) => (
    <button
      onClick={() => changePage(num)}
      className={`w-11 h-11 flex items-center justify-center rounded-full text-lg transition-all font-semibold
        ${
          num === page
            ? "bg-color-primary text-color-light shadow-lg shadow-color-primary/40 scale-105"
            : "bg-color-secondary hover:bg-color-accent hover:text-color-dark"
        }
      `}
    >
      {num}
    </button>
  );

  return (
    <div className="w-full flex flex-col items-center gap-6 py-8 text-color-dark">
      <div className="flex justify-between w-full max-w-md px-4">
        <RoundBtn disabled={page <= 1} onClick={() => changePage(page - 1)}>
          ‹
        </RoundBtn>

        <RoundBtn
          disabled={page >= lastPage}
          onClick={() => changePage(page + 1)}
        >
          ›
        </RoundBtn>
      </div>

      <div className="w-full max-w-md overflow-x-auto no-scrollbar select-none">
        <div className="flex gap-3 px-4 py-2 items-center justify-center">
          {getNumbers().map((num, i) =>
            num === "..." ? (
              <span key={i} className="px-2 text-xl opacity-60">
                ...
              </span>
            ) : (
              <NumBtn key={i} num={num} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
