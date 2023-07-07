import { Link } from "../Link";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <h1>
        Esta es una pagina de ejemplo para crear un React Router desde cero
      </h1>
      <Link to={"/about"}>Ir a sobre nosotros</Link>
    </>
  );
}
