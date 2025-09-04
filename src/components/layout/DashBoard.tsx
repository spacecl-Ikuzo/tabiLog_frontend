import Header from './header';
import SideNavigation from './side-navigation';
import { Outlet } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div className="flex">
      <div className="flex flex-none min-h-full w-64 border-r border-gray-300 ">
        <SideNavigation />
      </div>

      <div className="w-full min-h-screen">
        <Header />

        <main className="bg-white p-4 max-w-[1650px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
