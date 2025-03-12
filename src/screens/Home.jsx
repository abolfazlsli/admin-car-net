import React from "react"
import { NavLink } from "react-router";
const Home = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-right m-[20px]">
                دسترسی سریع
            </h1>
            <div className="flex flex-wrap justify-start items-start overflow-y-scroll h-[500px]">
                <NavLink to="/addbrands">
                    <div className="w-[500px] h-[300px] bg-green-300 rounded-lg p-[10px] flex justify-center items-center m-[30px]">
                        <h1>
                                افزودن برند  
                        </h1>
                    </div>
                </NavLink>
                <NavLink to="/addbrands">
                    <div className="w-[500px] h-[300px] bg-red-300 rounded-lg p-[10px] flex justify-center items-center m-[30px]">
                        <h1>
                                ماشین های ثبت شده
                        </h1>
                    </div>
                </NavLink>
                <NavLink to="/addbrands">
                    <div className="w-[500px] h-[300px] bg-orange-300 rounded-lg p-[10px] flex justify-center items-center m-[30px]">
                        <h1>
                                حساب های کاربری
                        </h1>
                    </div>
                </NavLink>
                <NavLink to="/addbrands">
                    <div className="w-[500px] h-[300px] bg-blue-300 rounded-lg p-[10px] flex justify-center items-center m-[30px]">
                        <h1>
                                نمایشگاه های ثبت شده 
                        </h1>
                    </div>
                </NavLink>

            </div>
        </div>
    )
}

export default Home;