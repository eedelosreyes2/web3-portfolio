import { IconContext } from 'react-icons';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
  return (
    <div className="flex justify-between py-5">
      <div>Elijah Delos Reyes</div>
      <IconContext.Provider value={{ className: 'mt-1 cursor-pointer' }}>
        <AiOutlineMenu />
      </IconContext.Provider>
    </div>
  );
}
