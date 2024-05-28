import "./App.css";
export function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Reddit avatar"
          src="https://unavatar.io/reddit.com"
        />
        <div className="tw-followCard-info">
          <strong>Reddit Twitter</strong>
          <span className="tw-followCard-infoUserName">@Reddit</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
