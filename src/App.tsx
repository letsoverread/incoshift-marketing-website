import HomePage from "@/pages/home";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { I18nProvider } from "@/contexts/I18nContext";

function App() {
  return (
    <I18nProvider>
      <Header />
      <HomePage />
      <Footer />
    </I18nProvider>
  );
}

export default App;
