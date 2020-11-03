export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  get domain(): string {
    try {
      // Remove the 'https://' part of the string
      const domainAndPath = this.link.split('//')[1];

      // Remove the part after the first '/', only the address remains
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }

  upVote(): void {
    this.votes += 1;
  }

  downVote(): void {
    this.votes -= 1;
  }
}
