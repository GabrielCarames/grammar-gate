export const createFirstPrompt = (textToCheck: string) => {
  const firstPrompt = `
    Necesito que hagas de corrector gramatical de inglés. Te daré un texto en inglés y tendras que corregirlo indicando que palabra/s están mal, como deberían ser corregidas, y el por qué.
    Mas allá del significado correcto del texto, también necesitaría que indiques donde podrían ir comas, puntos, etc.
    Tu respuesta siempre tiene que ser en un formato JSON válido y en inglés. Agrega las comillas dobles a cada clave de "corrections" y "correctedText". Nunca me respondas con otra frase extra, ni me expliques nada sin que yo te lo pida.

    Fijate en este ejemplo de como debes responderme en formato JSON: 
    {
      "corrections": 
        [
          {
            "id": "id única generada por ti",
            "type": "tipo de correción mistake",
            "explanation": "explanation",
            "result": ["palabra u oración que tengas que corregir", "palabra u oración ya corregida"]
          },
          {
            "id": "id unica generada por ti",
            "type": "tipo de correción mistake",
            "explanation": "explanation",
            "result": ["palabra u oración que tengas que corregir", "palabra u oración ya corregida"]
          }
        ],
        "correctedText": "texto completo ya corregido con las correcciones que hiciste"
    }

    Este es el texto para corregir: ${textToCheck}
  `
  return firstPrompt
}

export const createConsecutivePrompt = (textToCheck: string, previousCorrectedText: string) => {
  const consecutivePrompt = `
    Ahora corrige este nuevo texto pero ten en cuenta que te voy a dar el texto anterior que corregiste, por lo que si este nuevo texto ya contiene el texto corregido, no lo corrigas de nuevo. 
    Tu respuesta siempre tiene que ser en un formato JSON válido y en inglés. Agrega las comillas dobles a cada clave de "corrections" y "correctedText". Nunca me respondas con otra frase extra, ni me expliques nada sin que yo te lo pida.

    Texto que corregiste en la anterior petición: ${previousCorrectedText}
    Nuevo texto para corregir: ${textToCheck}
  `
  return consecutivePrompt
}
