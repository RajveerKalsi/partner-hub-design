export interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
  details: {
    overview: string;
    features: string[];
    brands: string[];
    images: string[];
  };
}
