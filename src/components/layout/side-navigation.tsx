import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export default function SideNavigation() {
  const { pathname } = useLocation();

  const menuGroups = useMemo(
    () => [
      {
        groupName: '유저',
        items: [{ name: '유저 관리', path: '/user' }],
      },
    ],
    [],
  );

  return (
    <div className="flex flex-col w-full h-full">
      <button className="flex items-center justify-center h-[108px]">
        <Link to="/dashboard">
        </Link>
      </button>

      <div className="p-4 flex flex-col gap-1">
        {menuGroups.map((group) => (
          <div key={group.groupName}>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">{group.groupName}</h4>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname.startsWith(`/dashboard${item.path}`);
                return (
                  <Link to={`/dashboard${item.path}`} key={item.name}>
                    <button
                      className={`w-full flex justify-start items-center px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer hover:text-rose-700
                        ${isActive ? 'bg-white text-rose-700' : 'bg-white text-gray-700'}`}
                    >
                      {item.name}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
