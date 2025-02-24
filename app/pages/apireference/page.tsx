import Navbar from "@/app/components/ui/navbar";
import Sidebar from "./sidebar";

const apireference = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
      </div>
    </div>
  );
};

export default apireference;
