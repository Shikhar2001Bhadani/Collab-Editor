import asyncHandler from 'express-async-handler';
import { getGeminiResponse } from '../services/aiService.js';

const checkGrammar = asyncHandler(async (req, res) => {
  const { text } = req.body;
  if (!text) {
    res.status(400);
    throw new Error('Text is required for grammar check');
  }
  const prompt = `Please correct the grammar and spelling of the following text. Only return the corrected text, without any explanation or preamble:\n\n"${text}"`;
  const result = await getGeminiResponse(prompt);
  res.json({ suggestion: result });
});

const enhanceText = asyncHandler(async (req, res) => {
  const { text, tone } = req.body;
  if (!text) {
    res.status(400);
    throw new Error('Text is required for enhancement');
  }
  const prompt = `Rewrite the following text to be more clear, concise, and engaging, adopting a ${tone || 'professional'} tone. Only return the enhanced text:\n\n"${text}"`;
  const result = await getGeminiResponse(prompt);
  res.json({ suggestion: result });
});

const summarizeText = asyncHandler(async (req, res) => {
  const { text } = req.body;
  if (!text) {
    res.status(400);
    throw new Error('Text is required for summarization');
  }
  const prompt = `Summarize the following text into a few key points. Return only the summary:\n\n"${text}"`;
  const result = await getGeminiResponse(prompt);
  res.json({ summary: result });
});

const autoCompleteText = asyncHandler(async (req, res) => {
  try {
    console.log('Auto-complete request received:', { 
      body: req.body,
      params: req.params,
      query: req.query 
    });

    const { text, prefix, context, fullParagraph } = req.body;
    
    if (!text) {
      console.error('No text provided for auto-completion');
      return res.status(400).json({ 
        success: false,
        message: 'Partial text is required for auto-completion' 
      });
    }

    // Clean and prepare the inputs
    const cleanWord = (text || '').toString().trim();
    const cleanPrefix = (prefix || '').toString().trim();
    const cleanContext = (context || '').toString().trim();
    
    if (!cleanWord) {
      console.error('Empty text after trimming');
      return res.status(400).json({
        success: false,
        message: 'Text cannot be empty after trimming'
      });
    }

    // Build a precise prompt for completion
    const prompt = `Complete the following sentence naturally and concisely. 
    
    IMPORTANT RULES:
    1. DO NOT repeat any part of the existing text
    2. ONLY generate new text that comes after the existing text
    3. Keep it brief (5-10 words maximum)
    4. Do not use phrases like "May I" or "Can I" at the beginning
    5. Make it sound natural and conversational
    
    Existing text: "${fullParagraph}"
    
    Complete the sentence naturally without repeating anything:`;
    
    console.log('Sending focused prompt to Gemini:', prompt);
    
    const result = await getGeminiResponse(prompt);
    
    if (!result || typeof result !== 'string') {
      throw new Error('Invalid response from AI service');
    }

    const completion = result.trim();
    console.log('Received completion:', completion);
    
    // Return a consistent response format
    res.status(200).json({ 
      success: true,
      completion: completion,
      originalText: cleanWord // Include the original text for reference
    });
    
  } catch (error) {
    console.error('Error in autoCompleteText:', {
      message: error.message,
      stack: error.stack,
      response: error.response?.data
    });
    
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to generate completion',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

export { checkGrammar, enhanceText, summarizeText, autoCompleteText };