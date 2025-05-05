import { z } from "zod";
import { linkedinProfileSchema, githubProfileSchema, resumeProfileSchema } from "./candidateSchema";

export const candidateListSchema = z.object({
    candidatelist: z.array(z.object({
        candidateId: z.number(),
        linkedinProfile: linkedinProfileSchema,
        githubProfile: githubProfileSchema.nullable(),
        resumeProfile: resumeProfileSchema.nullable(),
    }))});