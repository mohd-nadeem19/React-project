
import { FaBeer, FaSearch } from 'react-icons/fa';



function Navbar() {
    return (
        <div className="flex space-x-12 relative  left-[12px] min-h-[40px] ">
            <img src="https://s3-alpha-sig.figma.com/img/b9d3/0911/923d23ccee9da5bc510b8d159f185505?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ppguyV6rOh8Dkfz6FVPw7SC2bc6D715ZNA2Woq2FFRoysrrNldUU0dRCVDGIXGCLwqke3105GbUE6NL-MrTfNIEMc3c2gJhhPa9f2-Tj~mXl5oDYmgojQ6WhVXUj3xwnBDEZWTjsFm-sSYp3Sh7cCJvPpPyNRAerQ513gm4-H4P-GVw1WbBvfMIz-KW9mnwKFOvNlrtERmOJ-7f4181hX-4BWZ8SgrnHOL2H4ilNlW3yI233mwniV7~ICStzEGELaqCzL3uWrmo3E5zHU5Fl~U60JcdcT44rDUvpu1IvojkDnnHFGqydPfT3frB8M-TL4fuIflaegVrnJh7fAeqzCQ__" alt="" className=' w-[150px] h-[30px]' />
            <div>
                <ul className='relative flex items-cente  left-[100px] top- space-x-6 w-[445px] h-[34px]'>
                    <li className='text-[20px] font-Taviraj leading-[34px] text-[#333333]
'>Watches</li>
                    <li className='text-[20px] font-Taviraj leading-[34px] text-[#333333]
'>Eyewear</li>
                    <li className='text-[20px] font-Taviraj leading-[34px] text-[#333333]
'>accessories</li>
                    <li className='text-[20px] font-Taviraj leading-[34px] text-[#333333]
'>News</li>
                </ul>

            </div>
            <FaSearch className="relative top-2 left-16 w-[25px] h-[25px]" />
            <div className='flex'>
                <svg className='relative top-2 left-24' width="19" height="25" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0936 5.42956C15.6949 8.04536 14.4098 10.7298 11.9952 11.9018C15.6302 13.0124 18.1149 16.365 18.12 20.1659V21.6059C18.12 21.871 17.9051 22.0859 17.64 22.0859C17.3749 22.0859 17.16 21.871 17.16 21.6059V20.1659C17.16 15.9243 13.7215 12.4859 9.47997 12.4859C5.23842 12.4859 1.79997 15.9243 1.79997 20.1659V21.6059C1.79997 21.871 1.58506 22.0859 1.31997 22.0859C1.05487 22.0859 0.839966 21.871 0.839966 21.6059V20.1659C0.845037 16.365 3.32977 13.0124 6.96477 11.9018C4.55016 10.7298 3.26507 8.04536 3.86637 5.42956C4.46766 2.81376 6.79595 0.959961 9.47997 0.959961C12.164 0.959961 14.4923 2.81376 15.0936 5.42956ZM9.47997 1.92586C6.829 1.92586 4.67997 4.07489 4.67997 6.72586C4.68293 9.37559 6.83023 11.5229 9.47997 11.5259C12.1309 11.5259 14.28 9.37682 14.28 6.72586C14.28 4.07489 12.1309 1.92586 9.47997 1.92586Z" fill="black" />
                </svg> <span className='relative left-28 top-[3px] font-
Taviraj text-[18px] leading-[30.71px] text-[#333333] 
'>Log In</span>

            </div>
            <div className='relative left-40'>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://  www.w3.org/2000/svg">
                    <circle cx="23" cy="23" r="23" fill="#F1DDC9" />
                </svg>
                <svg className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2908 3.84C19.8033 3.83988 20.2256 4.24237 20.25 4.7543L21.1187 22.9943C21.1312 23.2566 21.0357 23.5125 20.8545 23.7025C20.6733 23.8925 20.4222 24 20.1596 24H4.79962C4.53714 23.9999 4.28615 23.8923 4.10505 23.7023C3.92396 23.5123 3.82856 23.2565 3.84106 22.9943L4.70966 4.7543C4.73406 4.24241 5.15623 3.83993 5.6687 3.84H8.68627C8.68627 1.71923 10.4055 0 12.5263 0C14.647 0 16.3663 1.71923 16.3663 3.84H19.2908ZM15.4063 3.84C15.4045 2.25017 14.1161 0.961799 12.5263 0.96C10.9364 0.961799 9.64807 2.25017 9.64627 3.84H15.4063ZM5.66871 4.8H8.68628V8.16C8.68628 8.4251 8.90118 8.64 9.16628 8.64C9.43138 8.64 9.64628 8.4251 9.64628 8.16V4.8H15.4063V8.16C15.4063 8.4251 15.6212 8.64 15.8863 8.64C16.1514 8.64 16.3663 8.4251 16.3663 8.16V4.8H19.2798L19.9742 19.2H4.98298L5.66871 4.8ZM4.9368 20.16L4.79962 23.04H20.1596L20.0205 20.16H4.9368Z" fill="#333333" />
                    </svg>

            </div>

        </div>
    );
};
export default Navbar;