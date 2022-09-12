const areEqual = (prev: any, next: any) => {
  return prev.title === next.title && prev.releaseDate === next.releaseDate;
};

export { areEqual };
