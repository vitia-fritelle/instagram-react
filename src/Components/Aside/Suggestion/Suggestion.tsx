interface Suggestion {
    src: string,
    title: string
}

export default ({src, title}: Suggestion) => {
    return (
        <div className="sidebar-suggestions">
            <div className="sidebar-descricao">
                <img src={src} alt="logo de alguém"/>
                <div className= "descricao-descricao">
                    <h4>{title}</h4>
                    Segue você
                </div>
            </div>
            <a href="#">Seguir</a>
        </div>
    );
}