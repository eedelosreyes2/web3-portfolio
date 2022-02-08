import { IconContext } from 'react-icons';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
  return (
    <div className="bg-slate-900 flex fixed justify-between px-10 py-5 w-full">
      <div className="font-bold">Elijah Delos Reyes</div>
      <IconContext.Provider value={{ className: 'mt-1 cursor-pointer' }}>
        <AiOutlineMenu />
      </IconContext.Provider>
    </div>
  );
}
