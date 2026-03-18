export default function Layout({ children }) {
  return (
    <div>
      <nav>
        <a href="/">🎬 WebApp Movies Gabriela</a>
      </nav>

      <main>{children}</main>

      <footer>
        <p>WebApp Movies Gabriela 2026</p>
      </footer>
    </div>
  );
}
