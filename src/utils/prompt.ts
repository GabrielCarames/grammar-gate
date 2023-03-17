const createPrompt = (textToCheck: string) => {
  const prompt = `
Necesito que hagas de corrector gramatical de ingles. Te daré un texto en ingles y tendras que corregirlo indicando que palabra/s estan mal, como deberian ser corregidas, y él por que.
Mas allá del significado correcto del texto, tambien necesitaría que indiques donde podrían ir comas, puntos, etc.

Debes responder de esta manera:
Texto original: "texto ingresado"
Texto a corregir: "lista de palabras u oraciones a corregir"
Explicación del texto a corregir: "explicación de cada una de las palabras u oraciones de la lista anterior"
Texto corregido: "texto corregido"

Este es el texto para corregir: ${textToCheck}
`
  return prompt
}

export default createPrompt
