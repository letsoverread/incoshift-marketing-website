import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { I18nProvider } from "@/contexts/I18nContext";
import { Outlet, useLocation } from "react-router";

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/blog/tennis-recap";

  return (
    <I18nProvider>
      {!hideLayout && <Header />}
      <Outlet />
      {!hideLayout && <Footer />}
    </I18nProvider>
  );
}

export default App;
