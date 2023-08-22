export default function Home() {
  return (
    <>
      <header className="header">
        <i className="fa-solid fa-arrow-right"></i>
      </header>

      <main className="content mt-4">
        <picture>
          <img src="/images/logo.jpg" alt="fadssafaz"></img>
        </picture>

        <div className="mt-4">
          <button className="button button-primary">Hello</button>
          <button className="button button-primary button-lg">Hello</button>

          <a href="/" className="button button-primary">
            Hello
          </a>
          <a className="button button-primary button-lg">Hello</a>
        </div>

        <div className="mt-4">
          <button className="button button-primary-outline">Hello</button>
          <button className="button button-primary-outline button-lg">
            Hello
          </button>

          <a href="/" className="button button-primary-outline">
            Hello
          </a>
          <a className="button button-primary-outline button-lg">Hello</a>
        </div>
      </main>

      <footer className="footer">footer</footer>
    </>
  );
}
