type Enginner = {
  name: string;
  role: string;
}

type Blogger = {
  name: string;
  follower: number;
}

type EnginnerAndBlogger = Enginner & Blogger;

// interface Enginner {
//   name: string;
//   role: string;
// }

// interface Blogger {
//   name: string;
//   follower: number;
// }

// interface EnginnerAndBlogger extends Enginner, Blogger {}

const max: EnginnerAndBlogger = {
  name: 'max',
  role: 'front-end',
  follower: 333
}

type NumberOrBoolean = number | boolean;
type StringOrNumber = string | number;
type Mix = NumberOrBoolean & StringOrNumber;
