import { useState } from "react";
import { HiBars3, HiMoon, HiSun } from "react-icons/hi2";
import { HiSave } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { isPathActive, NAV_ITEMS } from "../../utils/navigation";
import NavLinks from "./NavLinks";
import useTheme from "../../hooks/useTheme";
import UserMenu from "./UserMenu";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme("dark");
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
                    你媽早餐時光🐱‍👤
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
                {/* 導覽列右邊部分: 切換主題、使用者設定 */}
                <div className="navbar-end flex items-center gap-2">
                    {/* 主題切換按鈕 */}
                    <button
                        onClick={toggleTheme}
                        aria-label="切換主題"
                        className="btn btn-ghost btn-circle border-2 bg-base-300"
                    >
                        {theme === "dark" ? (
                            <HiMoon className="w-6 h-6" />
                        ) : (
                            <HiSun className="w-6 h-6" />
                        )}
                    </button>
                    {/* 使用者設定: 下拉式選單 */}
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}