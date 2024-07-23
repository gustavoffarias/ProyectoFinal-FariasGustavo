import { Link } from "react-router-dom"

function Footer() {
    
    return (
        <footer>
        <div id="footer-container">
            <a className="socialbutton sb-in" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=guul-dev" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
                LinkedIn</a>
            <a className="socialbutton sb-fb" href="https://www.facebook.com/GUULdevelopment/" target="_blank">
                <i className="fa-brands fa-facebook"></i>
                Facebook</a>
            <a className="socialbutton sb-ig" href="https://www.instagram.com/guul.dev?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blank">
                <i className="fa-brands fa-instagram"></i>
                Instagram</a>    
        </div>
    </footer>
    )
}

export default Footer