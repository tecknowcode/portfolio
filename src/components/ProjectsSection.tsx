import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/* -------------------- Dynamic Project Image Loader -------------------- */

const certImages = import.meta.glob(
  "/src/assets/projects/*.{jpg,png,jpeg}",
  {
    eager: true,
    import: "default",
  }
);

const getImage = (name: string): string => {
  return (certImages[`/src/assets/projects/${name}`] as string) ?? "";
};

/* --------------------------------------------------------------------- */
const categories = [
  "All",
  "ML/DL",
  "NLP",
  "CLOUD",
  "EDA",
  "DEVOPS"
];

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  secondaryCategory?: string;
  image: string;
  tech: string[];
  metrics: { accuracy: number; records: string };
  github: string;
  demo: string;
  showDemo?: boolean;
  details: {
    overview: string;
    results: string[];
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Netflix Content Strategy & Data Analysis",
    description:
      "Built a comprehensive data analytics project on Netflix content using exploratory data analysis, visualization, and business intelligence techniques to uncover trends in movies, TV shows, genres, ratings, regional distribution, and subscriber engagement strategies.",
    category: "EDA",
    secondaryCategory: "",
    image: "netflix.png",
    tech: ["Python","Pandas","NumPy","Matplotlib","Seaborn","Plotly","Datetime","Google Colab",],
    metrics: { accuracy: 0, records: "8,800+" },
    github: "https://github.com/candobettercode/WORK.git",
    demo: "https://drive.google.com/file/d/157FvnB3qIyD7eyf7TxGnIAT28Mm2WdlU/view?usp=drive_link",
    details: {
      overview:
        "Developed an end-to-end Netflix content analytics pipeline using a dataset containing 8,800+ movies and TV shows. Performed extensive data cleaning, missing value treatment, duplicate validation, feature engineering, and outlier analysis on content duration and release trends. Built advanced visual dashboards including pie charts, heatmaps, scatter plots, pair plots, box plots, choropleth maps, and genre analysis to study global content distribution, ratings, release patterns, regional preferences, top actors/directors, and audience targeting strategies. Generated actionable business insights and recommendations focused on content localization, subscriber retention, churn reduction, genre diversification, and personalized recommendation systems.",
      results: [
        "Analyzed 8,800+ Netflix movies and TV shows across 120+ countries",
        "Performed detailed EDA with 20+ advanced visualizations and trend analyses",
        "Identified dominant genres, regional content preferences, and rating distributions",
        "Built global Netflix content distribution maps using Plotly choropleth visualization",
        "Conducted outlier analysis on movie and TV show durations using IQR method",
        "Generated business recommendations for churn reduction and content personalization"
      ],
    },
  },
  {
    id: 2,
    title: "News Sentiment Analysis",
    description:
      "Real-time sentiment analysis of news articles using NLP and BERT. Processes 120K+ articles daily with 89% accuracy.",
    category: "NLP",
    secondaryCategory: "ML/DL",
    image: "news_sentiment.png",
    tech: ["Python", "Flask","Scikit-learn","TensorFlow","NLTK","Pandas","NumPy","TF-IDF Vectorizer","Logistic Regression","SVM","Naive Bayes","HTML","CSS","Jupyter Notebook","Pickle","Git"],
    metrics: { accuracy: 89, records: "120K+" },
    github: "https://github.com/candobettercode/news_sentiment_classifier.git",
    demo: "#",
    showDemo: false,
    details: {
      overview:
        "Developed a Flask-based web app that integrates Google News API, sentiment analysis (TextBlob), and translation features to generate multilingual, sentiment-tagged news reports with date filters. Implemented a Random Forest-based news classification module using joblib and a custom vectorizer to categorize user input into predefined domains such as business, sports, world, and science.",
      results: [
        "Built and deployed a Flask-based fake news detection system using multiple ML/DL models including Logistic Regression, SVM, Naive Bayes, XGBoost, and Neural Networks",
        "Implemented NLP preprocessing and TF-IDF vectorization pipeline for accurate real-time news classification",
        "Integrated serialized .pkl models with interactive frontend templates for seamless prediction and model comparison",
        "Performed experimentation and evaluation using Jupyter notebooks to optimize fake news classification performance",
      ],
    },
  },
  {
    id: 3,
    title: "Target E-Commerce SQL Case Study",
    description:
      "Built an end-to-end SQL analytics project on Target Brazil e-commerce data to analyze customer behavior, sales trends, delivery performance, payment patterns, and regional order distribution using advanced SQL queries and business intelligence techniques.",
    category: "EDA",
    secondaryCategory: "",
    image: "ecomm.png",
    tech: ["SQL","BigQuery","Data Analysis","CTE","Window Functions","Joins","Aggregate Functions","Date Functions","Business Intelligence"],
    metrics: { accuracy: 0, records: "76K+" },
    github: "https://github.com/candobettercode/WORK.git",
    demo: "https://drive.google.com/file/d/1XtBqcUTC5xyEPpq60eCSX1AU55yDhBfp/view?usp=drive_link",
    details: {
      overview:
        "Developed a comprehensive SQL-based business analytics solution using Target Brazil e-commerce datasets containing customers, orders, payments, and delivery information. Performed exploratory data analysis, customer segmentation by state and city, seasonal order trend analysis, payment behavior analysis, freight cost evaluation, and delivery performance tracking. Utilized advanced SQL concepts including CTEs, joins, window functions, timestamp/date functions, aggregations, and conditional logic to generate actionable business insights on customer ordering patterns, regional sales performance, logistics efficiency, and payment preferences across Brazil.",
      results: [
        "Analyzed e-commerce data from 27 states and 4119 cities across Brazil",
        "Identified 136.98% growth in order value from 2017 to 2018",
        "Discovered peak order activity during afternoon hours and seasonal monthly trends",
        "Evaluated delivery efficiency and freight performance across all states",
        "Analyzed 99K+ orders and customer payment behaviors",
        "Found credit card as the dominant payment method with 76K+ transactions",
        "Generated insights on customer distribution, delivery optimization, and regional sales trends",
        "Performed advanced SQL analysis using CTEs, joins, window functions, and timestamp operations"
      ],
    },
  },
  {
    id: 4,
    title: "Phishing URL Detection",
    description:
      "AI system identifying malicious URLs with 91% accuracy. Analyzed URL patterns and domain features.",
    category: "ML/DL",
    secondaryCategory: "",
    image: "url_phishing.png",
    tech: ["Python", "Random Forest", "Feature Engineering", "Pandas", "NumPy", "Scikit-learn", "Git"],
    metrics: { accuracy: 91, records: "100K+" },
    github: "",
    demo: "",
    showDemo: false,
    details: {
      overview:
        "Developed a phishing website detection model using five ML algorithms (Random Forest, Decision Tree, SVM, XGBoost, AdaBoost and achieving 98% accuracy on benchmark datasets. Performed feature engineering on 23 URL attributes and selected top 10 features; applied robust data preprocessing with Pandas to enhance model performance and decision accuracy.",
      results: [
        "91% accuracy on 100K URL corpus",
        "False-positive rate under 1.2%",
      ],
    },
  },
  {
    id: 5,
    title: "Customer Segmentation using K-Means Clustering",
    description:
      "Built a machine learning-based customer segmentation system using K-Means clustering and RFM analysis on online retail transaction data to identify customer behavior patterns and business-driven customer groups.",
    category: "EDA",
    secondaryCategory: "ML/DL",
    image: "customer_segmentation.png",
    tech: ["Python","Pandas","NumPy","Scikit-learn","Matplotlib","Seaborn","KMeans","StandardScaler","Silhouette Score","Google Colab"],
    metrics: { accuracy: 0, records: "525k+" },
    github: "https://github.com/candobettercode/WORK.git",
    demo: "https://drive.google.com/file/d/1TtHftR7IYs0wwZrpAWC9KGxgcA20vBfa/view?usp=sharing",
    details: {
      overview:
        "Performed extensive data cleaning using regex validation, null handling, outlier detection, and feature engineering. Built RFM-based features (Recency, Frequency, Monetary Value), applied standard scaling, and implemented K-Means clustering with silhouette score optimization. Designed advanced visual analytics including histograms, boxplots, violin plots, and 3D cluster visualizations to analyze customer purchasing behavior and segment customers into actionable business groups such as Retain, Re-Engage, Reward, Nurture, Pamper, Upsell, and Delight",
      results: [
        "Processed and analyzed 525K+ retail transaction records",
        "Created 7 business-oriented customer segments using K-Means clustering",
        "Applied RFM analysis for customer behavior modeling",
        "Optimized clusters using Elbow Method and Silhouette Score analysis",
        "Detected and handled monetary and frequency outliers for improved clustering accuracy",
        "Built interactive visualizations including 3D cluster plots and violin distributions"
      ],
    },
  },
  {
    id: 6,
    title: "PE Header Malware Detection",
    description:
      "Built an AI-powered Windows malware detection system using PE header analysis and ML/DL models.",
    category: "ML/DL",
    secondaryCategory: "DEVOPS",
    image: "malware.png",
    tech: ["Python", "TensorFlow", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Pefile", "Git", "Docker Compose"],
    metrics: { accuracy: 99.5, records: "140K+" },
    github: "https://github.com/candobettercode/pe_malware_detection_sys.git",
    demo: "#",
    showDemo: false,
    details: {
      overview:
        "Built an interactive Python-based GUI for real-time .exe file scanning, multi-model performance comparison, visualization dashboards (ROC Curve, Confusion Matrix, Feature Importance), and automated PDF report generation. Designed a complete end-to-end malware analysis pipeline with PE feature extraction, model training, metrics tracking using JSON, and predictive analysis for detecting malicious and benign executable files.",
      results: [
        "99.5% accuracy on 140K+ samples",
        "Real-time malware detection with sub-second inference",
      ],
    },
  },
  {
    id: 7,
    title: "Deploy Website on AWS (S3 + CI/CD)",
    description:
      "Built and deployed a static website using AWS S3 with automated CI/CD pipeline via GitHub Actions.",
    category: "CLOUD",
    secondaryCategory: "DEVOPS",
    image: "website.png",
    tech: ["HTML", "CSS", "JavaScript", "AWS S3", "IAM", "GitHub Actions", "Git", "CI/CD"],
    metrics: { accuracy: 0, records: 0 },
    github: "https://github.com/candobettercode/deploy-website-aws.git",
    demo: "#",
    showDemo: false,
    details: {
      overview:
        "Developed a static website with a complete DevOps pipeline using GitHub Actions for continuous deployment to AWS S3. Configured IAM roles and permissions for secure access, and automated file sync from GitHub repository to S3 bucket on every push to main branch. Structured the project with modular HTML, CSS, JavaScript, and asset management for clean deployment workflow.",
      results: [
        "Automated CI/CD pipeline using GitHub Actions",
        "Deployed and hosted static website on AWS S3 with public access",
      ],
    },
  },
  {
    id: 8,
    title: "End-to-End MLOps NLP Movie Review Sentiment System on AWS EKS",
    description:
      "Built and deployed a complete NLP-based movie review sentiment analysis system with full MLOps lifecycle including CI/CD, Docker, MLflow, DVC, and Kubernetes on AWS EKS.",
    category: "NLP",
    secondaryCategory: "CLOUD",
    image: "kubernetes.png",
    tech: ["Python","Flask","Scikit-learn","NLTK","Pandas","MLflow","DVC","DagsHub","Docker","GitHub Actions","AWS ECR","AWS EKS","Kubernetes", "AWS CLI","Prometheus"],
    metrics: { accuracy: 64, records: "10K+" },
    github: "https://github.com/candobettercode/mlops-aws-nlp-project.git",
    demo: "#",
    showDemo: false,
    details: {
      overview:
        "Built a production-grade end-to-end MLOps pipeline for sentiment analysis of movie reviews. The project covers data versioning using DVC, experiment tracking with MLflow and DagsHub, model training and evaluation using Scikit-learn, and packaging via Flask API. The model is containerized using Docker and deployed through a CI/CD pipeline using GitHub Actions. The final deployment is hosted on AWS EKS with images stored in AWS ECR, and includes monitoring-ready metrics via Prometheus.",
      results: [
        "Deployed scalable containerized application on AWS EKS",
        "CI/CD pipeline for automated build, test, and deployment",
        "Experiment tracking and model registry using MLflow + DagsHub",
      ],
    },
  },
  {
    id: 9,
    title: "A/B Testing Efficiency Analysis: Facebook vs Google Ads",
    description:
      "Performed A/B testing analysis to compare advertising efficiency between Facebook Ads and Google Ads using campaign performance data, statistical testing, and KPI evaluation.",
    category: "EDA",
    secondaryCategory: "",
    image: "abtest.png",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "Statistical Testing", "A/B Testing", "Data Visualization"],
    metrics: { accuracy: 0, records: "365" },
    github: "https://github.com/candobettercode/WORK/blob/main/AB%20Testing-Efficiency-Analysis-Facebook-vs.-AdWords-Campaigns.ipynb",
    demo: "#",
    showDemo: false,
    details: {
      overview:
        "Conducted a comprehensive A/B testing analysis to evaluate the performance of Facebook Ads versus Google Ads (AdWords). The project involved cleaning campaign-level data, analyzing key metrics such as impressions, clicks, conversions, and cost per acquisition, and applying statistical hypothesis testing to determine the more efficient advertising platform. Visualizations were used to compare performance trends and validate marketing decisions.",
      results: [
        "Identified statistically significant differences in campaign performance between platforms",
        "Enabled data-driven recommendation for optimal ad spend allocation",
      ],
    },
  },
  {
    id: 10,
    title: "Face Mask Detection using CNN",
    description:
      "Built a deep learning-based image classification system to detect whether a person is wearing a face mask or not using Convolutional Neural Networks (CNN). The project processes image datasets, trains a CNN model, and performs real-time mask detection predictions.",
    category: "ML/DL",
    image: "facemask.png",
    tech: ["Python", "TensorFlow / Keras", "CNN", "Image Processing", "Git", "Numpy","Data Augmentation"],
    metrics: { accuracy: 92.72, records: "7500+" },
    github: "https://github.com/candobettercode/WORK/blob/main/DL-Face%20mask%20detection%20using%20CNN.ipynb",
    demo: "#",
    showDemo: false,
    details: {
      overview:
        "Developed a CNN-based image classification model to detect face masks in images. The project involved preprocessing a dataset of masked and unmasked face images, applying data augmentation techniques, and training a deep learning model using TensorFlow/Keras. The final model achieved high accuracy in distinguishing between masked and unmasked faces, demonstrating the effectiveness of CNNs for image classification tasks.",
      results: [
        "High-accuracy binary classification of masked vs unmasked faces",
        "Face mask detection using CNN-based model inference",
      ],
    },
  },
  {
    id: 11,
    title: "Kidney Tumor Detection using Deep Learning",
    description:
      "Developed an AI-powered kidney tumor detection system using CNN-based deep learning models for medical image classification.",
    category: "ML/DL",
    secondaryCategory: "CLOUD",
    image: "kidney.png",
    tech: [  "Python","TensorFlow","Keras","Flask","NumPy","Pandas","TailwindCSS","Docker","GitHub Actions", "EC2", "ECR", "MLflow", "DVC"],
    metrics: { accuracy: 93.58, records: "350+" },
    github: "https://github.com/candobettercode/Kidney-Disease-Classification-DLproject.git",
    demo: "#",
    showDemo: false,
    details: {
      overview:
        "Built an end-to-end deep learning web application for kidney tumor classification from CT/MRI scan images. Designed a complete ML pipeline including data ingestion, preprocessing, model training, evaluation, and prediction serving using Flask APIs. Integrated real-time image upload, confidence score prediction, responsive UI, Docker containerization, CI/CD automation using GitHub Actions, and AWS deployment with ECR/ECS. Added experiment tracking and pipeline versioning using MLflow and DVC for reproducibility and scalable deployment.",
      results: [
        "Achieved 93.58% accuracy in kidney tumor classification on medical imaging dataset",
        "Automated CI/CD deployment pipeline using Docker & GitHub Actions",
        "Production-ready Flask web application with responsive UI",
      ],
    },
  },
  {
    id: 12,
    title: "Gemstone Price Prediction using Machine Learning",
    description:
      "Built an end-to-end machine learning system for gemstone price prediction using multiple regression algorithms, feature engineering, and model evaluation techniques.",
    category: "ML/DL",
    secondaryCategory: "EDA",
    image: "gems.png",
    tech: ["Python","Scikit-learn", "XGBoost", "CatBoost", "LightGBM","Pandas", "NumPy","Matplotlib", "Seaborn", "Flask", "Docker", "Git"],
    metrics: { accuracy: 99.75, records: "300K+" },
    github: "https://github.com/candobettercode/gems_prediction-ml-project.git",
    demo: "#",
    showDemo: false,
    details: {
      overview:
        "Developed a complete ML pipeline for gemstone price prediction involving data preprocessing, exploratory data analysis, feature engineering, model training, and performance comparison across multiple regression algorithms. Implemented Linear Regression, Ridge, Lasso, Random Forest, KNN, Gradient Boosting, XGBoost, CatBoost, LightGBM, and AdaBoost models to evaluate predictive accuracy. Built a deployment-ready architecture with modular coding practices, logging, exception handling, and web-based prediction support.",
      results: [
        "Achieved 98.5% Test R² Score using Random Forest Regressor",
        "Compared 10+ regression models for optimized gemstone price prediction",
      ],
    },
  },
  {
    id: 13,
    title: "Vehicle Insurance ML Pipeline",
    description:
      "Built an end-to-end MLOps-based vehicle insurance prediction system with automated training, evaluation, cloud deployment, and CI/CD integration using AWS services.",
    category: "CLOUD",
    secondaryCategory: "DEVOPS",
    image: "vehicle.png",
    tech: ["Python","Scikit-learn","Pandas","NumPy","MongoDB Atlas","AWS S3","AWS EC2","AWS ECR","Docker","GitHub Actions","Flask","FastAPI","Git"],
    metrics: { accuracy: 95.27, records: "381K+" },
    github: "https://github.com/candobettercode/vehicle_insurance_ml_project.git",
    demo: "#",
    showDemo: false,
    details: {
      overview:
        "Developed a production-grade machine learning pipeline for vehicle insurance prediction with modular components for data ingestion, validation, transformation, model training, evaluation, and deployment. Integrated MongoDB Atlas for data storage, AWS S3 for model registry, Docker for containerization, and GitHub Actions for automated CI/CD deployment on AWS EC2. Built a web-based prediction interface with automated model comparison and cloud-hosted inference pipeline.",
      results: [
        "Automated end-to-end ML workflow with CI/CD pipeline",
        "Cloud deployment using AWS EC2, S3, and ECR",
        "Real-time insurance prediction through web interface",
        "Production-ready modular MLOps architecture",
      ],
    },
  },
  {
    id: 14,
    title: "Loan Status Prediction System",
    description:
      "Built a machine learning-powered loan approval prediction system using data preprocessing, feature engineering, and classification models.",
    category: "ML/DL",
    secondaryCategory: "DEVOPS",
    image: "loan.png",
    tech: ["Python","Scikit-learn","Pandas", "NumPy", "Flask", "Matplotlib","Seaborn","Git","Docker"],
    metrics: { accuracy: 82, records: "1000+" },
    github: "https://github.com/candobettercode/loan_app.git",
    demo: "#",
    showDemo: false,
    details: {
      overview:
        "Built an interactive Flask-based web application for real-time loan approval prediction using customer financial and demographic data. Designed a complete end-to-end machine learning pipeline including data preprocessing, exploratory data analysis (EDA), feature engineering, model training, evaluation, and deployment with automated prediction workflows and visualization dashboards.",
      results: [
        "Achieved 82% prediction accuracy on loan approval dataset",
        "Real-time loan eligibility prediction through web interface",
        "Automated preprocessing and prediction pipeline",
        "Interactive analytics and visualization dashboard"
      ],
    },
  },
  {
    id: 15,
    title: "Spam Detection using Machine Learning",
    description:
      "Built an end-to-end spam detection system using multiple machine learning algorithms, DVC pipelines, experiment tracking, and AWS S3 integration.",
    category: "NLP",
    secondaryCategory: "CLOUD",
    image: "spam.png",
    tech: [ "Python","Scikit-learn","XGBoost", "DVC", "dvclive","AWS S3","Git","Docker"],
    metrics: { accuracy: 97, records: "5572" },
    github: "https://github.com/candobettercode/ml_pipeline_dvc.git",
    demo: "#",
    showDemo: false,
    details: {
      overview:
        "Developed a modular spam detection pipeline for classifying messages as spam or not spam using multiple machine learning models including SVC, KNN, Naive Bayes, Decision Tree, Logistic Regression, Random Forest, AdaBoost, Bagging Classifier, Extra Trees Classifier, Gradient Boosting, and XGBoost. Implemented end-to-end MLOps workflows including data preprocessing, feature engineering, model training, experiment tracking with dvclive, DVC pipeline automation, parameter management using params.yaml, and remote artifact storage using AWS S3 for reproducibility and scalability.",
      results: [
        "Built a machine learning pipeline using Random Forest Regressor (95% R2) with DVC for experiment tracking and automation.",
        "Developed modular, parameterized pipelines (dvc.yaml, params.yaml) with dvclive for metrics logging.",
        "Integrated AWS S3 as remote DVC storage for versioning datasets, models, and artifacts.",
        "Leveraged GitHub for source control and MLOps workflows (dvc exp, dvc repro).",
      ],
    },
  },
  {
    id: 16,
    title: "AI-Based Eye Disease Detection",
    description:
      "Built a deep learning-powered medical image classification system for detecting Cataract, Diabetic Retinopathy, Glaucoma, and Normal eye conditions using ML/DL models and transfer learning techniques.",
    category: "ML/DL",
    secondaryCategory: "",
    image: "eye.png",
    tech: ["Python","TensorFlow", "Keras", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "CNN", "VGG16","DenseNet121","Xception","Git","Docker"],
    metrics: { accuracy: 94, records: "4000+" },
    github: "https://github.com/candobettercode/eye_prediction_deep_learning.git",
    demo: "https://youtu.be/p4HC5rr73qc",
    details: {
      overview:
        "Developed an AI-powered eye disease detection system using retinal/fundus eye images to classify Cataract, Diabetic Retinopathy, Glaucoma, and Normal eye conditions. Implemented and compared multiple Machine Learning and Deep Learning models including Baseline CNN, VGG16, DenseNet121, Xception, Random Forest, and SVM. Designed a complete image preprocessing and classification pipeline with transfer learning, feature extraction, model evaluation, visualization dashboards (Accuracy/Loss Curves, Confusion Matrix), and automated prediction capabilities for medical image analysis.",
      results: [
        "High-accuracy multi-class eye disease classification",
        "Compared ML and transfer learning models for performance optimization",
        "Automated retinal disease prediction using deep learning",
        "Improved feature extraction using pretrained CNN architectures",
      ],
    },
  },
];

