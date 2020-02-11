namespace Musico.Services.Queries
{
    using System.Linq;
    using GraphQL.Types;
    using Musico.DataContext.Entities;
    using Musico.DataContext.Mappings;
    using SpotifyAPI.Web;
    using SpotifyAPI.Web.Auth;
    using SpotifyAPI.Web.Models;

    public class ArtistQuery
        : ObjectGraphType, IObjectGraphType
    {
        public ArtistQuery()
        {
            FieldAsync<ArtistMap>(
                nameof(Artist),
                arguments: new QueryArguments(
                    new QueryArgument<StringGraphType> { Name = "id", Description = "The ID of the Artist" },
                    new QueryArgument<StringGraphType> { Name = "name", Description = "The name of the Artist" }),
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

                    var id = context.HasArgument("id") ? context.GetArgument<string>("id") : string.Empty;
                    var name = context.HasArgument("name") ? context.GetArgument<string>("name") : string.Empty;
                    FullArtist artistResult = null;

                    if (string.IsNullOrEmpty(id))
                    {
                        // TODO: better search handling
                        var searchResult = await spotify.SearchItemsAsync(name, SpotifyAPI.Web.Enums.SearchType.Artist);
                        artistResult = searchResult.Artists.Items.FirstOrDefault();
                    }
                    else
                    {
                        artistResult = await spotify.GetArtistAsync(id);
                    }

                    // TODO: add auto mapper
                    return artistResult == null ? null : new Artist
                    {
                        Id = artistResult.Id,
                        Name = artistResult.Name,
                        Genres = artistResult.Genres,
                        Images = artistResult.Images.Select(x => new DataContext.Entities.Image
                        {
                            Url = x.Url,
                            Width = x.Width,
                            Height = x.Height
                        }).ToList()
                    };
                });
        }
    }
}
