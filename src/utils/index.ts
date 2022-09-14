const areEqual = (prev: any, next: any, first = 'title', second = 'releaseDate') => {
  return prev[first] === next[first] && prev.second === next.second;
};

export { areEqual };
