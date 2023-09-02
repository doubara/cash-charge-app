import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import ClearIcon from '@mui/icons-material/Clear';

const Header = (props)=>{

    return (
        <div className={`${props.className} px-8 pt-4 flex justify-between`}>
            <div>
                <p className='text-2xl'>Good morning, John!</p>
                <p>10:00 - 30 July 2023</p>
            </div>
            <form>
                <div className="relative">
                    <input className="pl-4 py-2 rounded-md bg-black" type="text" placeholder="search" />
                    <button className="absolute -right-2 top-0 bottom-1">
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
                
            </form>
            <div>
                    <button>
                        <NotificationsNoneIcon></NotificationsNoneIcon>
                    </button>
                    <button>
                        <SettingsIcon></SettingsIcon>
                    </button>
                    <button>
                        <ClearIcon></ClearIcon>
                    </button>
                </div>
        </div>
    )
};

export default Header;