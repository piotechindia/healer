import style from '../styles/sidebar.module.css'
import NavBar from './navBar'

export default function Sidebar(){
    return (
        <aside className={style.sidebar}>
            <NavBar/>
        </aside>
    )
}