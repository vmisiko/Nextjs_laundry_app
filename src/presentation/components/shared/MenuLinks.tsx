
import Link from 'next/link';
import Icon from '@mdi/react';
import { useRouter } from 'next/router';


type Item = {
    pathname: string,
    icon: string,
};

const MenuLink = ({ item }: { item: Item}) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const isCurrentRoute = () => {
    return currentRoute === item?.pathname;
  }
  return (
    <div className={`rounded flex justify-center ${isCurrentRoute() && 'bg-primaryBg py-3'} `}>
        <Link
        href={{
            pathname: item?.pathname,
        }}
        className={`nav
            ${isCurrentRoute() && 'nav-active'} px-2`}
        >
            <button className={`rounded-lg ${ currentRoute && 'bg-primary'} px-0`}>
                <Icon
                className=''
                size={2}
                path={item.icon}
                color={currentRoute ? 'white' : '#EA7C69'}
                ></Icon> 
            </button>
        </Link>
    </div>
  );
};

export default MenuLink;
