import "./settings.css";

const Settings = () => {
  const handleDarkMode = () => {
    document.documentElement.style.setProperty("--background-color", "#1c1d1f");
  };
  return (
    <>
      <section className="settings-section">
        <section className="settings-section-container">
          <h1>Ustawienia</h1>
          <p>
            Kolory strony <button className="darkModebtn">Dark Mode</button>{" "}
            <button className="lightModebtn">Light Mode</button>{" "}
          </p>
        </section>
      </section>
    </>
  );
};

export default Settings;
