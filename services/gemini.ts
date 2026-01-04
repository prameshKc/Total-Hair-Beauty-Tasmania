
import { GoogleGenAI } from "@google/genai";

export const getBeautyAdvice = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: `You are the Executive Beauty Concierge for Total Hair & Beauty Tasmania (Derwent Park). 
        Your persona is sophisticated, knowledgeable, and helpful. 
        Provide advice on professional hair/beauty products and current industry trends.
        If the user asks about prices or specific stock, inform them that as a wholesale-only supplier, 
        current pricing is available via professional login or by calling the Derwent Park showroom at (03) 6273 7323.
        Always list source URLs if you use Google Search to find latest trends.`,
      },
    });

    const text = response.text || "I'm here to assist with your professional beauty needs.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    return { text, sources };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { 
      text: "I'm currently updating my catalog. Please contact our showroom directly at (03) 6273 7323 for immediate assistance.",
      sources: []
    };
  }
};
