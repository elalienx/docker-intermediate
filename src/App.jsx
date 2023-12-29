// Node modules
import { useEffect, useState } from "react";

// Project files
import PaginationControls from "./components/PaginationControls";
import TableLaunch from "./components/TableLaunch";
import "./style/style.css";

export default function App() {
  // Local state
  const [data, setData] = useState({
    docs: [],
    page: 1,
    limit: 10,
    totalDocs: 0,
  });
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const resource = "https://api.spacexdata.com/v5/launches/query";

  // Methods
  useEffect(() => {
    const controller = new AbortController();
    const bodyOptions = { page: data.page, limit: data.limit };
    const body = JSON.stringify({ options: bodyOptions });

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
      signal: controller.signal,
    };

    fetch(resource, options)
      .then((response) => response.json())
      .then((result) => onSuccess(result))
      .catch((error) => onError(error));

    return () => controller.abort();
  }, [data.page, data.limit]);

  function onSuccess(result) {
    console.log(result);
    setData(result);
    setStatus(1);
  }

  function onError(error) {
    console.error(error);
    setStatus(2);
  }

  // Safeguard
  if (status === 2) return <p>❌ Cannot load data.</p>;

  return (
    <div className="App">
      <h1>Space launches</h1>
      <TableLaunch data={data.docs} />
      {status === 0 && <p>🕒 Loading...</p>}
      <PaginationControls state={[data, setData]} />
    </div>
  );
}
