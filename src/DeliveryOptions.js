
const Options = ({foodOptions}) => {
    return foodOptions.map(Option)
};

const Option = (data) => {
    const {picture, name, type}= data;
        return(
            <div className="option" >
                <div className="photo">
                    <img src={picture} className="pic" />
                </div>
                <div className="info">
                  <p>{name}</p>
                 <p>{type}</p>
                </div>
            </div>
        )
};

export default Options;