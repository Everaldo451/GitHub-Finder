export type UserType = {
  avatar_url: string,
  login: string,
  location: string,
  followers: number,
  following: number
};

export type RepositoryType = {
  name: string, 
  forks: number,
  language: string,
  html_url: string,
  watchers: number
}