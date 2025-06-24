import { PortableTextBlock } from "sanity";
interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface Image {
  _id: string;
  _type: "image";
  asset: {
    _id: any;
    _ref: string;
    _type: "reference";
  };
}
export interface Skill extends SanityBody {
  _type: "skills";
  title: string;
  description: string[];
  skillsImage: {
    asset: {
      _id: any;
      _ref: string;
      _type: "reference";
    };
  };
}
export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  title: string;
  description: string[];
  githubLink: string;
  linkedinLink: string;
  cvLink: string;
  email: string;
  links: string[];
  logoImage: {
    asset: {
      _id: any;
      _ref: string;
      _type: "reference";
    };
  };
  heroImage: {
    asset: {
      _id: any;
      _ref: string;
      _type: "reference";
    };
  };
  educationImageImage: {
    asset: {
      _id: any;
      _ref: string;
      _type: "reference";
    };
  };
}
export interface Education extends SanityBody {
  _type: "education";
  title: string;
  description: string[];
  ref: string;
  popularity: string;
  educationImage: {
    asset: {
      _id: any;
      _ref: string;
      _type: "reference";
    };
  };
}
export interface Courses extends SanityBody {
  _type: "courses";
  title: string;
  description: string[];
  ref: string;
  Image: {
    asset: {
      _id: any;
      _ref: string;
      _type: "reference";
    };
  };
}
export interface Art extends SanityBody {
  _type: "art";
  title: string;
  description: string;
  ref: string;
  image: {
    asset: {
      _id: any;
      _ref: string;
      _type: "reference";
    };
  };
}
export interface AiArt extends SanityBody {
  _type: "aiart";
  title: string;
  description: string;
  ref: string;
  image: {
    asset: {
      _id: any;
      _ref: string;
      _type: "reference";
    };
  };
}
export interface Project extends SanityBody {
  [x: string]: any;
  _type: "project";
  title: string;
  description: string[];
  ref: string;
  rating: string;
  image: {
    asset: {
      _id: any;
      _ref: string;
      _type: "reference";
    };
  };
  video: {
    asset: {
      _id: any;
      _ref: string;
      _url: string;
      _type: "reference";
    };
  };
}
export interface About extends SanityBody {
  _type: "about";
  name: string;
  ref: string;
  bio: PortableTextBlock[];
  profileImg: {
    asset: {
      _id: any;
      _ref: string;
      _type: "reference";
    };
  };
}
export interface Hobbies extends SanityBody {
  _type: "hobbies";
  name: string;
  id: string;
  ref: string;
  title: string[];
  hobbieImg: {
    asset: {
      _id: any;
      _ref: string;
      _type: "reference";
    };
  };
}
interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Category extends SanityBody {
  _type: "category";
  title: string;
}

interface StoryboardImage {
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  description: string;
  rating: number;
}

export interface Storyboard extends SanityBody {
  _type: "storyboard";
  title: string;
  name: string;
  concepts: string[];
  problem: string;
  user: string;
  goal: string;
  process: string;
  categories: Category[];
  images: StoryboardImage[];
}
interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Category extends SanityBody {
  _type: "category";
  title: string;
}

interface DesignImage {
  _type: "image";
  asset: {
    url: string | undefined;
    _id: string;
    _ref: string;
    _type: "reference";
  };
}

interface DesignVideo {
  _type: "file";
  asset: {
    _id: string;
    _ref: string;
    _type: "reference";
    url?: string; // Optional URL for the video file
  };
  description: string;
}

export interface Design extends SanityBody {
  _type: "design";
  title: string;
  name: string;
  description: string[];
  categories: Category[];
  image: DesignImage;
  rating: number;
  video: DesignVideo;
}
