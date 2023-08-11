import Link from "../components/Link";
import Lights from "../components/Lights";
import roomLights from "./_app";

export default function Rooms({ roomLight, toggleLight }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      <Lights roomLight={roomLight} onToggle={toggleLight} />
    </>
  );
}
