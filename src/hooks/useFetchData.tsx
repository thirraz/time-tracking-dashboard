import { useEffect, useState } from "react";
import { DataJSON } from "../interfaces/dataJSON";

export const useFetchData = () => {
  const [dataResponse, setDataResponse] = useState<DataJSON[]>([]);

  useEffect(() => {
    fetch("http://localhost:5173/src/utils/data.json")
      .then((r) => r.json())
      .then((dataResponse) => {
        setDataResponse(dataResponse);
      })
      .catch((e) => console.warn(e));
  }, []);

  return { dataResponse };
};
