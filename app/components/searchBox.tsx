import style from '../styles/header.module.css'

export default function SearchBox() {
    return (
        <input type="text" 
        className={style.searchBox} placeholder='Search...' />
    )
}