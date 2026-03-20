// importo il componente Loader
import Loader from "./Loader";
export default function Layout({ children }) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="/">
          <i className="bi bi-film"></i>&nbsp; Gabriela's Movies
        </a>
      </nav>

      {/* mostro il loader su tutte le pagine */}
      <Loader />

      <main className="container my-4">{children}</main>

      <footer className="bg-dark text-white text-center py-3">
        <p>WebApp Movies Gabriela 2026</p>
      </footer>
    </div>
  );
}
