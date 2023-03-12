import "./Main.css";

const MainContent = ({ padgheome, Manager }) => {
  return (
    <div>
      <main>
        {padgheome}
        <br />
        Desinged {Manager}
      </main>
    </div>
  );
};

export default MainContent;
