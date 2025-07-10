import { fetch } from "@forge/api";
import wretch, { type WretchError } from "wretch";
import type { FetchContentFromCapabilityPayload } from "./actionpayload";
import * as config from "./forge/config";
import type { CapabilityResult } from "./jiraalign/capability";
import { appendPath, constructUrl, Resources } from "./jiraalign/url";

const w = wretch().polyfills({
  fetch,
  FormData,
});

function logHttpError(err: WretchError) {
  console.error(`Error: ${err.status}: ${err.text}`);
}

export async function fetchContentFromCapability(
  payload: FetchContentFromCapabilityPayload,
) {
  const capabilityUrl = constructUrl(
    config.JIRA_ALIGN_SITE_URL,
    Resources.Capability,
  );
  const url = appendPath(capabilityUrl, payload.capabilityId);
  console.debug(`Request: Capability from ${url}`);
  try {
    const responseJson = (await w
      .auth(`bearer ${config.JIRA_ALIGN_API_TOKEN}`)
      .url(url.toString())
      .get()
      .badRequest(logHttpError)
      .forbidden(logHttpError)
      .notFound(logHttpError)
      .timeout(logHttpError)
      .internalError(logHttpError)
      .fetchError((err) => console.error(err))
      .json()) as CapabilityResult;
    console.debug(`Success: Capability for ${payload.capabilityId}`);
    return responseJson;
  } catch (error: unknown) {
    console.error(`Failed: Capability for ${payload.capabilityId}`);
    console.error(`Error: ${error}`);
    return `Failed: Capability for ${payload.capabilityId}`;
  }
}
