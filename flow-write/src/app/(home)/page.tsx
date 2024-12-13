import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button variant={"destructive"}>
        <Link href="/documents/76176"> Click Me</Link>
      </Button>
    </div>
  );
};

export default Home;
