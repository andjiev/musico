namespace Musico.Services.Queries
{
    using System.Linq;
    using GraphQL.Types;
    using Musico.DataContext.Entities;
    using Musico.DataContext.Mappings;
    using SpotifyAPI.Web;
    using SpotifyAPI.Web.Auth;
    using SpotifyAPI.Web.Models;

    public class TrackQuery
        : ObjectGraphType, IObjectGraphType
    {
        public TrackQuery()
        {
            FieldAsync<ListGraphType<TrackMap>>(
                "Tracks",
                arguments: new QueryArguments(new QueryArgument<StringGraphType> { Name = "name", Description = "The name of the Track" }),
                resolve: async context =>
                {
                    // this should not be here (temporary)
                    CredentialsAuth auth = new CredentialsAuth("b2fdac7e678e4d278c8a746869dd0e1c", "ee7ced550c6d40c28342120b3b1ed49d");
                    Token token = await auth.GetToken();

                    var spotify = new SpotifyWebAPI
                    {
                        AccessToken = token.AccessToken,
                        TokenType = token.TokenType
                    };

                    var name = context.GetArgument<string>("name");
                    var searchResult = await spotify.SearchItemsAsync(name, SpotifyAPI.Web.Enums.SearchType.Track);

                    // TODO: add auto mapper
                    return searchResult.Tracks.Items.Select(s => new Track
                    {
                        Id = s.Id,
                        Name = s.Name,
                        Popularity = s.Popularity,
                        Album = new Album
                        {
                            Id = s.Album.Id,
                            Name = s.Album.Name,
                            Images = s.Album.Images.Select(x => new DataContext.Entities.Image
                            {
                                Url = x.Url,
                                Width = x.Width,
                                Height = x.Height
                            }).ToList()
                        },
                        Artists = s.Artists.Select(x => new Artist
                        {
                            Id = x.Id,
                            Name = x.Name
                        }).ToList()
                    });
                });
        }
    }
}
