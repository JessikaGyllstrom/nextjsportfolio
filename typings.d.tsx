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
export interface Webbdev extends SanityBody {
  _type: "webbdev";
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
