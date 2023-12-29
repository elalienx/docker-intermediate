export default function PaginationControls({ state }) {
  const [data, setData] = state;
  const { totalDocs, limit, prevPage, nextPage, page } = data;

  // Properties
  const recordStart = (page - 1) * limit + 1;
  const recordEnd = Math.min(recordStart + limit - 1, totalDocs);

  return (
    <section className="table-controls">
      <button
        disabled={!prevPage}
        onClick={() => setData({ ...data, page: prevPage })}
      >
        Prev
      </button>
      <span>
        Viewing page {page} ({recordStart}-{recordEnd} of {totalDocs})
      </span>
      <button
        disabled={!nextPage}
        onClick={() => setData({ ...data, page: nextPage })}
      >
        Next
      </button>
    </section>
  );
}
