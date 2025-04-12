import React from 'react';

type ReplaceMatchesProps = {
  text: string;
  matches: (RegExp | string)[];
  replace: (match: string) => React.ReactNode;
};

function ReplaceMatches({ text, matches, replace }: ReplaceMatchesProps): (string | React.ReactNode)[] {
  if (!text || matches.length === 0) return [text];

  // Build a unified RegExp from all matches
  const pattern = matches
    .map(m => (typeof m === 'string' ? escapeRegExp(m) : m.source))
    .join('|');
  const regex = new RegExp(pattern, 'gi');

  const result: (string | React.ReactNode)[] = [];
  let lastIndex = 0;

  text.replace(regex, (match, offset) => {
    if (lastIndex < offset) {
      result.push(text.slice(lastIndex, offset));
    }
    result.push(replace(match));
    lastIndex = offset + match.length;
    return match;
  });

  // Push remaining text after last match
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
}

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default ReplaceMatches;
