export interface QuestionInterface {
    id?: number,
    question: string,
    answer: string,
    additionalAnswer?: string,
    img?: string,
    linkData?: {
      link: string,
      // тут надо подумать, потому что хочется пробрасывать валидный tsx
      text: any
    },

} 