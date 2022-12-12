import { Button, SearchInput } from "../components";

import Logo from "../assets/images/chottot_logo.png";
import {
  ChatIcon,
  HomeIcon,
  NewsManagementIcon,
  NotificationIcon,
  OrderIcon,
  SeeMoreIcon,
} from "../icons";

interface HomeLayoutProps {
  children?: React.ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <div className="bg-[#ffba00] w-full">
        <div className="flex justify-between items-center mx-auto md:w-[768px] lg:w-[1024px]">
          <div className="flex-[0.3]">
            <img src={Logo} alt="Cho Tot" />
          </div>
          <div className="flex justify-between flex-1">
            <div className="flex items-center">
              <HomeIcon className="md:text-2xl" />
              <span className="pl-2">Trang chủ</span>
            </div>
            <div className="flex items-center">
              <NewsManagementIcon className="md:text-2xl" />
              <span className="pl-2">Quản lý tin</span>
            </div>
            <div className="flex items-center">
              <OrderIcon className="md:text-2xl" />
              <span className="pl-2">Đơn Hàng</span>
            </div>
            <div className="flex items-center">
              <ChatIcon className="md:text-2xl" />
              <span className="pl-2">Chat</span>
            </div>
            <div className="flex items-center">
              <NotificationIcon className="md:text-2xl" />
              <span className="pl-2">Thông báo</span>
            </div>
            <div className="flex">
              <SeeMoreIcon className="md:text-2xl" />
              <span className="pl-2">Thêm</span>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
      <div>footer</div>
    </>
  );
}

export default HomeLayout;
