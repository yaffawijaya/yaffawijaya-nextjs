// This interface defines a single role within a company
export interface Role {
  title: string;
  type: 'Internship' | 'Part-time' | 'Hybrid' | 'Remote' | 'On-site' | string;
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
    company: "Big Data Laboratory Telkom University",
    logoUrl: "https://bigdatatelyu.github.io/logos/bigdata.png",
    location: "Bandung, West Java, Indonesia",
    roles: [
      {
        title: "Coordinator Laboratory Assistant",
        type: "Hybrid",
        startDate: new Date('2024-11-01'),
        isCurrent: true,
        description: [
          "Initiated the 'Project-Based Learning' program to enhance collaborative learning.",
          "Managed research projects with campus and startup partners."
        ]
      },
      {
        title: "Laboratory Assistant of Big Data Application",
        type: "Hybrid",
        startDate: new Date('2024-09-01'),
        isCurrent: true,
        description: [
          "Assisted new candidates in learning Big Data (Hadoop, Spark, Airflow, Kafka) and Graph ML (Neo4j).",
        ]
      }
    ]
  },
  {
    company: "Fakultas Informatika Telkom University",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Logo_Telkom_University_potrait.png",
    location: "Bandung, West Java, Indonesia",
    roles: [
      {
        title: "Lecturer Assistant of Parallel Computation",
        type: "Remote",
        startDate: new Date('2024-09-01'),
        endDate: new Date('2025-01-31'),
        description: ["Guided students in understanding parallel computing concepts."]
      },
      {
        title: "Lecturer Assistant of Cloud Computing",
        type: "Remote",
        startDate: new Date('2024-09-01'),
        endDate: new Date('2025-01-31'),
        description: ["Assisted in creating materials for distributed systems and cloud platforms."]
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
        description: [
          "Developed a Streamlit app and Power BI dashboard, improving analysis time efficiency by 87.5%.",
          "Applied K-Means clustering for budget use analysis on 16,000+ materials."
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
    const aDate = a.roles[0].startDate;
    const bDate = b.roles[0].startDate;
    return bDate.getTime() - aDate.getTime();
});

// We also export the duration calculator for use in the component
export { calculateDuration };
