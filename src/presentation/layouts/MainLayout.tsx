// components/layout.js
import SideBar from "../components/shared/SideBar"

export default function Layout({ children }: {children: JSX.Element}) {
  return (
    <div
      className={`grid min-h-screen grid-cols-[auto_1fr] justify-center overflow-hidden text-white`}
    >
      <div className="flex h-screen flex-col items-center justify-between bg-slate-500">
        <SideBar/>
      </div>
      <div className="h-screen w-full overflow-y-scroll">
        <main className="min-h-screen w-full bg-primaryBg">
          {children}
        </main>
      </div>
    </div>
  )
}