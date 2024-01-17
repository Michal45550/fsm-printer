import './SubHeader.css';

const SubHeader = (props) => {

    return (
        <div className={`header ${props.topLine && "topLine"} ${props.bottomLine && "bottomLine"}`}>
            <h4>{props.title}</h4>
            {props.children}
        </div>
    );
};

export default SubHeader;
