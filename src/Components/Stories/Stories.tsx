import {ChevronBackCircle, ChevronForwardCircle} from 'react-ionicons';
import driven from '../../assets/images/driven.jpg';

export default () => {
    return (
        <div id='stories-section'>
            <input type="radio" id="arrow-left" name="arrow" 
                   value="arrow-left" checked/>
            <label id="first-button" htmlFor="arrow-left">
                <ChevronBackCircle cssClasses="arrow-left desktop1 desktop2"/>
            </label>
            {Array(14).fill(null).map( _ => {
                return(
                    <a href="/" className="stories-card">
                        <div className="stories-img">
                            {<img src={driven} alt="stories de alguém"/>}
                        </div>
                        <div className="stories-name">driven</div>
                    </a>
                );
            })}
            <input type="radio" id="arrow-right" 
                   name="arrow" value="arrow-right"/>
            <label id="second-button" htmlFor="arrow-right">
                <ChevronForwardCircle cssClasses="arrow-right desktop1 desktop2"/>
            </label>
        </div>
    );
}