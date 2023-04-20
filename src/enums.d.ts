export enum HeaderTitle {
  GRAMMAR_CHECKER = "Grammar Checker",
  TEXT_SUMMARIZER = "Text Summarizer",
  TRANSLATOR = "Translator"
}

export enum HeaderDescription {
  GRAMMAR_CHECKER = "Write your text and let us check your grammar!",
  TEXT_SUMMARIZER = "Summarize any text in a few seconds!",
  TRANSLATOR = "Choose a language and translate your text!"
}

export const AUTO_LANGUAGE = "auto"

export enum Languages {
  ENGLISH = "en",
  SPANISH = "es",
  FRENCH = "fr",
  GERMAN = "de",
  ITALIAN = "it",
  PORTUGUESE = "pt",
  RUSSIAN = "ru",
  CHINESE = "zh",
  JAPANESE = "ja",
  KOREAN = "ko"
}

export enum ResponseProperties {
  CORRECTIONS = "corrections",
  SUMMARY = "summary",
  TRANSLATION = "translation"
}
