import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "./navbar";

const Home = () => {
  return (

    <div className="min-h-screen flex flex-col">
      <div><Navbar /></div>
      <Button variant={"destructive"}>
        <Link href="/documents/76176"> Click Me</Link>
      </Button>
    </div>
  );
};

export default Home;
