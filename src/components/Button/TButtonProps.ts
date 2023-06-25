export type TButtonProps = TChildren & {
  classNameBase?: string;
  classNameInner?: string;
  type?: 'button' | 'submit';
  variant?: 'outline-black' | 'outline-gray' | 'solid-green' | 'solid-orange';
  color?: 'black' | 'white' | 'gray';
  onClick?: () => void;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};
