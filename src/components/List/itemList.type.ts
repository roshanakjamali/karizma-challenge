export interface ItemProps {
  avatar?: string;
  title: string;
  description: string;
  clickHandler?: () => void;
  key: number;
}
