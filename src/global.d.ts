export {};

declare global {
  type TChildren = {
    children: React.ReactNode;
  };

  type TBoxProps = {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
  };
}
