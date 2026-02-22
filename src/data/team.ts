export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Megan Sciorio",
    role: "Founder & Owner",
    bio: "Owner and Founder of Once Upon a Rescue. A dedicated advocate for animal welfare with a mission to rescue, rehabilitate, and rehome animals in need.",
    initials: "MS",
    social: {
      facebook: "https://www.facebook.com/megan.sciorio?rdid=Be8vLeltj7u7VGsA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CCtvxfXCL%2F#",
    }
  },
];
