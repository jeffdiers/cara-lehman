type Department = "Directing & Producing" | "Camera Department";
type Role =
  | "Producer"
  | "Director"
  | "Assistant Director"
  | "Editor"
  | "Producer"
  | "1st Assistant Camera"
  | "2nd Assistant Camera"
  | "Camera Operator"
  | "A CAM 2nd Assistant Camera"
  | "DIT"
  | "Loader"
  | "Assistant Camera";
type Tags = "As Seen On" | "Feature Films" | "Fashion & TV";

interface BaseWorkLink {
  title: string;
  role: Role | Role[];
  description?: string;
}

export interface WorkLinkWithDepartment extends BaseWorkLink {
  department: Department;
  links: string | string[];
}

interface WorkLinkWithTags extends BaseWorkLink {
  tags: Tags[];
}

export type WorkLink = WorkLinkWithDepartment | WorkLinkWithTags;

type WorkLinks = WorkLink[];

export const projectsData: WorkLinks = [
  {
    department: "Directing & Producing",
    role: "Producer",
    title: "Fabuwood 2024",
    links:
      "https://app.frame.io/presentations/bdeedf83-c341-4965-8c36-5fe570e19efe",
  },
  {
    department: "Directing & Producing",
    role: "Director",
    title: "Dan & Darci Rock Tumbler",
    links: "https://vimeo.com/manage/videos/396218489",
  },
  {
    department: "Directing & Producing",
    role: "Director",
    title: "Chip Chop Media Promo",
    links: "https://vimeo.com/manage/videos/396218460",
  },
  {
    department: "Directing & Producing",
    role: ["Director", "Editor"],
    title: "Large Sports Balls by Neliblu",
    links: "https://vimeo.com/manage/videos/482079657",
  },
  {
    department: "Directing & Producing",
    role: ["Producer", "Camera Operator"],
    title: "Hospital at Home Patient Testimonial: Joy",
    links:
      "https://www.youtube.com/watch?v=aeYyEm572C4&list=PLI9oSSNkpgTljqaXAaSlP2KyBddS9PodT&index=6",
  },
  {
    department: "Directing & Producing",
    role: ["Producer", "Assistant Director"],
    title: "How to Build a Business That Can Scale Beyond You",
    links:
      "https://www.youtube.com/watch?v=EvtUHphBc8g&list=PLI9oSSNkpgTljqaXAaSlP2KyBddS9PodT&index=7",
  },
  {
    department: "Camera Department",
    role: "1st Assistant Camera",
    title: "JBL 'JBLiens' Commercial :60",
    links: "https://vimeo.com/986677340",
  },
  {
    department: "Camera Department",
    role: "1st Assistant Camera",
    title: "HANES - 50th ANNIVERSARY OF HIP HOP",
    links: "https://vimeo.com/853806019?share=copy",
  },
  {
    department: "Camera Department",
    role: "1st Assistant Camera",
    title: "The Prologue: ALIENS from poet Lemon Andersen",
    links:
      "https://www.youtube.com/watch?v=4DRl8JWfMD8&list=PLI9oSSNkpgTljqaXAaSlP2KyBddS9PodT&index=5",
  },
  {
    department: "Camera Department",
    role: "1st Assistant Camera",
    title: "Capella Grey - Talk Nice",
    links:
      "https://www.youtube.com/watch?v=5qJH9V6vBH4&list=PLI9oSSNkpgTljqaXAaSlP2KyBddS9PodT&index=1",
  },
  {
    department: "Camera Department",
    role: "1st Assistant Camera",
    title: "Kaliii - KToven",
    links:
      "https://www.youtube.com/watch?v=V9-GOmPIoxo&list=PLI9oSSNkpgTljqaXAaSlP2KyBddS9PodT&index=3",
  },
  {
    department: "Camera Department",
    role: "1st Assistant Camera",
    title:
      "So Much to See: A Musical Celebration of the 2021-22 Broadway Season",
    links: "https://www.youtube.com/watch?v=FoFhd2DHDhE",
  },
  {
    department: "Camera Department",
    role: "1st Assistant Camera",
    title: "Make More Merry Market | Petco Live",
    links: "https://www.youtube.com/watch?v=TDNe2KqujkQ",
  },
  {
    department: "Camera Department",
    role: ["2nd Assistant Camera", "Camera Operator"],
    title: "Mercedes-Benz and Alicia Keys Present: Keys to Success",
    links:
      "https://www.youtube.com/watch?v=S9s1EUWGdYM&list=PLI9oSSNkpgTljqaXAaSlP2KyBddS9PodT&index=4",
  },
  {
    department: "Camera Department",
    role: "2nd Assistant Camera",
    title: "Anitta - Gata [Official Music Video]",
    links: "https://www.youtube.com/watch?v=jnqDDWsVmGA",
  },
  {
    department: "Camera Department",
    role: "2nd Assistant Camera",
    title:
      "Warners | Cloud 9\u00ae Super Soft Wireless Lightly Lined Comfort Bra, 1269",
    links: "https://www.youtube.com/watch?v=CCzDLm04rYw",
  },
  {
    department: "Camera Department",
    role: "2nd Assistant Camera",
    title: "Sumbuck - Moss (Official Music Video)",
    links: "https://www.youtube.com/watch?v=baViR48ktRY",
  },
  {
    department: "Camera Department",
    role: "2nd Assistant Camera",
    title: "Jharrel Jerome - Rap Pack (Short Film)",
    links: "https://www.youtube.com/watch?v=OwkMrOIZveo",
  },
  {
    department: "Camera Department",
    role: "Camera Operator",
    title: "ENHYPEN Competes in a Compliment Battle | Teen Vogue",
    links:
      "https://www.youtube.com/watch?v=HvJn737PQYE&list=PLI9oSSNkpgTljqaXAaSlP2KyBddS9PodT&index=9",
  },
  {
    department: "Camera Department",
    role: "Camera Operator",
    title: "LE SSERAFIM Answer the Web's Most Searched Questions | WIRED",
    links:
      "https://www.youtube.com/watch?v=aiBvvOWRziY&list=PLI9oSSNkpgTljqaXAaSlP2KyBddS9PodT&index=8",
  },
  {
    department: "Camera Department",
    role: "Camera Operator",
    title:
      "Marlon Craft - Somethin Wrong In Heaven (Live w/ Band) (Courtside Sessions)",
    links: "https://www.youtube.com/watch?v=JQXh3KAc_9k",
  },
  {
    department: "Camera Department",
    role: "Camera Operator",
    title: "Giorgio Armani Spring Summer 2025",
    links: [
      "https://www.instagram.com/reel/DBV8ytuv34U/?igsh=bjcweWE2MXU0OW9w",
      "https://www.instagram.com/reel/DBUX9P9KifH/?igsh=MWNoc2M2c2N2OTV3aQ%3D%3D",
    ],
  },
  {
    tags: ["As Seen On", "Feature Films"],
    title: "Shutter: A Wounded Fawn",
    role: "2nd Assistant Camera",
  },
  {
    tags: ["As Seen On", "Feature Films"],
    title: "Damned If You Do",
    role: "A CAM 2nd Assistant Camera",
  },
  {
    tags: ["As Seen On", "Feature Films"],
    title: "Ride or Die 2024",
    role: ["2nd Assistant Camera", "DIT"],
  },
  {
    tags: ["As Seen On", "Fashion & TV"],
    title: "NY Fashion Week: Gabriella Hearst",
    role: "Assistant Camera",
  },
  {
    tags: ["As Seen On", "Fashion & TV"],
    title: "Law and Order OC",
    role: "Loader",
  },
  {
    tags: ["As Seen On", "Fashion & TV"],
    title: "NY Liberty Hype Video 2023 & 2024",
    role: "1st Assistant Camera",
  },
  {
    department: "Camera Department",
    title: "We the Culture & Facebook App",
    role: ["2nd Assistant Camera", "DIT"],
    links:
      "https://app.frame.io/presentations/49a43cd3-094a-405a-a97d-61fac7a49d97",
  },
  {
    department: "Camera Department",
    role: ["Producer", "1st Assistant Camera"],
    title: "Mesopotamia, TX",
    links: "https://vimeo.com/1039319180",
    description: "Screening available upon request ",
  },
];
