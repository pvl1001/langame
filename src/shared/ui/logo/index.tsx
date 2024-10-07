import LogoIcon from './LOGOTYPE.svg?react';


type Props = {
    className: string
}

export function Logo({className}: Props) {
    return (
        <a href={'/'} className={className}><LogoIcon/></a>
    );
}
