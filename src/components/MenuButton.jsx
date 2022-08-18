import menu from "../img/icon-hamburger.svg"

const MenuButton = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>
                <img src={menu} alt="" />
            </button>
        </>
    )
}

export default MenuButton