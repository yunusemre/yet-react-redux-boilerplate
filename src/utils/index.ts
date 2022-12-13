const areEqual = (prev: any, next: any, first = 'title', second = 'releaseDate') => {
  return prev[first] === next[first] && prev.second === next.second;
};

const clearStorage = () => {
  localStorage.clear();
};

const focusElement = (ref: any) => {
  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start',
  });
};

const selectDefaultValue = (options: any, value: any) => {
  return options ? options.find((opt: any) => opt.value === value) : '';
};

export { areEqual, clearStorage, focusElement, selectDefaultValue };
