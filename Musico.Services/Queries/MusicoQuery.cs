namespace Musico.Services.Queries
{
    using System.Collections.Generic;
    using AutoMapper;
    using GraphQL.Types;
    using Musico.DataContext.Entities;
    using Musico.DataContext.Mappings;
    using Musico.Services.Services;
    using SpotifyAPI.Web.Models;

    public class MusicoQuery
        : ObjectGraphType, IObjectGraphType
    {
        public MusicoQuery(IMapper mapper)
        {
            FieldAsync<ListGraphType<TrackMap>>(
                "Tracks",
                arguments: new QueryArguments(new QueryArgument<StringGraphType> { Name = "name", Description = "The name of the Track" }),
                resolve: async context =>
                {
                    var spotify = await SpotifyApiFactory.Create();
                    var name = context.GetArgument<string>("name");
                    var searchResult = await spotify.SearchItemsAsync(name, SpotifyAPI.Web.Enums.SearchType.Track);

                    return mapper.Map<List<FullTrack>, List<Track>>(searchResult.Tracks.Items);
                });

            FieldAsync<ListGraphType<TrackMap>>(
               "AlbumTracks",
               arguments: new QueryArguments(new QueryArgument<StringGraphType> { Name = "id", Description = "The ID of the Track" }),
               resolve: async context =>
               {
                   var spotify = await SpotifyApiFactory.Create();
                   var id = context.GetArgument<string>("id");
                   var album = await spotify.GetAlbumAsync(id);
                   var searchResult = await spotify.GetAlbumTracksAsync(id);

                   return mapper.Map<List<SimpleTrack>, List<Track>>(searchResult.Items, opt =>
                   {
                       opt.AfterMap((src, dest) =>
                       {
                           foreach (var track in dest)
                           {
                               track.Album = mapper.Map<FullAlbum, Album>(album);
                           }
                       });
                   });
               });

            FieldAsync<ListGraphType<AlbumMap>>(
               "NewReleases",
               resolve: async context =>
               {
                   var spotify = await SpotifyApiFactory.Create();
                   var searchResult = await spotify.GetNewAlbumReleasesAsync();

                   return mapper.Map<List<SimpleAlbum>, List<Album>>(searchResult.Albums.Items);
               });
        }
    }
}
