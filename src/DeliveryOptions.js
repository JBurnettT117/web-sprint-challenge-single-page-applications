
const Options = ({foodOptions}) => {
    console.log("PING");
    return foodOptions.map(Option)
};

const Option = (data) => {
    const {picture, name, type}= data;
    console.log("PONG");
    return(
        <div className="option" >
            <div className="photo">
                <img src={picture}/>
            </div>
            <div className="info">
                <p>{name}</p>
                <p>{type}</p>
            </div>
        </div>
    )
};

export default Options;