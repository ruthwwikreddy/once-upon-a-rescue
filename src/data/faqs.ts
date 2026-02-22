export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: "Adoption" | "Donation" | "Volunteering" | "General";
}

export const faqs: FAQ[] = [
    {
        id: "1",
        category: "Adoption",
        question: "How do I start the adoption process?",
        answer: "You can start by browsing our 'Adopt' page. Once you find a pet you're interested in, fill out the adoption application form on their profile page. Our team will then reach out for a home visit and interview."
    },
    {
        id: "2",
        category: "Adoption",
        question: "What are the requirements for adoption?",
        answer: "We require adopters to be at least 18 years old, have a stable living environment, and be committed to the long-term care of the animal. A home check is mandatory for all adoptions."
    },
    {
        id: "3",
        category: "Donation",
        question: "Where does my donation go?",
        answer: "100% of public donations go directly to animal care, including medical treatments, high-quality food, shelter maintenance, and rescue operations. Administrative costs are covered by separate grants."
    },
    {
        id: "4",
        category: "Volunteering",
        question: "Can I volunteer on weekends?",
        answer: "Yes! We have many volunteer opportunities during weekends, especially for our adoption events and shelter cleaning sessions."
    },
    {
        id: "5",
        category: "General",
        question: "Do you have a physical shelter I can visit?",
        answer: "Yes, our main rescue center is located in Watford. However, for the safety and stress-levels of our animals, visits are by appointment only."
    }
];
