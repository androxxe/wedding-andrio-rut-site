import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col h-screen">
      <h4 className="text-xl font-normal mb-5">Please choose your side</h4>
      <div className="flex items-center flex-col lg:flex-row gap-4">
        <Link href="/general" className="flex items-center justify-center border rounded-xl border-gray-500 w-52 h-52">
          <span className="text-base font-bold">Normal Person</span>
        </Link>
        <Link href="/tech" className="flex items-center justify-center border rounded-xl border-gray-500 w-52 h-52">
          <span className="text-base font-bold">IT Geek</span>
        </Link>
      </div>
    </main>
  );
}
