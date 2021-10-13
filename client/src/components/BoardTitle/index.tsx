import { FC } from "react";
import "./style.css";

interface Props {
  title: string;
  addition?: boolean;
  action: () => void;
}

const BoardTitle: FC<Props> = ({ title, addition, action }) => {
  return (
    <div
      onClick={action}
      className={`boardTitle ${
        addition ? " boardTitle_grey " : " boardTitle_blue"
      }`}
    >
      <div>{title}</div>
    </div>
  );
};

export default BoardTitle;
