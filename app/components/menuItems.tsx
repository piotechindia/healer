import React from "react";

const Items = ['Home', 'About'];

export default function MenuItems() {
    const listItems = Items.map(item =>{
        let hreflink = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
        return(
            <li key={item}>
                <a href={hreflink}>{item}</a>
            </li>
        );
    });
    return <ul className="mainMenu">
        {listItems}
        <li><a className='btn' href='/contact'>Contact Us</a></li>
    </ul>
}