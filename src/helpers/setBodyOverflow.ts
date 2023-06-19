const setBodyOverflow = (isScrolling: boolean) => {
  if (isScrolling) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
};

export default setBodyOverflow;
