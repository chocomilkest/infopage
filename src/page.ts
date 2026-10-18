import { type Blogs } from './blog.ts'

export enum Page {
  Explorer,
  Info,
  Projects,
  Blog
}

export interface Container {
  width: number, // in dvw
  height: number, // in dvh
  currentPage: Page,
  blogs: Blogs | null
}

export function getPreviousPage(currentPage: Page): Page {
  switch (currentPage){
  case Page.Explorer: return Page.Explorer
  case Page.Info:     return Page.Explorer
  case Page.Projects: return Page.Explorer
  case Page.Blog:     return Page.Explorer
  }
}

// TODO: page title if blog !== null { return state.blodata.name }
export function pageToString(page: Page): string {
  switch (page){
  case Page.Explorer: return "explorer"
  case Page.Info:     return "info about me"
  case Page.Projects: return "projects"
  case Page.Blog:     return "blog"
  }
}
