import Cn from '../utils/Cn'
import logo from '../assets/common/Logo.svg'
import logoText from '../assets/common/LogoText.svg'
import arrow from '../assets/common/Arrow.svg'
import user from '../assets/common/User.svg'
import search from '../assets/common/Search.svg'

function Header() {
  return (
    <>
      <header className="mt-7 ml-[17px] mr-[19px]">
        <div className=" flex justify-between">
          <div className="flex flex-row gap-[10px] items-center">
            <img src={logo} alt="logoIcon" className="w-9 h-9" />
            <img src={logoText} alt="logoText" className="w-[37.33px] h-7" />
          </div>
          <div className="flex flex-row gap-[14.5px] items-center">
            <div className="flex gap-2 items-center">
              <div className="font-SB00 text-[16px]">광진구 능동로 209</div>
              <img src={arrow} alt="Arrow" className="w-4 h-[6px]" />
            </div>

            <img src={user} alt="userIcon" className="w-[19px] h-[19px]" />
          </div>
        </div>
        {window.location.pathname === '/home' ? (
          <div className="relative mt-[5.99px] w-full">
            <input
              id="searchStore"
              type="text"
              placeholder="가맹점 이름을 검색해보세요"
              className={Cn(
                'py-[13px] pl-[13px] pr-[27px] w-full font-R00',
                'border border-200 rounded-lg placeholder:text-200 placeholder:text-sm'
              )}
            />
            <img
              src={search}
              alt="searchIcon"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 pl-[311px]"
            />
          </div>
        ) : (
          ''
        )}
      </header>
    </>
  )
}

export default Header
