import { axiosInstance } from '../../api/axios';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../store';
import { toast } from 'sonner';
export default function TopNavigation() {
  const { email } = useUserStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    axiosInstance.post('/auth/logout');
    toast.success('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <div className="flex items-center justify-between w-full h-full p-4">
      <div className="flex justify-end items-center w-full mr-8">
        <DropdownMenu>
          <DropdownMenuTrigger className="!focus-visible:ring-0 bg-stone-900 p-2 rounded-sm text-stone-100 hover:bg-stone-900/80">
            {email.split('@')[0]} 님
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleLogout}>로그아웃</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
