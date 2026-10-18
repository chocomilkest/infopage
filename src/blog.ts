export interface Blogs {
  files: BlogData[],
  current: Blog | null
}

export interface Blog {
  name: string,
  htmledMarkdown: string
}

export interface BlogData {
  file: string,
  name: string,
  // description: string, // maybe in the future when i add tooltips
}
