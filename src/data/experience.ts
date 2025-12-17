// This interface defines a single role within a company
export interface Role {
  title: string;
  type: 'Internship' | 'Part-time' | 'Hybrid' | 'Remote' | 'On-site' | 'Contract' | 'Full-time' | string;
  startDate: Date;
  endDate?: Date;
  isCurrent?: boolean;
  description: string[];
}

// This interface defines a company, which can have multiple roles
export interface ExperienceCompany {
  company: string;
  logoUrl: string;
  location: string;
  roles: Role[];
}

// Our new "database" of experiences, structured by company
const allExperiences: ExperienceCompany[] = [
  {
    company: "TransTRACK",
    logoUrl: "https://www.transtrack.co/assets/logo/logo-square.jpg",
    location: "Bandung, Indonesia",
    roles: [
      {
        title: "Data Engineer",
        type: "Full-time",
        startDate: new Date('2025-07-01'),
        isCurrent: true,
        description: [
          "Develop ETL and maintain data pipelines using N8N for schedulling and automations.",
          "Design and build customized data dashboards using the Elastic Stack (Kibana) to meet specific client visualization requirements.",
          "Optimize data pipeline with distributed system and realtime data processing using Apache Kafka.",
          "Collaborate with software engineers to meet the requirements the client needs."
        ]
      }
    ]
  },
  {
    company: "Big Data Laboratory Telkom University",
    logoUrl: "/company-logos/bigdatalab.png",
    location: "Bandung, West Java, Indonesia",
    roles: [
      {
        title: "Coordinator Laboratory Assistant",
        type: "Hybrid",
        startDate: new Date('2024-11-01'),
        isCurrent: true,
        description: [
          "Initiated the 'Project-Based Learning' program to enhance collaborative learning.",
          "Managed collaborative research projects with campus and startups to enhance the research portfolio.",
          "Coordinated the development of learning modules for study groups."
        ]
      },
      {
        title: "Laboratory Assistant of Big Data Application",
        type: "Hybrid",
        startDate: new Date('2024-09-01'),
        isCurrent: true,
        description: [
          "Assisted new candidates in learning Big Data (Hadoop, Spark, Airflow, Kafka) and Graph ML (Neo4j).",
          "Assisted in introducing Graph databases and Graph Machine Learning use cases."
        ]
      }
    ]
  },
  {
    company: "Fakultas Informatika Telkom University",
    logoUrl: "/company-logos/telkom-university.png",
    location: "Bandung, West Java, Indonesia",
    roles: [
      {
        title: "Lecturer Assistant of Parallel Computation",
        type: "Remote",
        startDate: new Date('2024-09-01'),
        isCurrent: false,
        endDate: new Date('2025-01-31'),
        description: ["Guided students in understanding parallel computing concepts."]
      },
      {
        title: "Lecturer Assistant of Cloud Computing",
        type: "Remote",
        startDate: new Date('2024-09-01'),
        isCurrent: false,
        endDate: new Date('2025-01-31'),
        description: ["Assisted in creating materials for distributed systems and cloud platforms."]
      }
    ]
  },
  {
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    logoUrl: "/company-logos/bangkit.png",
    location: "Indonesia",
    roles: [
      {
        title: "Cloud Computing Cohort",
        type: "Apprenticeship",
        startDate: new Date('2024-02-01'),
        endDate: new Date('2024-07-31'),
        isCurrent: false,
        description: [
          "Top 50 teams in the batch program.",
          "Led a team as a lead engineer in a Capstone Project focusing on developing a cataract detection application (Cthru).",
          "Designed cloud architecture using Google Cloud Platform (GCP) Firestore and App Engine.",
          "Developed APIs for machine learning model integration and authentication."
        ]
      }
    ]
  },
  {
    company: "PT Bhakti Unggul Teknovasi",
    logoUrl: "/company-logos/bhakti-unggul.png",
    location: "Indonesia",
    roles: [
      {
        title: "Database Architect",
        type: "Part-time",
        startDate: new Date('2023-12-01'),
        endDate: new Date('2024-04-30'),
        isCurrent: false,
        description: [
          "Collaborated with stakeholders at IAIN Madura to understand database needs.",
          "Integrated SISTER, civitas academica data, and library data into a relational schema with approx. 72 entities.",
          "Implemented indexing for optimizing database performance.",
          "Developed MySQL prototypes and ensured data quality."
        ]
      }
    ]
  },
  {
    company: "Freelance",
    logoUrl: "/company-logos/freelance.png",
    location: "Remote",
    roles: [
      {
        title: "Python Development Service",
        type: "Freelance",
        startDate: new Date('2023-07-01'),
        isCurrent: true,
        description: [
          "Developed fullstack web applications using Django with MySQL and user authentication.",
          "Handled computer vision and image captioning projects with deep learning algorithms.",
          "Consulted clients on data analysis, machine learning, and time series forecasting tasks."
        ]
      }
    ]
  },
  {
    company: "PT Astra Honda Motor",
    logoUrl: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/uploads/page/about-us/thumbnail/corporate-1.svg",
    location: "North Jakarta, Jakarta, Indonesia",
    roles: [
      {
        title: "Data Scientist Intern",
        type: "Internship",
        startDate: new Date('2024-07-01'),
        endDate: new Date('2024-08-31'),
        isCurrent: false,
        description: [
          "Developed a Streamlit app and Power BI dashboard, improving analysis time efficiency by 87.5%.",
          "Focusing on Material Cost analysis in production data.",
          "Applied K-Means clustering for budget use analysis on 16,000+ materials."
        ]
      }
    ]
  },
  {
    company: "HIMA Data Sains Telkom University",
    logoUrl: "/company-logos/hima-datasains.png",
    location: "Bandung, West Java, Indonesia",
    roles: [
      {
        title: "Introduction to Programming Mentor Coordinator",
        type: "Volunteer",
        startDate: new Date('2023-10-01'),
        endDate: new Date('2023-12-31'),
        isCurrent: false,
        description: [
          "Managed and coordinated mentors for preparing course materials.",
          "Supervised mentors and 30 mentees in the classroom.",
          "Supported consultation by sharing knowledge in basic programming using pseudocode and Golang."
        ]
      }
    ]
  }
];

// A helper function to automatically calculate the duration string
const calculateDuration = (startDate: Date, endDate?: Date, isCurrent?: boolean): string => {
  const end = isCurrent ? new Date() : endDate!;
  let months = (end.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += end.getMonth();
  months = months <= 0 ? 0 : months;

  if (months < 1) return "Less than a month";
  if (months === 1) return "1 mo";
  if (months < 12) return `${months} mos`;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) return `${years} yr`;
  return `${years} yr ${remainingMonths} mos`;
};

// We sort the experiences by the most recent start date to show newest first
export const sortedExperiences = allExperiences.sort((a, b) => {
  // Check if the company has any roles
  if (a.roles.length === 0) return 1;
  if (b.roles.length === 0) return -1;

  const aDate = a.roles[0].startDate;
  const bDate = b.roles[0].startDate;
  return bDate.getTime() - aDate.getTime();
});

// We also export the duration calculator for use in the component
export { calculateDuration };