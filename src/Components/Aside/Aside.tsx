import Suggestion from "./Suggestion/Suggestion";
import natalia from '../../assets/images/natalia.jpg';
import bonfim from '../../assets/images/bonfim.jpg';
import ludmila from '../../assets/images/ludmila.jpg';
import anitta from '../../assets/images/anitta.jpg';

interface User {
    user: string,
    src: string,
    instagram: string
}

export default ({user, src, instagram}: User) => {
    const suggestions = [
        {src: natalia, title: 'natalia_personal'},
        {src: bonfim, title: 'investimentosBonfim'},
        {src: ludmila, title: 'cozinhadalud'},
        {src: anitta, title: 'coisasdaanitta'}
    ];
    const links = [
        'Sobre','Ajuda','Imprensa','API','Carreiras','Privacidade',
        'Termos','Localizações','Contas mais relevantes','Hashtags','Idioma'
    ];
    return(
        <aside className="desktop2">
            <div className="sidebar-descricao">
                <img src={src} alt="logo de alguém"/>
                <div className= "descricao-descricao">
                    <h4>{instagram}</h4>
                    {user}
                </div>
            </div>
            <div className="sidebar-summary">
                <div>Sugestões para você</div>
                <a href="#">Ver tudo</a>
            </div>
            {suggestions.map(sugg => <Suggestion src={sugg.src} title={sugg.title}/>)}
            <div className="sidebar-terms">
                {links.map(link => <a href="#">{link}</a>)}
            </div>
            <div className="sidebar-copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </aside>


    );
}