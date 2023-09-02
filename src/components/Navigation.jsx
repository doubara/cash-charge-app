// import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import { NavLink } from 'react-router-dom';
import saitama from '../assets/saitama.png';

const Navigation = (props) =>{

    return (
        <nav className={`${props.className} relative`}>
            <div className='pl-12 py-8 text-2xl '>
                <img src="" alt="" />
                <p> Cashchange</p>
            </div>
            <p className='pl-12'>
                <span>1780 530.78</span>
                <span className='pl-2'>USD</span>
            </p>
            <ul className='pl-20 py-12'>
                <li className=''>
                    <NavLink to='/overview'>
                        <span>Overview</span>
                    </NavLink>
                </li>
                <li className='py-3'>
                    <NavLink to='/overview'>
                        <span>Wallet</span>
                    </NavLink>
                </li>
                <li className='py-3'>
                    <NavLink to='/overview'>
                        <span>Buy & Swap</span>
                    </NavLink>
                </li>
                <li className='py-3'>
                    <NavLink to='/overview'>
                        <span>History</span>
                    </NavLink>
                </li>
                <li className='py-3'>
                    <NavLink to='/overview'>
                        <span>Staking</span>
                    </NavLink>
                </li>
            </ul>
            <div className='absolute left-2 bottom-4'>
                <div className=''>
                    <div className='w-8 h-8 border-2 rounded-xl overflow-hidden inline--block'>
                        <img className='object-contain' src={saitama} alt="" />
                </div>
                <div className='inline-block border-2'>
                    <p className='text-xl'>John Doe</p>
                    <p className='text-xs'>johndoe@gmail.components</p>
                </div>
                    
                </div>
            </div>
        </nav>
    )
};

export default Navigation;