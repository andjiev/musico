namespace Musico.DataContext.Mappings
{
    using GraphQL.Types;
    using Musico.DataContext.Entities;

    public class AlbumMap
        : ObjectGraphType<Album>
    {
        public AlbumMap()
        {
            Name = "Album";

            Field(x => x.Id, type: typeof(StringGraphType)).Description("The ID of the Album");
            Field(x => x.Name, type: typeof(StringGraphType)).Description("The name of the Album");
            Field(x => x.Genres).Description("Album's genres");
            Field(x => x.Images, type: typeof(ListGraphType<ImageMap>)).Description("Album's images");
            Field(x => x.Artists, type: typeof(ListGraphType<ArtistMap>)).Description("Album's artists");
        }
    }
}
