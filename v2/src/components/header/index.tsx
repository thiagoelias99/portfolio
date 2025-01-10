import menuIcon from "../../assets/icons/menu.svg"

export default function Header() {
  return (
    <header className="bg-popover w-screen h-16 flex items-center justify-between px-4">
      <h1 className="uppercase font-bold">Thiago Elias</h1>
      <button
        onClick={() => console.log("abrir menu")}
        className="w-6 h-6">
        <img src={menuIcon} alt="abrir menu" />
      </button>
    </header>
  )
}
