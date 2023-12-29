// Project files
import friendlyDate from "../scripts/friendlyDate";

export default function ItemLaunch({ item }) {
  const { name, date_local, success, links } = item;

  // Properties
  const imageSource = links?.patch?.small;
  const date = friendlyDate(date_local);
  const launchSuccess = success ? "Yay ✅" : "Nay ❌";

  return (
    <tr className="item-launch">
      <td>
        <img src={imageSource} />
      </td>
      <td className="truncate">{name}</td>
      <td>{date}</td>
      <td>{launchSuccess}</td>
    </tr>
  );
}
