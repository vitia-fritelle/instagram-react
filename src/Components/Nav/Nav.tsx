import { 
    AddCircleOutline, HeartOutline, Home, PersonOutline, SearchOutline 
} from "react-ionicons";

export default () => {
    const links = [
        <Home cssClasses='icon'/>, <SearchOutline cssClasses='icon'/>, 
        <AddCircleOutline cssClasses='icon'/>, 
        <HeartOutline cssClasses='icon'/>, <PersonOutline cssClasses='icon'/>
    ];
    return (
        <nav className="mobile">
            {links.map(link => <a href="#">{link}</a>)}
        </nav>
    );
}