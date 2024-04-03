import Sidebar from "./_component/sidebar/page";

interface DashboardLayoutProps{
    children:React.ReactNode;
}

const DashboardLayout = ({children}:DashboardLayoutProps) => {
    return (
        <main>
            <Sidebar/>
            <div className="pl-[60px]">
                {children}
            </div>
        </main>
    );
}

export default DashboardLayout;