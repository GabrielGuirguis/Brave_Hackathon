import { z } from "zod";

export const jobSchema = z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    industry: z.string(),
    jobCategory: z.string(),
    jobSkills: z.array(z.string()),
    jobResponsibility: z.array(z.string()),
    jobRequirement: z.array(z.string()),
});
