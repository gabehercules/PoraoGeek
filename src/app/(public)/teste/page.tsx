"use client";

export default function Teste() {
  const handleStartServer = async () => {
    console.log("startando");

    await fetch("https://api.exaroton.com/v1/servers/ce6HHyP4A7mWXDUK/start", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer g1IRJu0Ybgmg237VM4yesZHoyCK4R3PbmwMcASQm1JG6YvNloZ4ayl0lW7llBb898kV4t974naN5rKRYom2wRWKyXwTfHYyB7yH8",
      },
    });
  };

  return (
    <div>
      <h1>Startar Server</h1>
      <button onClick={handleStartServer}>ola</button>
    </div>
  );
}
