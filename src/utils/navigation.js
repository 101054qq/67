export const NAV_ITEMS = [
    {path: "/", label: "首頁", icon: "🏠"},
    {path: "/menu", label: "產品資訊", icon: "🍔"},
    {path: "/about", label: "關於我們", icon: "ℹ️"},
    {path: "/contact", label: "聯絡我們", icon: "📞"},
];

export const isPathActive = (currentPath, targetPath) => {
    if(currentPath === "/" &&  targetPath === "/") return true;
    return targetPath !== "/" && currentPath.startsWith(targetPath);
};