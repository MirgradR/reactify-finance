export const filterStocks = (stocks, value) => {
  return stocks
    .filter((stock) => {
      return stock.description
        .toLowerCase()
        .includes(value.toLocaleLowerCase());
    })
    .slice(0, 9);
};
