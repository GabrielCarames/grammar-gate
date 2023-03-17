const createPrompt = (textToCheck: string) => {
  const prompt = `
    Necesito que hagas de corrector gramatical de ingles. Te daré un texto en ingles y tendras que corregirlo indicando que palabra/s estan mal, como deberian ser corregidas, y él por que.
    Mas allá del significado correcto del texto, tambien necesitaría que indiques donde podrían ir comas, puntos, etc.

    Necesito que SIEMPRE y SOLO me respondas con un JSON como vas a ver en el ejemplo de abajo. Nunca me respondas con otra cosa ni me expliques nada sin que yo te lo pida
    Tambien recuerda agregar las comas luego de cada Object, y no agregar una coma al final del Array. 

    Fijate en este ejemplo de como deberias devolverme la respuesta:

    {
      corrections: [
        {
            "id": "id unica generada por ti",
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
      textCorrected: "texto completo ya corregido con las correcciones que hiciste"
    }

    Este es el texto para corregir: ${textToCheck}
  `
  return prompt
}

export default createPrompt
