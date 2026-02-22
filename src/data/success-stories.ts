import cooperBefore from "@/assets/gallery/453093010_18029334317328544_2543061547466271262_n.jpg";
import cooperAfter from "@/assets/gallery/466606901_18041440310328544_6803851458638829359_n.jpg";
import buddyBefore from "@/assets/gallery/461591034_18036286454328544_5752929401641984058_n.jpg";
import buddyAfter from "@/assets/gallery/469086641_18043544267328544_4612978398465243986_n.jpg";
import gusBefore from "@/assets/gallery/481115360_1054068836761804_9115231559785316674_n.jpg";
import gusAfter from "@/assets/gallery/453194141_18029272010328544_1753225638918832024_n.jpg";

export interface SuccessStory {
    id: string;
    name: string;
    species: string;
    beforeImage: string;
    afterImage: string;
    story: string;
    adopterName: string;
    date: string;
}

export const successStories: SuccessStory[] = [
    {
        id: "1",
        name: "Cooper",
        species: "Dog",
        beforeImage: cooperBefore,
        afterImage: cooperAfter,
        story: "Cooper came to us with a severe underbite and a lot of anxiety. Today, he's the king of the couch and his unique smile brings joy to everyone he meets.",
        adopterName: "The Thompson Family",
        date: "March 2024",
    },
    {
        id: "2",
        name: "Buddy",
        species: "Dog",
        beforeImage: buddyBefore,
        afterImage: buddyAfter,
        story: "Buddy was found wandering alone. After some time in our 'NAWTy Chair' learning his manners, he found his forever home where he spends his days napping on sun-drenched rugs.",
        adopterName: "James Wilson",
        date: "February 2024",
    },
    {
        id: "3",
        name: "Gus",
        species: "Dog",
        beforeImage: gusBefore,
        afterImage: gusAfter,
        story: "Gus needed specialized surgery for his knee. Thanks to our donors, he got the care he needed and is now back to his favorite activity: chasing tennis balls in the park.",
        adopterName: "Sarah Chen",
        date: "January 2024",
    }
];
