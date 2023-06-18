import { useState } from "react";

function useApiSimulation() {
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    //simula tempo de latencia
    const delay = Math.random() + 4000 + 1000;
    await new Promise((resolve) => setTimeout(resolve, delay));

    setLoading(false);
  };

  return { loading, fetchData };
}

export default useApiSimulation;
