export type TButtonProps = TChildren & {
  type?: 'button' | 'submit';
  classNameBase?: string;
  classNameInner?: string;
  space?: string;
  variant?: 'outline-black' | 'outline-gray' | 'solid-green' | 'solid-orange';
  color?: 'black' | 'white' | 'gray';
  onClick?: () => void;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};
