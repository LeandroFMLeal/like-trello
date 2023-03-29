import { BsClipboardDataFill, BsFillEyeFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

export const Card = () => {
  return (
    <li className="text-sm mb-2 grid h-36 grid-cols-3 rounded-md bg-blue-50 p-1 shadow-md">
      <div className="h-16 pl-1 text-tiny">
        <div className="mb-1 flex h-5 w-24 flex-nowrap items-center rounded-lg bg-black-400 px-1 ">
          <span className="mr-1 h-2 w-2 rounded-full bg-black-800" />
          <div className="text-xs flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-blue-100">
            Company
          </div>
        </div>
        <div className="mb-1 flex h-5 w-24 flex-nowrap items-center rounded-lg bg-black-400 px-1 ">
          <span className="mr-1 h-2 w-2 rounded-full bg-black-800" />
          <div className="text-xs flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-blue-100">
            Leandro Ferreira Mendes Leal
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-1 text-xsm">
        <div className="flex h-5 w-8 items-center justify-evenly rounded-md bg-black-400 text-blue-zodiac-100">
          <BsFillEyeFill />
          <span>2</span>
        </div>
        <div className="flex h-5 w-8 items-center justify-evenly rounded-md bg-black-400 text-blue-zodiac-100">
          <BsClipboardDataFill />
          <span>2</span>
        </div>
      </div>
      <div className="flex justify-end pr-1 text-end text-xsm">
        R$ 10.000,00 <br />~ R$ 20.500,00
      </div>
      <div className="h-16"></div>
      <div className="flex h-16 flex-col items-center justify-between">
        <div>#23010504</div>
        <div className="flex h-5 w-16 flex-nowrap items-center justify-center rounded-lg bg-black-400 px-1 text-blue-100 ">
          <BiTimeFive />
          <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-tiny ">
            13 dias
          </span>
        </div>
      </div>
      <div className="h-16">
        <div className="mask mask-hexagon	h-8 w-8 bg-blue-500">Aqui dentro</div>
      </div>
    </li>
  );
};
