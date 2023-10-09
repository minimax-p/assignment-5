import moonFestivalImage from '../src/images/moon-festival.webp';
import { Description } from './Description'
import { Logo } from './Logo'
export function App() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-white">
        <>
            <img id="moonFest" src={moonFestivalImage} className='w-72' />
            <h1 className="text-amber-600 pt-2 ">Hello World Again!</h1>
            <Description />
            <Logo />
        </>
        </div>
    );
}