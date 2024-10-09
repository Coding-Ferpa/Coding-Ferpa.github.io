import Card from '@/app/components/Card';
import data from '../assets/cards.json';

type Talk = {
    id: number;
    title: string;
    speaker: string;
    description: string;
};

export default function Talk() {
    const talk_1 = data.talks.find((talk: Talk) => talk.id === 1);
    const talk_2 = data.talks.find((talk: Talk) => talk.id === 2);
    const talk_3 = data.talks.find((talk: Talk) => talk.id === 3);

    return (
        <section id="talk" className="bg-black">
            <div className="">
                <div className="w-full flex justify-around md:pl-12 mt-8 md:mt-0 order-2 md:order-1">
                    {talk_1 && (
                        <Card 
                            title={talk_1.title}
                            speaker={talk_1.speaker}
                            desc={talk_1.description}
                        />
                    )}
                    {talk_2 && (
                        <Card 
                            title={talk_2.title}
                            speaker={talk_2.speaker}
                            desc={talk_2.description}
                        />
                    )}
                    {talk_3 && (
                        <Card 
                            title={talk_3.title}
                            speaker={talk_3.speaker}
                            desc={talk_3.description}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
