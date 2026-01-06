import { IconType } from "react-icons";

export default function DropdownItem({
  icon: Icon,
  title,
  description,
}: {
  icon: IconType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 cursor-pointer bg-transparent hover:bg-white  p-2 rounded-lg transition-all group/item">
      <div className="p-2 rounded-md border border-gray-200 bg-transparent group-hover/item:bg-black group-hover/item:border-black transition-colors">
        <Icon className="w-5 h-5 text-gray-700 group-hover/item:text-white flex-shrink-0 transition-colors" />
      </div>
      <div>
        <div className="font-medium text-sm text-black">{title}</div>
        <div className="text-xs text-gray-600 group-hover/item:text-black transition-colors">{description}</div>
      </div>
    </div>
  );
}
