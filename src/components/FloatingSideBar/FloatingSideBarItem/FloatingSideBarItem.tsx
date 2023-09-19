import "./FloatingSideBarItem.css";

interface Props {
  icon: React.ReactNode;
  title: string;
}
export const FloatingSideBarItem: React.FC<Props> = ({ icon, title }) => {
  return (
    <li>
      <a href={`#${title}`} className="floatingSidebar__item">
        {icon}
        <p>{title}</p>
      </a>
    </li>
  );
};
