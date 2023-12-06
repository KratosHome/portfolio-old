import React, {useState} from 'react';
import "./ShowMoreText.scss";

type ShowMoreTextProps = {
    text: string;
    maxLength: number;
};

const ShowMoreText: React.FC<ShowMoreTextProps> = ({text, maxLength}) => {
    const [isShown, setIsShown] = useState(false);

    const toggleIsShown = () => setIsShown(!isShown);

    if (text.length <= maxLength) {
        return <p>{text}</p>;
    }

    return (
        <div>
            {isShown ? <p>{text}</p> : <p>{`${text.substring(0, maxLength)}...`}</p>}
            <button onClick={toggleIsShown}>
                {isShown ? 'Сховати' : 'Показати більше'}
            </button>
        </div>
    );
};

export default ShowMoreText;
