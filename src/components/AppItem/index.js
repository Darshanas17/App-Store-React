const AppItem = (props) => {
  const { appItem } = props;
  const { appName, imageUrl } = appItem;

  return (
    <li className="app-list-cont">
      <img src={imageUrl} alt={appName} className="app-logo" />
      <p className="app-name">{appName}</p>
    </li>
  );
};

export default AppItem;
