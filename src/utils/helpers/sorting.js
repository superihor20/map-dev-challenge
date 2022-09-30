const compare = (a, b, order) => {
  if (a < b) {
    return order === 'desc' ? 1 : -1;
  }

  if (a > b) {
    return order === 'desc' ? -1 : 1;
  }

  return 0;
};

export const sorting = (data, order = 'desc', byField, modify) => {
  const arr = [...data];

  arr.sort((a, b) => {
    const valueA = a[byField] ?? a;
    const valueB = b[byField] ?? b;
    const modifiedA = modify?.(valueA) ?? valueA;
    const modifiedB = modify?.(valueB) ?? valueB;

    return compare(modifiedA, modifiedB, order);
  });

  return arr;
};
