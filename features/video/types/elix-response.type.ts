export interface ElixResponse {
  data: ElixDataItem[];
  total: number;
}

export interface ElixDataItem {
  definition: DefinitionOrSignBase;
  signs: DefinitionOrSignBase[];
}

export interface DefinitionOrSignBase {
  word_id: number;
  word: string;
  typology: string;
  type: "Signe" | "Définition";
  image: string | null;
  source: string | null;
  "@version": string;
  real_word_id: number;
  video_order: number | null;
  suggest: Suggest[];
  contributor: string | null;
  path: string | null;
  label: string;
  meaning: string;
  meaning_order: number;
  "@timestamp": string;
  id: number | null;
}

interface Suggest {
  weight: number;
  input: string;
}
