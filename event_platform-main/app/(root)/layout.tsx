import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      <div className="flex-1 h-screen flex-col">
        <Header/>
        <main className="flex-1 h-screen">{children}</main>
        <Footer/>
      </div>

  )
}