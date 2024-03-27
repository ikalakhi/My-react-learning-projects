export default function TabButton({children}) {
    function handelClick() {
        console.log("clicked!");
    }
    return (
        <li>
            <button onClick={handelClick}>{children}</button>
        </li>
    );
}