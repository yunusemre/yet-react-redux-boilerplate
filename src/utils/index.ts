const areEqual = (prevMovie: any, nextMovie: any) => {
  return prevMovie.title === nextMovie.title && prevMovie.releaseDate === nextMovie.releaseDate;
};

export { areEqual };
