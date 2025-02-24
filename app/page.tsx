import Navbar from "./components/ui/navbar";
import MainContent from "./maincontent";
import Sidebar from "./sidebar";

const documentationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
          <Sidebar />
        <MainContent />

      </div>
    </div>
  );
};

export default documentationPage;
