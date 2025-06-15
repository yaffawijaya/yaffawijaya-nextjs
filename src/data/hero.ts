// This is the new single source of truth for your hero section content.

export interface HeroData {
  name: string;
  role: string;
  description: string;
}

export const heroData: HeroData = {
  name: "Yaffazka Afazillah Wijaya",
  role: "Data Scientist & AI Engineer",
  description: "I build data-driven applications, from analyzing production data at Astra Honda to developing advanced GraphRAG systems for health analysis."
};
