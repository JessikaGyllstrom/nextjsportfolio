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
        _type: "reference"
    }
}
export interface Skill extends SanityBody {
    _type: "skills";
    title: string;
    description: string[];
    skillsImage: {
        asset: {
            _id: any;
            _ref: string;
            _type: "reference"
        }
    }
}
export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    title: string;
    description: string[];
    githubLink: string;
    linkedinLink: string;
    email: string;
    logoImage: {
        asset: {
            _id: any;
            _ref: string;
            _type: "reference"
        }
    },
    heroImage: {
        asset: {
            _id: any;
            _ref: string;
            _type: "reference"
        }
    },
    educationImageImage: {
        asset: {
            _id: any;
            _ref: string;
            _type: "reference"
        }
    }
}
export interface Education extends SanityBody {
    _type: "education";
    title: string;
    description: string[];
    ref: string;
    educationImage: {
        asset: {
            _id: any;
            _ref: string;
            _type: "reference"
        }
    }
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
            _type: "reference"
        }
    }
}
export interface Art extends SanityBody {
    _type: "art";
    title: string;
    description: string[];
    ref: string;
    image: {
        asset: {
            _id: any;
            _ref: string;
            _type: "reference"
        }
    }
}