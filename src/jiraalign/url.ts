import * as path from "node:path";

export function appendPath(url: URL, segment: string) {
  url.pathname = path.join(url.pathname, segment);
  return url;
}

export function constructUrl(site: string, resource: string): URL {
  const url = new URL(site);
  appendPath(url, "/rest/align/api/2/");
  appendPath(url, resource);
  return url;
}

/*
https://help.jiraalign.com/hc/en-us/articles/360045371954-Getting-started-with-the-REST-API-2-0
*/
export enum Resources {
  Theme = "Theme",
  Epic = "Epic",
  Capability = "Capability",
  Feature = "Feature",
  Story = "Story",
  Task = "Task",
  Defect = "Defect",
  Risk = "Risk",
  Goals = "Goals",
  Objectives = "Objectives",
  KeyResults = "Key%20Results",
  Portfolio = "Portfolio",
  Program = "Program",
  Team = "Team",
  User = "User",
  Release = "Release",
  ProgramIncrement = "Release",
  ReleaseVehicles = "Release%20Vehicles",
  Iteration = "Iteration",
  Sprint = "Iteration",
  Product = "Product",
  Snapshots = "Snapshots",
  ValueStreams = "Value%20Streams",
  ProcessFlows = "Value%20Streams",
  Customer = "Customer",
  Region = "Region",
  City = "City",
  Ideation = "Ideation",
  Ideas = "Ideation",
}
