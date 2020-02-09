namespace Musico.DataContext.Mappings
{
    using GraphQL.Types;
    using Musico.DataContext.Entities;

    class ArtistMap
        : ObjectGraphType<Artist>
    {
        public ArtistMap()
        {
            Name = "Artist";

            Field(x => x.Id, type: typeof(IdGraphType)).Description("The ID of the Artist");
            Field(x => x.Name).Description("The name of the Artist");
        }
    }
}
