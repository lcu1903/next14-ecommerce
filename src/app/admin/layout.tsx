import AdminNavBar from '../ui/admin/nav-links';
import AdminSideBar from '../ui/admin/dashboard/sidebar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-admin-main-content text-text
                    
    ">
      <aside className="flex w-[20%] pr-2">
        <AdminSideBar />
      </aside>
      {/* Navbar */}
      <main className="flex flex-col screen w-full p-2 ">
        <nav><AdminNavBar /></nav>
        <div>{children}</div>
      </main>
      {/* Sidebar */}
    </div>
  );
}

export default Layout;
