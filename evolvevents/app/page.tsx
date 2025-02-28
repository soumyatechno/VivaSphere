import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <main>
        <Button variant='outline' className="px-10">Click Me</Button>
      </main>
    </div>
  );
}
