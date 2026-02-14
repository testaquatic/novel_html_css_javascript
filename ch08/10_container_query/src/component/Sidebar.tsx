import type { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

type SidebarProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  listData: string[];
};

function Sidebar({ listData, className, ...props }: SidebarProps) {
  return (
    <div className={`sidebar ${className}`} {...props}>
      <h3>카테고리</h3>
      <ul>
        {listData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
