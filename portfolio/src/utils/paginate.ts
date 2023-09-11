export const paginate = (
  array: any[],
  page: number = 1,
  per_page: number = 5,
) => {
  const offset = per_page * (page - 1);

  const totalPages = Math.ceil(array.length / per_page);
  const paginatedArray = array.slice(offset, per_page * page);

  return {
    previousPage: page - 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    total: array.length,
    totalPages: totalPages,
    items: paginatedArray,
  };
};
