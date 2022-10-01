export const calculateNumberOfEventsInOneDate = (events) => {
  return events.reduce((sumOfAllAffects, event) => {
    return (
      sumOfAllAffects +
      event.affected_number.reduce((sumOfAffects, affectNumber) => {
        return sumOfAffects + +affectNumber;
      }, 0)
    );
  }, 0);
};
