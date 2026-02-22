import blog1 from "@/assets/gallery/453194141_18029272010328544_1753225638918832024_n.jpg";
import blog2 from "@/assets/gallery/461591034_18036286454328544_5752929401641984058_n.jpg";
import blog3 from "@/assets/gallery/465805241_18041321744328544_2175482194352825108_n.jpg";
import blog4 from "@/assets/gallery/465884915_18041321648328544_4702496810259354768_n.jpg";

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "10 Tips for First-Time Dog Owners",
        excerpt: "Bringing a new furry friend home is exciting! Here are the top things you need to know to ensure a smooth transition.",
        content: `
            <p>Bringing a new dog into your home is one of the most rewarding experiences you can have, but it also comes with a lot of responsibility. Whether you're adopting a puppy or an adult dog, the first few weeks are crucial for building a bond and setting expectations.</p>
            
            <h3>1. Prepare Your Home</h3>
            <p>Before your new friend arrives, make sure your home is "dog-proofed." This means keeping dangerous chemicals, small objects, and expensive items out of reach. Create a dedicated space for your dog with a comfortable bed, water bowl, and a few toys.</p>
            
            <h3>2. Establish a Routine</h3>
            <p>Dogs thrive on routine. Try to feed, walk, and play with your dog at the same times every day. This helps them feel secure and makes house-training much easier.</p>
            
            <h3>3. Be Patient with Training</h3>
            <p>Positive reinforcement is the best way to train your dog. Reward good behavior with treats, praise, or play. Remember that learning takes time, and consistency is key.</p>
            
            <h3>4. Socialize Early</h3>
            <p>Once your dog is fully vaccinated, introduce them to different people, environments, and other animals. This helps prevent fear-based behaviors and ensures they grow up to be well-adjusted adults.</p>
            
            <h3>5. Regular Exercise</h3>
            <p>A tired dog is a happy dog! Make sure your dog gets enough physical and mental stimulation every day through walks, fetching, or puzzle toys.</p>
        `,
        author: "Megan Sciorio",
        date: "February 5, 2024",
        category: "Pet Care",
        image: blog1,
    },
    {
        id: "2",
        title: "The Importance of Regular Vet Checkups",
        excerpt: "Prevention is better than cure. Learn why annual health screenings are crucial for your pet's longevity.",
        content: `
            <p>We all want our pets to live long, healthy lives. While we do our best at home, professional veterinary care is an essential part of the equation. Annual wellness exams are about more than just vaccinations; they are a comprehensive check of your pet's overall health.</p>
            
            <h3>Early Detection of Disease</h3>
            <p>Animals are masters at hiding pain and illness. Often, by the time symptoms are obvious to owners, a disease has already progressed. Regular blood work and physical exams can catch issues like kidney disease, diabetes, or heart problems in their early stages.</p>
            
            <h3>Preventative Care</h3>
            <p>Prevention is always cheaper and less stressful than treatment. Your vet will ensure your pet is protected against parasites like heartworms, fleas, and ticks, and that their vaccinations are up to date.</p>
            
            <h3>Dental Health</h3>
            <p>Dental disease is one of the most common issues in pets and can lead to serious systemic infections. Professional cleanings and regular checks can prevent tooth loss and pain.</p>
            
            <h3>Nutrition and Weight Management</h3>
            <p>Obesity is a major health crisis for pets. Your veterinarian can help you determine the ideal weight for your pet and recommend a diet that meets their specific needs at every life stage.</p>
        `,
        author: "Megan Sciorio",
        date: "January 28, 2024",
        category: "Health",
        image: blog2,
    },
    {
        id: "3",
        title: "How to Socialize Your Rescued Cat",
        excerpt: "Patience is key when welcoming a rescue cat. Discover effective ways to help them feel safe and comfortable.",
        content: `
            <p>Rescue cats often come from traumatic backgrounds or have spent a long time in shelters. Helping them adjust to a new home requires a gentle touch and a lot of patience. Here's how you can help your new kitty feel like part of the family.</p>
            
            <h3>The "Safe Room" Approach</h3>
            <p>Don't give your new cat free reign of the house immediately. Start them off in a single, quiet room equipped with their litter box, food, water, and a place to hide. This allows them to get used to the smells and sounds of your home without feeling overwhelmed.</p>
            
            <h3>Let Them Come to You</h3>
            <p>It's tempting to want to cuddle your new cat right away, but it's better to let them initiate contact. Spend time in their room reading a book or working on your laptop. Let them approach you once they feel safe.</p>
            
            <h3>Use Scent to Build Trust</h3>
            <p>Exchange scents by rubbing a cloth on the cat and placing it near your bed, and vice-versa. This helps the cat associate your scent with safety and comfort.</p>
            
            <h3>Interactive Play</h3>
            <p>Play is a great way to build a bond. Use feather wands or laser pointers to encourage your cat to engage with you from a distance they find comfortable.</p>
            
            <h3>Create Vertical Space</h3>
            <p>Cats feel safer when they can observe their environment from a high vantage point. Provide cat trees or shelves to help your new friend feel secure in their new territory.</p>
        `,
        author: "Megan Sciorio",
        date: "January 15, 2024",
        category: "Training",
        image: blog3,
    },
    {
        id: "4",
        title: "The Journey of a Rescue: From Street to Home",
        excerpt: "Follow the heartwarming story of Bella, a stray who found her forever family against all odds.",
        content: `
            <p>Every rescue story starts with a moment of uncertainty. For Bella, a scruffy terrier mix, that moment happened on a rainy Tuesday evening behind a local grocery store. She was cold, hungry, and wary of humans.</p>
            
            <h3>The Rescue</h3>
            <p>Our team received a call from a concerned citizen. When we arrived, Bella was hiding under a dumpster. It took two hours and a lot of gentle coaxing with treats to gain enough trust to get her into the transport crate. Her tail was tucked tight, but her eyes held a spark of hope.</p>
            
            <h3>Rehabilitation</h3>
            <p>The first few days at the shelter were tough. Bella was afraid of loud noises and wouldn't eat if anyone was watching. However, with the dedicated care of our medical team and socializers, she slowly began to come out of her shell. Her first tail wag was a cause for celebration across the entire rescue.</p>
            
            <h3>The Perfect Match</h3>
            <p>After three months of rehabilitation, Bella was ready for her forever home. That's when the Sharma family walked in. They were looking for a companion for their senior dog, and the connection was instant. Bella didn't just walk to them; she bounded.</p>
            
            <h3>Life Today</h3>
            <p>Today, Bella spends her days lounging in sunbeams and going on long weekend hikes. She's no longer the scared dog from behind the dumpster. She's a beloved family member, proving that with a little love and patience, every "street dog" can become a "sweet dog."</p>
        `,
        author: "Megan Sciorio",
        date: "February 10, 2024",
        category: "Rescue Stories",
        image: blog4,
    }
];
