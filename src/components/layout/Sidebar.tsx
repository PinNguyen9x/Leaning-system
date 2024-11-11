import { MENU_ITEMS } from "@/constants";

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200">
      <a href="/" className="font-bold text-3xl inline-block mb-5">
        Ucademy
      </a>
      <ul className="flex flex-col gap-2">
        {MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.url}
            url={item.url}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </ul>
    </div>
  );
};

function MenuItem({
  url = "/",
  title = "",
  icon,
}: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={url}
        className="p-3 rounded-md flex items-center gap-3 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all"
      >
        {icon}
        {title}
      </a>
    </li>
  );
}

export default Sidebar;
