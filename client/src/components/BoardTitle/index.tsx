import { FC } from "react";
import "./style.css";

interface Props {
  title: string;
  addition?: boolean;
  action: () => void;
  id: string;
}

const BoardTitle: FC<Props> = ({ title, addition, action, id }) => {
  return (
    <div
      key={id}
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
