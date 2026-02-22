export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  animalName: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    animalName: "Buddy",
    quote: "Adopting Buddy was the best decision we ever made. The team at Once Upon a Rescue made the process so smooth and transparent. He's now the heart of our home in Watford.",
    initials: "SJ",
    location: "Watford",
  },
  {
    id: "2",
    name: "David Smith",
    animalName: "Whiskers",
    quote: "We were looking for a companion for our senior cat, and Whiskers fit right in. Thank you for the incredible work you do for these animals!",
    initials: "DS",
    location: "Manchester",
  },
  {
    id: "3",
    name: "Emily Brown",
    animalName: "Luna",
    quote: "Luna has filled our lives with so much joy. Her journey from the streets to our sofa is a testament to the dedication of the Once Upon a Rescue team.",
    initials: "EB",
    location: "Bristol",
  },
];
