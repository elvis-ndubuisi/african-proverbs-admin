import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>OOPS</h1>
      <p>error occured</p>
      <p>{/* <i>{error?.statusText || error?.message}</i> */}</p>
      <span>fix error typescript type error</span>
    </div>
  );
}
