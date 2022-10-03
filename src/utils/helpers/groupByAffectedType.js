export const groupByAffectedType = (events) => {
  const groupedByAffectedType = {};

  events.forEach(([date, event]) => {
    groupedByAffectedType[date] = {};

    event.forEach((e) => {
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
  });

  return groupedByAffectedType;
};
