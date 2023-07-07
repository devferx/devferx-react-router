import { navigate } from "../App";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1604555942502203393/c0Uq0raW_400x400.jpg"
          alt="Devferx profile"
        />
        <p>¡Hola soy Devferx, Frontend Developer!</p>
      </div>
      <button onClick={() => navigate("/")}>Ir al home</button>
    </>
  );
}
