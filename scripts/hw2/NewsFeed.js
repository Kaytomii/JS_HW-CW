class NewsFeed {
    constructor() {
        this.news = [];
    }

    get count() {
        return this.news.length;
    }

    addNews(title, date, tags) {
        this.news.push({ title, date: new Date(date), tags });
    }

    removeNews(title) {
        this.news = this.news.filter(n => n.title !== title);
    }

    sortByDate() {
        this.news.sort((a, b) => b.date - a.date);
    }

    searchByTag(tag) {
        return this.news.filter(n => n.tags.includes(tag));
    }
}

export default NewsFeed;