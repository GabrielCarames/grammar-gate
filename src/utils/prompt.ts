const createPrompt = (textToCheck: string) => {
  const prompt = `
Necesito que hagas de corrector gramatical de ingles. Te daré un texto en ingles y tendras que corregirlo indicando que palabra/s estan mal, como deberian ser corregidas, y él por que.
Mas allá del significado correcto del texto, tambien necesitaría que indiques donde podrían ir comas, puntos, etc.

Necesito que me devuelvas un Array de JavaScript, en donde cada punto sea un Object. Como este ejemplo:
[
   {
      "id": "id unica generada por ti",
      "type": "[tipo de correción] mistake",
      "explanation": "explanation",
      "result": ["palabra u oración que tengas que corregir", "palabra u oración ya corregida"]
   },
 {
      "id": "id unica generada por ti",
      "type": "[tipo de correción] mistake",
      "explanation": "explanation",
      "result": ["palabra u oración que tengas que corregir", "palabra u oración ya corregida"]
   }
]

Este es el texto para corregir: ${textToCheck}
`
  return prompt
}

export default createPrompt
