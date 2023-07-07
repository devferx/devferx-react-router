import { Link } from "../Link";

export default function NotFoundPage() {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img
          src="https://midu.dev/images/this-is-fine-404.gif"
          alt="Gif This is ok dog"
        />
      </div>
      <Link to="/">Volver a la Home</Link>
    </>
  );
}
