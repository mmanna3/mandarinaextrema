import Body from "./components/body";
import FooterRedesSociales from "./components/footerRedesSociales";
import Header from "./components/headerMenu";

function App() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <div className="">
        <main className="max-w-3xl mx-auto">
          <Body />
        </main>
      </div>

      <FooterRedesSociales />
    </div>
  );
}

export default App;