const ProjectCard = ({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className={`group flex flex-col rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden ${
        isExpanded ? "xl:col-span-2" : ""
      }`}
    >
      {/* Image Banner */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={getImage(project.image) || project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        {project.metrics.accuracy > 0 && (
          <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border">
            <span className="text-foreground text-xs font-medium">
              {project.metrics.accuracy}% Accuracy
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3 gap-3">
          <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
          <div className="flex flex-wrap justify-end gap-1.5 shrink-0">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded">
              {project.category}
            </span>
            {project.secondaryCategory && (
              <span className="text-[10px] uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded">
                {project.secondaryCategory}
              </span>
            )}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 bg-secondary/10 text-secondary rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expanded details */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-4 text-sm">
                <p className="text-muted-foreground leading-relaxed">
                  {project.details.overview}
                </p>

                <DetailBlock title="Results" items={project.details.results} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle */}
        <button
          onClick={onToggle}
          className="self-start text-xs font-medium text-secondary inline-flex items-center gap-1 mb-4 hover:underline"
        >
          {isExpanded ? "Show Less" : "View Details"}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <Button asChild variant="outline" size="sm" className="flex-1 gap-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
          {project.showDemo !== false && (
            <Button asChild size="sm" className="flex-1 gap-2 bg-secondary hover:bg-secondary/90">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const DetailBlock = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
      {title}
    </h4>
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="text-sm text-muted-foreground flex gap-2 leading-relaxed"
        >
          <span className="text-secondary mt-1.5 w-1 h-1 rounded-full bg-secondary shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") {
      return true;
    }

    return (
      project.category === activeFilter ||
      project.secondaryCategory === activeFilter
    );
  });

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world data science projects showcasing ML expertise and problem-solving skills
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setExpandedId(null);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-secondary text-white shadow-lg shadow-secondary/25"
                  : "bg-card hover:bg-secondary/10 border border-border"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isExpanded={expandedId === project.id}
                onToggle={() =>
                  setExpandedId(expandedId === project.id ? null : project.id)
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
