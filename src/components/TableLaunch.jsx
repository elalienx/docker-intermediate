// Project files
import ItemLaunch from "../components/ItemLaunch";

export default function TableLaunch({ data }) {
  // Components
  const Items = data.map((item) => <ItemLaunch key={item.id} item={item} />);

  return (
    <table>
      <thead>
        <tr>
          <th>Patch</th>
          <th>Launch name</th>
          <th>Date</th>
          <th>Successful?</th>
        </tr>
      </thead>
      <tbody>{Items}</tbody>
    </table>
  );
}
