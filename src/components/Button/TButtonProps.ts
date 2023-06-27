export type TButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  classNameInner?: string;
  space?: string;
  align?: 'start' | 'center' | 'end';
  variant?: 'outline-black' | 'outline-gray' | 'solid-green' | 'solid-orange';
  color?: 'black' | 'white' | 'gray';
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};
