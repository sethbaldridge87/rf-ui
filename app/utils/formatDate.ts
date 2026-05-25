export function getOrdinalSuffix(dayValue: number): string {  
  if (dayValue >= 11 && dayValue <= 13) {
    return `${dayValue}th`;
  }

  switch (dayValue % 10) {
    case 1:  return `${dayValue}st`;
    case 2:  return `${dayValue}nd`;
    case 3:  return `${dayValue}rd`;
    default: return `${dayValue}th`;
  }
}