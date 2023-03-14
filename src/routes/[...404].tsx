import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Visit{" "}
        <a href="https://romeblockchain.com" target="_blank">
          Rome Blockchain
        </a>{" "}
        for best set of web3 trading tools.
      </p>
    </main>
  );
}
