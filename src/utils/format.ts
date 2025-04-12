export function snippetAroundMatch(valueString: string, searchString: string, sizeNumber: number) {
  if (!valueString || !searchString || sizeNumber <= 0) return '';

  const index = valueString.toLowerCase().indexOf(searchString.toLowerCase());
  if (index === -1) return valueString.slice(0, sizeNumber); // fallback: return start slice

  const start = Math.max(0, index - Math.floor((sizeNumber - searchString.length) / 2));
  const end = Math.min(valueString.length, start + sizeNumber);

  let snippet = valueString.slice(start, end);

  // Add ellipsis if content was trimmed
  if (start > 0) snippet = '...' + snippet;
  if (end < valueString.length) snippet = snippet + '...';

  return snippet;
}
