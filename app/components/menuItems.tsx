import React from "react";

const Items = ['Overview', 'Workout','Diet-Plan','Recipes','Goals','Progress','Contact','Help','My-Profile','LogOut'];

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