export default function Header() {
  return (
    <>
      <section className="header-secondary">
        <div className="header-contact">
          <ul>
            <li>
              <a href="tel:+1-877-666-1840" title="Call us">
                <i className="fa-solid fa-phone"></i>
                Toll Free 1-877-666-1840
              </a>
            </li>

            <li>
              <a href="mailto:wtv@wtv.com" title="Email us">
                office@traidaffairs.com
              </a>
            </li>
          </ul>
        </div>

        <div className="header-search">
          <ul>
            <li>
              <button type="button" title="Menu">
                <i className="fa-solid fa-bars"></i>
              </button>
            </li>

            <li>
              <button type="button" title="Search">
                <i className="fa-solid fa-search"></i>
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="header-logo"></section>

      <section className="header-primary"></section>
    </>
  );
}
