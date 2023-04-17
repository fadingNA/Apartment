import Navigation from "../modules/Navigation";
import Footer from "../modules/Footer";


export default function Layout(props) {
    return (
        <>
            <Navigation/>
            {props.children}
            <Footer/>
        </>
    )
}