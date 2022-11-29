import { CustomColumn } from './style';

const Column: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <CustomColumn>{children}</CustomColumn>;
};

export default Column;
