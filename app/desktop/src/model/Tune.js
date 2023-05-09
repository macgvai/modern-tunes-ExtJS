Ext.define("ModernTunes.model.Tune", {
  extend: "Ext.data.Model",
  requires: ["Ext.data.proxy.JsonP"],
  fields: [
    {
      name: "id",
      mapping: "id",
    },
    {
      name: "title",
      mapping: "name",
    },
    {
      name: "image",
      mapping: "artworkUrl100",
    },
    {
      name: "artist",
      mapping: "artistName",
    },
    {
      name: "itunesstore",
      mapping: "url",
    },
    {
      name: "preview",
      mapping: "artworkUrl100",
    },
    {
      name: "release_date",
      mapping: "releaseDate",
    },
  ],
  proxy: {
    type: "jsonp",
    url: "https://rss.applemarketingtools.com/api/v2/ru/music/most-played/50/music-videos.json",
    reader: {
      type: "json",
      rootProperty: "feed.results",
    },
  },
});
