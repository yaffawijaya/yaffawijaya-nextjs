// This is the new single source of truth for your tech logos.

export interface TechLogo {
  src: string;
  alt: string;
  invertOnDark?: boolean;
  customHeight?: string;
}

export const techLogos: TechLogo[] = [
  { src: '/tech-stacks/python.png', alt: 'Python' },
  { src: '/tech-stacks/mysql.png', alt: 'MySQL', customHeight: "h-15" },
  { src: '/tech-stacks/postgresql.png', alt: 'PostgreSQL' },
  { src: '/tech-stacks/apache-airflow.png', alt: 'Airflow' },
  { src: '/tech-stacks/tensorflow.png', alt: 'TensorFlow', customHeight: "h-15"},
  { src: '/tech-stacks/numpy.png', alt: 'NumPy' },
  { src: '/tech-stacks/pytorch.png', alt: 'PyTorch', customHeight: "h-11" },
  { src: '/tech-stacks/apache-spark.png', alt: 'Spark', customHeight: "h-16" },
  { src: '/tech-stacks/apache-kafka.png', alt: 'Kafka', invertOnDark: true, customHeight: "h-17" },
  { src: '/tech-stacks/docker.png', alt: 'Docker', customHeight: "h-20" },
  { src: '/tech-stacks/gcp.png', alt: 'GCP', customHeight: "h-50" },
  { src: '/tech-stacks/microsoft-azure.png', alt: 'Azure', customHeight: "h-13" },
];
