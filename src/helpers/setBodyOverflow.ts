const setBodyOverflow = (isBurgerMenuShow: boolean) => {
  if (isBurgerMenuShow) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
};

export default setBodyOverflow;
