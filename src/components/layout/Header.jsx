import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { isPathActive, NAV_ITEMS } from "../../utils/navigation";
import NavLinks from "./NavLinks";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();
	const isNavItemActive = (path) => isPathActive(path, location.pathname);
	return (
		<header className="navbar bg-base-100 shadow-lg">
			{/* 漢堡按鈕 */}
			<div
				className={`navbar-start dropdown dropdown-bottom ${
					isMenuOpen ? "dropdown-open" : ""
				}`}
			>
				<div
					className="btn bg-ghost lg:hidden"
					onClick={() => setIsMenuOpen((open) => !open)}
				>
					<HiBars3 className="w-6 h-6" />{" "}
				</div>
				{isMenuOpen && (
					<NavLinks
						items={NAV_ITEMS}
						isActive={isNavItemActive}
						onItemClick={() => setIsMenuOpen(false)}
						listClassName={
							"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box min-w-max md:hidden"
						}
					/>
				)}
				{/* 導覽列的中間部分: Logo品牌 */}
				<Link
					to="/"
					className="btn btn-ghost text-lg font-bold text-primary hover:text-primary-focus transition-colors duration-200"
				>
					🍔早餐時光🍳
				</Link>
				{/* 導覽列的中間部分: 大螢幕的導覽選單 */}
				<div
					className="navbar-center hidden md:flex"
				>
					<NavLinks
						items={NAV_ITEMS}
						isActive={isNavItemActive}
						listClassName="menu menu-horizontal px-1"
					/>
				</div>
			</div>
		</header>
	);
}
