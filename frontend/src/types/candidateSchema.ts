// Define the schema (and type) for the LinkedIn, Github and Resume Profiles

import { z } from "zod";

export const linkedinProfileSchema = z.object({
    name: z.string(),
    experience: z.array(z.object({
        company: z.string(),
        title: z.string(),
        location: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string(),
    })),
    education: z.array(z.object({
        school: z.string(),
        degree: z.string(),
        fieldOfStudy: z.string(),
        startDate: z.string(),
        endDate: z.string(),
    })),
    skills: z.array(z.string()),
    projects: z.array(z.object({
        name: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        skills: z.array(z.string()),
    })),
    certifications: z.array(z.object({
        name: z.string(),
        issuer: z.string(),
        startDate: z.string(),
        endDate: z.string(),
    })),
    recommendations: z.array(z.object({
        name: z.string(),
        recommendation: z.string(),
        startDate: z.string(),
        endDate: z.string(),
    })),
    posts: z.array(z.object({
        title: z.string(),
        content: z.string(),
        startDate: z.string(),
        endDate: z.string(),
    })),
    volunteering: z.array(z.object({
        name: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string(),
    })),
});

export const githubProfileSchema = z.object({
    name: z.string(),
    repositories: z.array(z.object({
        name: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        languages: z.array(z.string()),
        topics: z.array(z.string()),
    })),
    contributions: z.array(z.object({
        name: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string(),
    })),
    skills: z.array(z.string()),
    projects: z.array(z.object({
        name: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        languages: z.array(z.string()),
        topics: z.array(z.string()),
    })),
});

export const resumeProfileSchema = z.object({
    name: z.string(),
    experience: z.array(z.object({
        company: z.string(),
        title: z.string(),
        location: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string(),
    })),
    education: z.array(z.object({
        school: z.string(),
        degree: z.string(),
        fieldOfStudy: z.string(),
        startDate: z.string(),
        endDate: z.string(),
    })),
    skills: z.array(z.string()),
    projects: z.array(z.object({
        name: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        languages: z.array(z.string()),
        topics: z.array(z.string()),
    })),
    certifications: z.array(z.object({
        name: z.string(),
        issuer: z.string(),
        startDate: z.string(),
        endDate: z.string(),
    })),
    awards: z.array(z.object({
        name: z.string(),
        description: z.string(),
        startDate: z.string(),
        endDate: z.string(),
    })),
});