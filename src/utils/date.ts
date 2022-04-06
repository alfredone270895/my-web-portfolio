/**
 * Create a date like '12/11/2020 - 12/11/2021'
 * @param start date start string like '12/11/2020'
 * @param end date end string like '12/11/2021'
 */
export function createDateRangeFormat(start: string, end?: string): string {
  const startDate = new Intl.DateTimeFormat('it-IT', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(start));

  const endDate = end
    ? new Intl.DateTimeFormat('it-IT', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(new Date(end))
    : 'Actual';

  return `${startDate} - ${endDate}`;
}
