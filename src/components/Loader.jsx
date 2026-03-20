import { useLoaderContext } from "../contexts/LoaderContext";

export default function Loader() {
  // prendo isLoading dal context
  const { isLoading } = useLoaderContext();

  // se non sta caricando non mostro niente
  if (!isLoading) return null;

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Caricamento...</span>
      </div>
    </div>
  );
}
