import AdminNavBar from "../ui/admin/nav-links";
import AdminSideBar from "../ui/admin/sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex bg-admin-main-content text-text
                    
    "
    >
      <aside className="flex w-[20%] pr-2">
        <AdminSideBar />
      </aside>
      {/* Navbar */}
      <main className="screen flex w-full flex-col p-2 ">
        <nav>
          <AdminNavBar />
        </nav>
        <div>{children}</div>
      </main>
      {/* Sidebar */}
    </div>
  );
}

export default Layout;
