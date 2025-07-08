import { parseEnv, z } from "znv";

export const { JIRA_ALIGN_SITE_URL, JIRA_ALIGN_API_TOKEN } = parseEnv(
  process.env,
  {
    JIRA_ALIGN_SITE_URL: z.string().url(),
    JIRA_ALIGN_API_TOKEN: z.string(),
  },
);
