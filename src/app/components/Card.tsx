import React from 'react';

interface TalkCardProps {
    title: string;
    speaker: string;
    desc: string;
}

const Card: React.FC<TalkCardProps> = ({title, speaker, desc}) => {
    return (
        <div className="w-1/4 h-[calc(100%)] bg-white">
            <div className="card-title">
                <h1 className="text-2xl"> {title} </h1>
            </div>
            <div className="card-content">
                <p><strong>Palestrante:</strong> {speaker}</p>
                <hr></hr>
                <p> {desc}</p>
            </div>
        </div>

    );
}

export default Card;
