function paginate<T>(items: T[], pageSize: number, pageNumber: number): T[] {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return items.slice(startIndex, endIndex);
}
function Pagination() {
  return (
    <div className="flex  px-4 py-2 ">
      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 mr-3">
        Previous
      </button>
      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        Next
      </button>
    </div>
  );
}
export default Pagination;
