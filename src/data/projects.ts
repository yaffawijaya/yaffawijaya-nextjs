// FILE: src/data/projects.ts

// type: github | medium | youtube | gdrive | fallback

export const allProjectsData = [
  {
    slug: 'samsung-health-rag',
    title: "Samsung Health GraphRAG",
    description: "Integrated Samsung Health data with a GraphRAG system using Neo4j and LangChain to enable accurate, natural language health queries.",
    tags: ["GraphRAG", "Neo4j", "LangChain", "OpenAI", "Streamlit"],
    imageUrl: 'https://raw.githubusercontent.com/yaffawijaya/samsung-health-graphrag/refs/heads/exhibition/app/assets/psd_poster.png',
    role: "Lead Researcher & Developer",
    duration: "1 Month (Feb 2025)",
    links: [
      { type: 'github', url: 'https://github.com/yaffawijaya/samsung-health-graphrag', label: 'View Code on GitHub' },
      { type: 'gdrive', url: 'https://drive.google.com/file/d/1I-zqi_yaW6sKZaBy3ErBoN_O27sBaz-6/view?usp=sharing', label: 'Watch the Demo Video' }
    ],
    caseStudy: {
      challenge: "Health data from apps like Samsung Health is rich but often unstructured. The primary challenge was to create a system that could understand and answer natural language questions about this complex, interconnected data, such as 'How did my sleep last Tuesday affect my step count on Wednesday?'.",
      solution: "I built a GraphRAG (Retrieval-Augmented Generation) system. First, I structured the raw health data (Food, Water, Sleep, Steps) into a Neo4j graph database, which excels at managing relationships. Then, I implemented a hybrid retrieval system using LangChain and OpenAI's LLM to accurately interpret user queries, fetch relevant data from the graph, and generate a coherent, human-like answer. A Streamlit interface provided an easy-to-use front-end for data upload and interaction.",
      technicalDetails: "The core of the system relied on creating a robust graph schema in Neo4j. The retrieval system used a combination of vector similarity search for query understanding and Cypher queries for precise data extraction. The entire pipeline was orchestrated using Python, with Streamlit for rapid UI development.",
      features: [
        "Engineered a robust GraphRAG system for analyzing personal health data.",
        "Utilized Neo4j and LangChain for effective data retrieval and generation.",
        "Delivered an intuitive Streamlit UI for seamless user interaction."
      ]
    }
  },
  {
    slug: 'indovest-dkg',
    title: "IndovestDKG: Dynamic Knowledge Graph",
    description: "Developed a novel dynamic knowledge graph from 7,700+ news articles, applying temporal analysis with GPT-4o-mini for entity extraction.",
    tags: ["Knowledge Graph", "GPT-4o", "Web Scraping", "T-KGC"],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Logo_Telkom_University_potrait.png',
    role: "Author",
    duration: "Ongoing (Started Sep 2024)",
    links: [
      { type: 'medium', url: 'https://medium.com/@yaffawijaya/indovest-dkg-article', label: 'Read Article on Medium' }
    ],
    caseStudy: {
      challenge: "Investment news contains valuable information about relationships between companies, people, and events, but this information changes over time. The challenge was to capture these temporal dynamics from a large corpus of news articles to enable time-aware analysis.",
      solution: "I developed IndovestDKG, a novel dynamic knowledge graph dataset. I scraped over 7,700 investment news articles from Kompas. Using GPT-4o-mini, I performed sophisticated entity and relation extraction to build the knowledge graph. I then applied advanced Temporal Knowledge Graph Completion (T-KGC) techniques to analyze and predict how these relationships evolve over time.",
      technicalDetails: "The project involved extensive web scraping with Python libraries like BeautifulSoup and Scrapy. The core NLP task was handled by fine-tuning and prompting GPT-4o-mini for high-accuracy extraction. The T-KGC analysis involved implementing and comparing various models to validate the dataset's effectiveness for time-aware predictions.",
      features: [
        "Scraped and processed over 7,700 investment news articles.",
        "Applied GPT-4o-mini for high-accuracy temporal entity extraction.",
        "Enabled time-aware analysis with Temporal Knowledge Graph Completion."
      ]
    }
  },
  {
    slug: 'cthru-app',
    title: "Cthru: Cataract Detection App",
    description: "Led a capstone project to build a cataract detection app using a VGG16 model, with a FastAPI backend deployed on Google Cloud Platform.",
    tags: ["Computer Vision", "FastAPI", "GCP", "Kotlin", "VGG16"],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Bangkit-logo.png',
    role: "Lead Team & Lead Cloud Engineer ",
    duration: "6 Months (Bangkit Capstone)",
    links: [
      { type: 'github', url: 'https://github.com/yaffawijaya/bangkit-academy-cthru-C241-PS065', label: 'Check our Branch on GitHub Repository' }
    ],
    caseStudy: {
      challenge: "Early detection of cataracts is crucial but often inaccessible in remote areas. The goal of our Bangkit capstone team was to create a user-friendly mobile application that could provide an initial cataract screening using a smartphone camera.",
      solution: "As the lead cloud and API engineer, I designed the cloud architecture on Google Cloud Platform to support the application. I developed a robust backend using Python and FastAPI to serve our team's VGG16 computer vision model. This API handled image uploads from the Kotlin-based Android app, processed them with the ML model (which achieved 95% prediction accuracy), and returned the screening result. I also implemented a Cloud Firestore database to store user history for the app's history feature.",
      technicalDetails: "The core of my work was building a scalable and efficient API endpoint on GCP's App Engine. This involved containerizing the FastAPI application, managing ML model deployment, and ensuring low-latency responses. I designed the Firestore schema for optimal query performance for the user history feature.",
      features: [
        "Achieved 95% cataract detection accuracy with a VGG16 model.",
        "Built a scalable API backend using FastAPI on Google Cloud Platform.",
        "Integrated Cloud Firestore for persistent user history."
      ]
    }
  },
  {
    slug: 'ahm-cost-analysis',
    title: "AHM Material Cost Analysis",
    description: "Created a Power BI dashboard and Streamlit app to analyze and monitor over 16,000 materials, improving time efficiency by 87.5%.",
    tags: ["Power BI", "Streamlit", "K-Means", "Data Analysis"],
    imageUrl: 'https://ik.imagekit.io/zlt25mb52fx/ahmcdn/uploads/page/about-us/thumbnail/corporate-1.svg',
    role: "Data Scientist Intern",
    duration: "2 Months (Jul-Aug 2024)",
    links: [],
    caseStudy: {
      challenge: "The EPP department at Astra Honda Motor needed to analyze the material costs of over 16,000 components to identify optimization opportunities. The traditional analysis method using Microsoft Excel was time-consuming and inefficient.",
      solution: "I developed a two-part solution. First, I created a comprehensive Power BI dashboard to monitor material usage and efficiency across different cost centers. Second, I built a Streamlit web application that implemented an unsupervised K-Means clustering algorithm to automatically identify budget usage patterns. This application included a data preprocessing pipeline that reduced analysis time by 87.5% compared to the manual Excel method.",
      technicalDetails: "The project required extensive data handling and cleaning with Python (Pandas). The core analytical model was K-Means from Scikit-learn. The solution was delivered through two interfaces: an interactive dashboard in Power BI for high-level monitoring and a specialized Streamlit app for deep-dive cluster analysis.",
      features: [
        "Reduced material analysis time by 87.5% compared to manual methods.",
        "Analyzed over 16,000 materials using K-Means clustering.",
        "Delivered insights through an interactive Power BI and Streamlit dashboard."
      ]
    }
  },
  {
    slug: 'iain-madura-db',
    title: "IAIN Madura Database Integration",
    description: "Designed and implemented an integrated relational schema for academic and library systems, involving over 72 entities and query optimization.",
    tags: ["Database Architecture", "MySQL", "ERD", "Stakeholder Collab"],
    imageUrl: 'https://but.co.id/wp-content/uploads/2023/05/Logo-BUT-2x.png',
    role: "Database Architect (Part-Time)",
    duration: "5 Months (Dec 2023 - Apr 2024)",
    links: [], // An empty array hides the button automatically
    caseStudy: {
      challenge: "IAIN Madura's information systems were siloed. Data for student academics (civitas academica), human resources (SISTER), and the library were all stored in separate, non-communicating databases. This made integrated reporting and analysis nearly impossible.",
      solution: "I collaborated closely with university stakeholders to understand their needs. My core task was to design a comprehensive, integrated database schema that unified all three data sources. I created detailed Entity-Relationship Diagrams (ERDs) for the new system, which included approximately 72 entities. I then developed a prototype in MySQL, ensuring data quality and optimizing query performance through strategic indexing.",
      technicalDetails: "This was a classic database architecture project. The main skills used were requirements analysis, relational database design (ERDs, normalization), and SQL implementation (MySQL). A key success factor was communication with the client to iterate on the schema and ensure it met their operational needs.",
      features: [
        "Designed a unified relational schema integrating 3 siloed systems.",
        "Modeled over 72 unique entities using detailed ERDs.",
        "Optimized database performance through strategic query design and indexing."
      ]
    }
  },
  {
    slug: 'freelance-python',
    title: "Freelance Python Development",
    description: "Developed full-stack Django web applications and provided consultation on machine learning and time-series forecasting tasks for various clients.",
    tags: ["Django", "Full-Stack", "Machine Learning", "Consulting"],
    imageUrl: 'https://www.svgrepo.com/show/310247/window-dev-tools.svg',
    role: "Full-Stack Developer & Data Science Consultant",
    duration: "5 Months (Jul-Nov 2023)",
    links: [],
    caseStudy: {
      challenge: "Clients came with diverse problems, ranging from needing a web application to store form data to requiring expert help on complex machine learning case studies. The challenge was to quickly understand each client's unique problem and deliver a tailored, effective solution.",
      solution: "For web application needs, I developed full-stack solutions using the Django framework, integrating them with MySQL databases and implementing built-in user authentication. For data science tasks, I held consultation sessions to understand the problem, then assisted with in-depth statistical analysis, machine learning model development, or time-series forecasting, delivering both code and clear explanations of the results.",
      technicalDetails: "This role required versatility. On the web development side, I used Django, HTML/CSS, and MySQL. On the data science side, I applied a wide range of ML algorithms and statistical techniques depending on the client's specific case study, primarily using Python's data science ecosystem (Pandas, Scikit-learn, etc.).",
      features: [
        "Delivered full-stack web applications using Django.",
        "Provided expert consultation on machine learning and time-series forecasting.",
        "Assisted clients with in-depth statistical analysis and model development."
      ]
    }
  },
];