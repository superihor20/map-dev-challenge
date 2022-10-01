export const groupByAffectedType = (events) => {
  const groupedByAffectedType = {};

  for (const date in events) {
    groupedByAffectedType[date] = {};

    events[date].forEach((e) => {
      const { affected_number: affectedNumbers, affected_type: affectedTypes } =
        e;

      affectedTypes.forEach((affectedType, index) => {
        if (groupedByAffectedType[date][affectedType]) {
          groupedByAffectedType[date][affectedType] += +affectedNumbers[index];
          return;
        }

        groupedByAffectedType[date][affectedType] = +affectedNumbers[index];
      });
    });
  }

  return groupedByAffectedType;
};
