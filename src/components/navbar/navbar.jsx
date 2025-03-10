import Person from "../icons/Person";
const Navbar = () => {
    return (
        <>
        <div className="w-[100%] h-[80px] p-[15px] flex justify-between items-center shadow-md rounded-lg">
            <div className="cursor-pointer">
                <h1>CarNet</h1>
            </div>
            <div>
                <Person className="w-[50px] h-[50px] text-gray-500" />
            </div>
            
        </div>
        </>
    )
}

export default Navbar;
