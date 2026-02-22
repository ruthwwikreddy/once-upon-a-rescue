import dogBuddy from "@/assets/animals/dog-buddy.jpg";
import dogMax from "@/assets/animals/dog-max.jpg";
import dogLuna from "@/assets/animals/dog-luna.jpg";
import catWhiskers from "@/assets/animals/cat-whiskers.jpg";
import catShadow from "@/assets/animals/cat-shadow.jpg";
import catMittens from "@/assets/animals/cat-mittens.jpg";

export interface Animal {
  id: string;
  name: string;
  species: "dog" | "cat";
  breed: string;
  age: string;
  gender: "Male" | "Female";
  size: "Small" | "Medium" | "Large";
  temperament: string[];
  healthStatus: string;
  description: string;
  image: string;
  adoptionRequirements: string[];
  featured?: boolean;
}

export const animals: Animal[] = [
  {
    id: "1",
    name: "Buddy",
    species: "dog",
    breed: "Golden Retriever Mix",
    age: "3 years",
    gender: "Male",
    size: "Large",
    temperament: ["Friendly", "Playful", "Good with kids"],
    healthStatus: "Vaccinated, Neutered",
    description:
      "Buddy is a lovable golden boy who was rescued from the streets. He loves belly rubs, long walks, and making new friends. He's great with children and other dogs.",
    image: dogBuddy,
    adoptionRequirements: ["Spacious home", "Active lifestyle", "Experience with large dogs"],
    featured: true,
  },
  {
    id: "2",
    name: "Max",
    species: "dog",
    breed: "German Shepherd Mix",
    age: "4 years",
    gender: "Male",
    size: "Large",
    temperament: ["Loyal", "Protective", "Intelligent"],
    healthStatus: "Vaccinated, Neutered",
    description:
      "Max is a brave and loyal companion who was rescued from an abusive situation. He has since blossomed into a gentle giant who loves his humans deeply.",
    image: dogMax,
    adoptionRequirements: ["Secure yard", "Patient owner", "No small children"],
    featured: true,
  },
  {
    id: "3",
    name: "Luna",
    species: "dog",
    breed: "Mixed Breed Puppy",
    age: "6 months",
    gender: "Female",
    size: "Small",
    temperament: ["Energetic", "Curious", "Affectionate"],
    healthStatus: "Vaccinated, First deworming done",
    description:
      "Luna is an adorable little puppy who was found abandoned near a highway. She's full of energy and love, and she's looking for a forever family to grow up with.",
    image: dogLuna,
    adoptionRequirements: ["Time for training", "Puppy-proofed home", "Commitment to vaccinations"],
    featured: true,
  },
  {
    id: "4",
    name: "Whiskers",
    species: "cat",
    breed: "Orange Tabby",
    age: "2 years",
    gender: "Male",
    size: "Medium",
    temperament: ["Calm", "Independent", "Cuddly"],
    healthStatus: "Vaccinated, Neutered",
    description:
      "Whiskers is a handsome orange tabby who enjoys sunbathing by the window and curling up on laps. He was rescued from a construction site as a kitten.",
    image: catWhiskers,
    adoptionRequirements: ["Indoor home preferred", "Gentle household"],
    featured: true,
  },
  {
    id: "5",
    name: "Shadow",
    species: "cat",
    breed: "Domestic Shorthair",
    age: "3 years",
    gender: "Female",
    size: "Medium",
    temperament: ["Graceful", "Quiet", "Affectionate"],
    healthStatus: "Vaccinated, Spayed",
    description:
      "Shadow is an elegant black beauty who was found as a stray. She takes a little time to warm up but becomes incredibly loving once she trusts you.",
    image: catShadow,
    adoptionRequirements: ["Quiet home", "Patient owner", "Indoor only"],
  },
  {
    id: "6",
    name: "Mittens",
    species: "cat",
    breed: "Calico",
    age: "1 year",
    gender: "Female",
    size: "Small",
    temperament: ["Playful", "Social", "Vocal"],
    healthStatus: "Vaccinated, Spayed",
    description:
      "Mittens is a beautiful calico with a big personality. She loves interactive toys, treats, and will tell you all about her day with her adorable meows.",
    image: catMittens,
    adoptionRequirements: ["Interactive playtime", "Indoor home"],
  },
];
