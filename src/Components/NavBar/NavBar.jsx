import "./NavBar.scss";

export default function NavBar() {

    const close = document.getElementsByClassName("close");


  return (
    <>
      <nav className="nav">
        <h2>My NAME</h2>
        <div class="close">
          <div></div>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
