export interface IWork {
  name: string;
  description: string;
  stack?: string;
  github?: string;
  live?: string;
}
export const Works: Array<IWork> = [
  {
    name: "Url Shortner",
    description:
      "Url shortner backend api to encode, decode and get basic stats for a shortened url",
    stack: "Nestjs, In-memory DB",
    github: "https://github.com/iamug/url-shortener"
  },
  {
    name: "Esusu Confam",
    description:
      "Esusu Confam application backend to allow users to register, login. create and search for groups and its members",
    stack: "Nestjs, TypeORM and MySQL",
    github: "https://github.com/iamug/ESUSU-Confam",
    live: "https://esusu-db.herokuapp.com/api/",
  },
  {
    name: "User Bank System",
    description:
      "User banking system backend to create accounts, fund account, transfer and withdraw from account",
    stack: "Nestjs, Knex and MySQL",
    github: "https://github.com/iamug/User-Bank-System",
    live: "https://user-bank-system.herokuapp.com/",
  },
  {
    name: "Find Talents App",
    description:
      "Frontend application to view talents including saving the profile of a talent",
    stack: "React, RTK Query, Bootstrap",
    github: "https://github.com/iamug/Find-Talents",
    live: "https://iamug.github.io/Find-Talents/",
  },
  {
    name: "Event Menu App",
    description:
      "Event menu application that enables users to create a menu and share a unique link and track orders from different tables using a QRCode ",
    stack: "Express, MongoDB , React, Chakra UI, RSuite",
    github: "https://github.com/iamug/Restaurant-menu",
    live: "https://app.baretag.co",
  },
  {
    name: "Ride Sharing App Admin Dashboard ",
    description:
      "Admin panel to manage users, drivers, vehicles , transactions for a ride sharing app with Role Based Access Control and Activity Logs ",
    stack: "Nodejs, Express, MongoDB , React, Bootstrap 5, RSuite",
    live: "https://admin.commute.ng",
  },
  {
    name: "Vehicle Managment Dashboard ",
    description: "User dashboar to onboard vehicles and track earnings of vehicles  ",
    stack: "Nodejs, Express, MongoDB , React, Bootstrap 5, RSuite",
    live: "https://partner.commute.ng",
  },
  {
    name: "ExpressWebJS Website ",
    description: "Website design for an open source Nodejs backend framework",
    stack: "Reactjs, Bootstrap 5",
    live: "https://expresswebjs.com/",
  },
  {
    name: "Attendance Managment App (Frontend)",
    description: "App to track clockins and clock outs of employees with reporting to show attendance by days, weeks etc",
    stack: "Reactjs, Redux, Material UI",
    github: "https://github.com/iamug/Attendance-Management-System-Frontend/",
    live: "https://iamug.github.io/Attendance-Management-System-Frontend/",
  },
  {
    name: "Attendance Managment App (Backend)",
    description: "App to track clockins and clock outs of employees with reporting to show attendance by days, weeks etc",
    stack: "ExpressWebJs, MongoDb",
    github: "https://github.com/iamug/Attendance-Management-System-Backend",
  },
  {
    name: "React Advice App",
    description: "React App to generate Advice",
    stack: "Reactjs",
    github: "https://github.com/iamug/react-advice-app/",
    live: "https://iamug.github.io/react-advice-app/",
  },
  {
    name: "Lagos Livable City Conference Website ",
    description: "Website for Lagos Livable City Conference including portal for registrations and integration with Notion.",
    stack: "Bootstrap, Express, MongoDB, Notion API",
    live: "http://lagoslivablecity.com/",
  },
  {
    name: "Lagos State Ministry of Health Website ",
    description: "Website for Lagos State Ministry of Health (Lagos MiND) ",
    stack: "WordPress",
    live: "http://lagosmind.org/",
  },
  {
    name: "AlliedRx Pharmacy Website ",
    description: "Website for AlliedRx Pharmacy with a protal to manage prescription refills and transfers",
    stack: "WordPress",
    live: "https://alliedrxpharmacy.portfolio.ugochukwu.dev/",
  },
  {
    name: "Primary Care of North Carolina Website ",
    description: "Website for Primary Care of North Carolina, USA with a protal to manage scheduled appointments",
    stack: "WordPress",
    live: "https://pcnchealth.com/",
  },
  {
    name: "Private Sector Health Alliance of Nigeria Website ",
    description: "Website for Private Sector Health Alliance of Nigeria.",
    stack: "WordPress",
    live: "https://pshan.org/",
  },
  {
    name: "Scrap Bank Africa Website ",
    description: "Website for Scrap Bank Africa ",
    stack: "WordPress",
    live: "https://scrapbankafrica.com/",
  },
  {
    name: "Mos Kreative Kitchen Website ",
    description: "Website for food vendor Mos Kreative Kitchen ",
    stack: "WordPress",
    live: "https://portfolio.ugochukwu.dev/moskreativekitchen/",
  },
];
