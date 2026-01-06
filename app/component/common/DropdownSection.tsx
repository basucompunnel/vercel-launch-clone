export default function DropdownSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs font-medium text-gray-500 mb-4 uppercase tracking-wider">
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
