// Shared content types for slide decks and quizzes across all subjects.

export interface SlidePoint {
  icon: string;
  head: string;
  body: string;
}

export type SlideDiagram = "latlong" | "timezone" | "continents";

export interface Slide {
  /** Small eyebrow label, e.g. "アジア州 ① 地形" */
  kicker: string;
  title: string;
  /** Optional lead paragraph shown under the title (usually only on the cover slide). */
  lead?: string;
  /** Optional big emoji shown on cover slides. */
  emoji?: string;
  /** Optional bullet-style point cards. */
  points?: SlidePoint[];
  /** Optional special built-in diagram to render instead of / alongside points. */
  diagram?: SlideDiagram;
}

export interface QuizQuestion {
  q: string;
  choices: string[];
  /** Index into `choices` of the correct answer. */
  answer: number;
  explain: string;
}
