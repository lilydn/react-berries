const removeHyphens = (str: string): string => {
  return str.replace(/-/g, ' ');
};

export { removeHyphens };
