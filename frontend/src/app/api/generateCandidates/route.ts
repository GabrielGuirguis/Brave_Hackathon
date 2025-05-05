import { NextRequest, NextResponse } from "next/server";
import { openaiClient } from "@/lib/openaiClient";
import { zodResponseFormat } from "openai/helpers/zod";
import { candidateListSchema } from "@/types/candidateListSchema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      jobTitle, 
      jobDescription, 
      jobLocation, 
      jobIndustry, 
      jobSkills, 
      jobResponsibilities, 
      jobRequirements 
    } = body;

    const completion = await openaiClient.beta.chat.completions.parse({
      model: "gpt-4o-mini",
      messages: [
        { 
          role: "system", 
          content: "You are generating sample LinkedIn, Github and Resume profiles for candidates who are applying to internship positions at a company, depending on the provided job's description. Try to make sure the data is as organic as possible, meaning sometimes the resume profile will be unavailable, and depending on the job, applicants may or may not have a github profile. Try to mimic the quality of information that would be found by a bot scraping profiles from linkedin, github, or publicly available resumes of university and college students." 
        },
        { 
          role: "user", 
          content: `Generate 5 profiles for the job based on the following attributes:
            Job Title: "${jobTitle}"
            Job Description: "${jobDescription}"
            Job Location: "${jobLocation}"
            Job Industry: "${jobIndustry}"
            Job Skills: ${JSON.stringify(jobSkills)}
            Job Responsibilities: ${JSON.stringify(jobResponsibilities)}
            Job Requirements: ${JSON.stringify(jobRequirements)}
          `
        },
      ],
      response_format: zodResponseFormat(candidateListSchema, "candidateList"),
    });

    return NextResponse.json(completion.choices[0].message.content);
  } catch (error) {
    console.error('Error generating candidates:', error);
    return NextResponse.json(
      { error: 'Failed to generate candidates' },
      { status: 500 }
    );
  }
} 