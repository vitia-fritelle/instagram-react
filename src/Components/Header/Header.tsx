import { 
    LogoInstagram, NavigateOutline, 
    CompassOutline, HeartOutline, 
    PersonOutline  
} from 'react-ionicons';
import logo from '../../assets/images/logo.svg';
export default () => {
    const icones = [
    <CompassOutline cssClasses="icon desktop2 desktop1"/>, 
    <HeartOutline cssClasses="icon desktop2 desktop1"/>, 
    <PersonOutline cssClasses="icon desktop2 desktop1"/>
    ];
    return (
        <header>
            <div className="icons-group">
                <a href="/">
                    <LogoInstagram cssClasses="icon"/>
                </a>
                <div className="divisoria-vertical desktop1 desktop2"></div>
                <img className="desktop1 desktop2" src={logo} alt="instagram"/>
            </div>
            <input type="text" className="desktop1 desktop2" id="search-bar" 
                   name="search-bar" placeholder="Pesquisar"/>
            <img className="mobile" src={logo} alt="instagram"/>
            <div className="icons-group">
                <a href="/">
                    <NavigateOutline cssClasses='icon desktop2 desktop1 mobile'/>
                </a>
                {icones.map(icone => <a href="/">{icone}</a>)}
            </div>
        </header>
    )
};
