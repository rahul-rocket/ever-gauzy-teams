import { useTheme } from "next-themes";

function ToggleThemeContainer() {
  const { setTheme } = useTheme();

  return (
    <div className="toggleThemeContainer">
      <button className="border-none" onClick={() => setTheme("light")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          className="bg-[#1b005d] dark:bg-transparent rounded-2xl"
          id="sun-svg"
        >
          <g
            id="sun"
            transform="translate(0)"
            style={{
              fill: "#fff",
            }}
          >
            <g transform="translate(4.662 4.616)">
              <path
                d="M.708,0A.708.708,0,0,0,0,.708V2.721a.708.708,0,1,0,1.416,0V.708A.708.708,0,0,0,.708,0Z"
                transform="translate(9.665 17.319)"
              />
              <path
                d="M.708,3.429a.708.708,0,0,0,.708-.708V.708A.708.708,0,0,0,0,.708V2.721A.708.708,0,0,0,.708,3.429Z"
                transform="translate(9.665 0)"
              />
              <path
                d="M1.632.207.208,1.63a.708.708,0,0,0,1,1L2.633,1.209a.708.708,0,0,0-1-1Z"
                transform="translate(2.831 15.078)"
              />
              <path
                d="M.708,2.839a.706.706,0,0,0,.5-.207L2.632,1.209a.708.708,0,1,0-1-1L.207,1.631a.708.708,0,0,0,.5,1.209Z"
                transform="translate(15.077 2.831)"
              />
              <path
                d="M3.429.708A.708.708,0,0,0,2.721,0H.708a.708.708,0,0,0,0,1.416H2.721A.708.708,0,0,0,3.429.708Z"
                transform="translate(0 9.666)"
              />
              <path
                d="M2.722,0H.708a.708.708,0,0,0,0,1.416H2.722A.708.708,0,1,0,2.722,0Z"
                transform="translate(17.319 9.666)"
              />
              <path
                d="M1.631,2.632a.708.708,0,1,0,1-1L1.209.207a.708.708,0,0,0-1,1Z"
                transform="translate(2.832 2.831)"
              />
              <path
                d="M1.209.207a.708.708,0,0,0-1,1L1.63,2.632a.708.708,0,1,0,1-1Z"
                transform="translate(15.078 15.078)"
              />
              <path
                d="M0,5.511a5.511,5.511,0,1,1,5.511,5.511A5.517,5.517,0,0,1,0,5.511Z"
                transform="translate(4.863 4.863)"
              />
            </g>
          </g>
        </svg>
      </button>
      <button className="border-none" onClick={() => setTheme("dark")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          className="dark:bg-[#6a7c90] bg-transparent rounded-2xl"
        >
          <g id="moon" transform="translate(7.576 7.576)">
            <path
              d="M13.642,8.666a1.1,1.1,0,0,0-1-.442,6.077,6.077,0,0,1-.788.031A5.836,5.836,0,0,1,6.117,2.546,5.759,5.759,0,0,1,6.235,1.29,1.069,1.069,0,0,0,5.88.263,1.1,1.1,0,0,0,4.8.061,7.1,7.1,0,0,0,0,6.844a6.994,6.994,0,0,0,2.143,4.944A7.223,7.223,0,0,0,7.19,13.846h.019a7.265,7.265,0,0,0,3.914-1.136,7.142,7.142,0,0,0,2.62-2.959A1.068,1.068,0,0,0,13.642,8.666Zm-6.434,3.89H7.193A5.878,5.878,0,0,1,1.311,6.828,5.8,5.8,0,0,1,4.883,1.415,7,7,0,0,0,6.895,7.437,7.225,7.225,0,0,0,11.82,9.543c.188,0,.377,0,.565-.007A5.938,5.938,0,0,1,7.208,12.556Z"
              transform="translate(0 0)"
            />
          </g>
        </svg>
      </button>
    </div>
    // <div>
    //   <div className="flex flex-row items-start bg-light--theme-dark dark:bg-[#1D222A] py-1 px-2 rounded-[60px] gap-[10px] w-fit">
    //     <button className="flex flex-row justify-center items-center p-2 w-8 h-8 rounded-[60px] ml-[-2px] bg-white shadow-md dark:bg-transparent dark:shadow-none" onClick={() => setTheme("light")}>
    //       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M9 14.25C11.8995 14.25 14.25 11.8995 14.25 9C14.25 6.10051 11.8995 3.75 9 3.75C6.10051 3.75 3.75 6.10051 3.75 9C3.75 11.8995 6.10051 14.25 9 14.25Z" className="fill-primary dark:fill-primary-light"></path>
    //         <path d="M9 17.22C8.5875 17.22 8.25 16.9125 8.25 16.5V16.44C8.25 16.0275 8.5875 15.69 9 15.69C9.4125 15.69 9.75 16.0275 9.75 16.44C9.75 16.8525 9.4125 17.22 9 17.22ZM14.355 15.105C14.16 15.105 13.9725 15.03 13.8225 14.8875L13.725 14.79C13.4325 14.4975 13.4325 14.025 13.725 13.7325C14.0175 13.44 14.49 13.44 14.7825 13.7325L14.88 13.83C15.1725 14.1225 15.1725 14.595 14.88 14.8875C14.7375 15.03 14.55 15.105 14.355 15.105ZM3.645 15.105C3.45 15.105 3.2625 15.03 3.1125 14.8875C2.82 14.595 2.82 14.1225 3.1125 13.83L3.21 13.7325C3.5025 13.44 3.975 13.44 4.2675 13.7325C4.56 14.025 4.56 14.4975 4.2675 14.79L4.17 14.8875C4.0275 15.03 3.8325 15.105 3.645 15.105ZM16.5 9.75H16.44C16.0275 9.75 15.69 9.4125 15.69 9C15.69 8.5875 16.0275 8.25 16.44 8.25C16.8525 8.25 17.22 8.5875 17.22 9C17.22 9.4125 16.9125 9.75 16.5 9.75ZM1.56 9.75H1.5C1.0875 9.75 0.75 9.4125 0.75 9C0.75 8.5875 1.0875 8.25 1.5 8.25C1.9125 8.25 2.28 8.5875 2.28 9C2.28 9.4125 1.9725 9.75 1.56 9.75ZM14.2575 4.4925C14.0625 4.4925 13.875 4.4175 13.725 4.275C13.4325 3.9825 13.4325 3.51 13.725 3.2175L13.8225 3.12C14.115 2.8275 14.5875 2.8275 14.88 3.12C15.1725 3.4125 15.1725 3.885 14.88 4.1775L14.7825 4.275C14.64 4.4175 14.4525 4.4925 14.2575 4.4925ZM3.7425 4.4925C3.5475 4.4925 3.36 4.4175 3.21 4.275L3.1125 4.17C2.82 3.8775 2.82 3.405 3.1125 3.1125C3.405 2.82 3.8775 2.82 4.17 3.1125L4.2675 3.21C4.56 3.5025 4.56 3.975 4.2675 4.2675C4.125 4.4175 3.93 4.4925 3.7425 4.4925ZM9 2.28C8.5875 2.28 8.25 1.9725 8.25 1.56V1.5C8.25 1.0875 8.5875 0.75 9 0.75C9.4125 0.75 9.75 1.0875 9.75 1.5C9.75 1.9125 9.4125 2.28 9 2.28Z" className="fill-primary dark:fill-primary-light"></path>
    //       </svg>
    //     </button>
    //     <button className="flex flex-row justify-center items-center p-2 w-8 h-8 rounded-[60px] mr-[-2px] dark:bg-[#3B4454]" onClick={() => setTheme("dark")}>
    //       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#7E7991]">
    //         <path d="M1.52232 9.31521C1.79232 13.1777 5.06982 16.3202 8.99232 16.4927C11.7598 16.6127 14.2348 15.3227 15.7198 13.2902C16.3348 12.4577 16.0048 11.9027 14.9773 12.0902C14.4748 12.1802 13.9573 12.2177 13.4173 12.1952C9.74982 12.0452 6.74982 8.97772 6.73482 5.35522C6.72732 4.38022 6.92982 3.45772 7.29732 2.61772C7.70232 1.68771 7.21482 1.24522 6.27732 1.64272C3.30732 2.89522 1.27482 5.88771 1.52232 9.31521Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //       </svg>
    //     </button>
    //   </div>
    // </div>
  );
}

export default ToggleThemeContainer;
