import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='bg-blue-500 text-white p-5'>
            <div className='logo'>
                <Link className='mb-5' href={'/'}>My Blog</Link>
            </div>
            <div>
                <ul className='flex justify-center items-center gap-8'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/about'}>About</Link></li>
                    <li><Link href={'/about/team'}>Team</Link></li>
                    <li><Link href={'/code/repos'}>Code</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;