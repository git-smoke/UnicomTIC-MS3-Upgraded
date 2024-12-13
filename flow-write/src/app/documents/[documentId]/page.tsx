import { Editor } from "./editor";
import { Navbar } from "./navbar";
import Toolbar from "./toolbar";

const DocumentPage = () => {
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Navbar />
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentPage;
