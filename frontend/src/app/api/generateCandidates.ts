import { openaiClient } from "@/lib/openaiClient";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";
import { linkedinProfileSchema } from "@/types/candidateSchema";
import { jobSchema } from "@/types/jobSchema";
import { candidateListSchema } from "@/types/candidateListSchema";

export async function generateMessages(jobDescription: z.infer<typeof jobSchema>) {
    const completion = await openaiClient.beta.chat.completions.parse({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are generating sample LinkedIn, Github and Resume profiles for candidates who are applying to internship positions at a company, depending on the provided job's description. Try to make sure the data is as organic as possible, meaning sometimes the resume profile will be unavailable, and depending on the job, applicants may or may not have a github profile. Try to mimic the quality of information that would be found by a bot scraping profiles from linkedin, github, or publicly available resumes." },
            { role: "user", content: `Generate 5 profiles for the job based on the following attributes:
                Job Title: ${jobDescription.title} || "Software Engineer"
                Job Description: ${jobDescription.description} || "We are looking for a software engineer with 3 years of experience in React, Node.js, and MongoDB."
                Job Location: ${jobDescription.location} || "San Francisco, CA"
                Job Industry: ${jobDescription.industry} || "Technology"
                Job Skills: ${jobDescription.jobSkills} || ["React", "Node.js", "MongoDB"]
                Job Responsibilities: ${jobDescription.jobResponsibility} || ["Develop and maintain web applications", "Collaborate with team members to design and implement new features"]
                Job Requirements: ${jobDescription.jobRequirement} || ["Bachelor's degree in Computer Science", "3 years of experience in React, Node.js, and MongoDB"]
                `},
        ],
        response_format: zodResponseFormat(candidateListSchema, "candidateList"),
    })
    return completion.choices[0].message.content;
}