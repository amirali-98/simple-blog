import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="my-5 px-3 lg:px-0 lg:max-w-5xl lg:mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
