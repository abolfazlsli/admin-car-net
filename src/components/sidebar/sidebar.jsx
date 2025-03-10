import { NavLink } from "react-router";
import Person from "../icons/Person";
import Plus from "../icons/Plus";
const Sidebar = () => {
    return (
        <>
            <div className="bg-white h-screen w-64  shadow-lg p-[10px] flex flex-col items-start justify-start ">
                <div className="w-[100%] h-[100px] flex justify-center items-center bg-white rounded-lg p-[10px]">
                    <h1 className="font-bold text-2xl">
                        Admins
                    </h1>
                </div>
                <div className="w-[100%] h-[100px] flex justify-center items-center bg-slate-200 rounded-lg p-[10px]">
                    <Person className="w-[50px] h-[50px] text-gray-500" />
                    <h1>
                        <NavLink to="/admininfo">
                            Admins Name
                        </NavLink> 
                    </h1>
                </div>
                <NavLink to="/admininfo" className="w-[100%] h-[100px] flex justify-around items-center flex-row rounded-lg p-[10px]">
                <div className="w-[100%] h-[100px] flex justify-around items-center flex-row rounded-lg p-[10px]">
                    <Plus className="w-[50px] h-[50px] text-gray-500" />
                    <h1>
                            افزودن برند
                    </h1>
                </div>
                </NavLink> 
            </div>
        </>
    )
}


export default Sidebar;