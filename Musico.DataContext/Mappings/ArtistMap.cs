namespace Musico.DataContext.Mappings
{
    using GraphQL.Types;
    using Musico.DataContext.Entities;

    public class ArtistMap
        : ObjectGraphType<Artist>
    {
        public ArtistMap()
        {
            Name = "Artist";

            Field(x => x.Id, type: typeof(StringGraphType)).Description("The ID of the Artist");
            Field(x => x.Name, type: typeof(StringGraphType)).Description("The name of the Artist");
            Field(x => x.Genres).Description("Artist's genres");
            Field(x => x.Images, type: typeof(ListGraphType<ImageMap>)).Description("Artist's images");
        }
    }
}
