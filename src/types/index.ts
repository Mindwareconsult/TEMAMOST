export type PageRoute = 'home' | 'about' | 'services' | 'projects' | 'expertise' | 'insights' | 'contact';

export type ProjectCategory = 
  | 'Residential'
  | 'Commercial'
  | 'Industrial'
  | 'Buildings under construction'
  | 'Structural Works'
  | 'Sub-Structural / Foundation'
  | 'Steel Works'
  | 'Civil & Infrastructure';

export interface ProjectImageMeta {
  src: string;
  caption: string;
  alt: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  location?: string;
  year?: string;
  client?: string;
  scope?: string;
  status: 'Completed' | 'Ongoing' | 'Under Construction' | 'Structural Phase' | 'Foundation Phase' | string;
  description: string;
  challenges?: string;
  solution?: string;
  results?: string;
  keyMetrics?: { label: string; value: string }[];
  featuredImage: string;
  coverImage: string;
  galleryImages: string[];
  galleryItems?: ProjectImageMeta[];
  featured: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  capabilities: string[];
  deliverables: string[];
  ourApproach: string;
  clientBenefits: string[];
  sectorFocus: string[];
  image: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  role: string;
  bio: string;
  image: string;
  specialization: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'Construction' | 'Engineering' | 'Project Management' | 'Industry Trends' | 'Cost Estimation';
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
  image: string;
  keyTakeaways: string[];
}

export interface TestimonialItem {
  quote: string;
  clientName: string;
  position: string;
  organization: string;
  location: string;
  projectType: string;
}

export interface CertificateCredential {
  id: string;
  title: string;
  issuingOrganization: string;
  regNumber: string;
  dateIssued: string;
  verifiedCompany: string;
  type: string;
  image: string;
  thumbnail?: string;
  badge: string;
  description: string;
  featuredOnHome?: boolean;
}

export interface ClientOrganization {
  id: string;
  name: string;
  category: 'Residential Estate & Development' | 'Property Development & Real Estate' | 'Institutional & Religious Architecture' | 'Corporate & Commercial Client';
  logo: string;
  altText: string;
  regNumber?: string;
  website?: string;
  relationship: string;
  serviceScope: string[];
  featuredOnHome: boolean;
  featuredOnAbout?: boolean;
  featuredOnProjects?: boolean;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  estimatedBudget: string;
  expectedStartDate: string;
  projectDescription: string;
  needArchitecturalReview: boolean;
}
