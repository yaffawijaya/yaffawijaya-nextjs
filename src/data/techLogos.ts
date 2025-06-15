// This is the new single source of truth for your tech logos.

export interface TechLogo {
  src: string;
  alt: string;
  invertOnDark?: boolean;
  customHeight?: string;
}

export const techLogos: TechLogo[] = [
  { src: 'https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png', alt: 'Python' },
  { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/200px-MySQL_logo.svg.png', alt: 'MySQL', customHeight: "h-15" },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png', alt: 'PostgreSQL' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AirflowLogo.png/1200px-AirflowLogo.png', alt: 'Airflow' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png', alt: 'TensorFlow', customHeight: "h-15"},
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/2560px-NumPy_logo_2020.svg.png', alt: 'NumPy' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png', alt: 'PyTorch', customHeight: "h-11" },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png', alt: 'Spark', customHeight: "h-16" },
  { src: 'https://images.icon-icons.com/2699/PNG/512/apache_kafka_logo_icon_167866.png', alt: 'Kafka', invertOnDark: true, customHeight: "h-17" },
  { src: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png', alt: 'Docker', customHeight: "h-20" },
  { src: 'https://download.logo.wine/logo/Google_Cloud_Platform/Google_Cloud_Platform-Logo.wine.png', alt: 'GCP', customHeight: "h-50" },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png', alt: 'Azure', customHeight: "h-13" },
];
