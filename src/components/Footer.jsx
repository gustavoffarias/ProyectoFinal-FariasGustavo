import { Link } from "react-router-dom"

function Footer() {
    
    return (
        <footer>
        <div id="footer-container">
            <a className="socialbutton sb-in" href="https://www.linkedin.com/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
                LinkedIn</a>
            <a className="socialbutton sb-fb" href="https://www.facebook.com/" target="_blank">
                <i className="fa-brands fa-facebook"></i>
                Facebook</a>
            <a className="socialbutton sb-ig" href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
                Instagram</a>    
        </div>
    </footer>
    )
}

export default Footer