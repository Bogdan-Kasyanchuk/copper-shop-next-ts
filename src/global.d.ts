export {};

declare global {
  type TChildren = {
    children: React.ReactNode;
  };

  type TBoxProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
    as?: React.ElementType;
  };
}
