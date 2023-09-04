import React, { useEffect, useState, useRef } from 'react'


export const Sidebar = (props) => {
    // console.log(props.sideBarOpen)
    // const [open, setOpen] = useState(props.sideBarOpen);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                props.handleClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Remover el event listener cuando el componente se desmonta
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
    ];
    return (
        <div className='fixed z-10'>
            <div
                className={` ${props.sideBarOpen ? "w-72" : "w-[0px] "
                    } bg-primary h-screen p-1  pt-8 relative duration-300`}
                ref={containerRef}
            >

                <div className="flex gap-x-4 items-center">
                    <img
                        src="./src/assets/logo.png"
                        className={`cursor-pointer duration-500 ${props.sideBarOpen && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!props.sideBarOpen && "scale-0"
                            }`}
                    >
                        Designer
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            <img src={`./src/assets/${Menu.src}.png`} />
                            <span className={`${!props.sideBarOpen && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
