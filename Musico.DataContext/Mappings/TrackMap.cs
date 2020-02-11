namespace Musico.DataContext.Mappings
{
    using GraphQL.Types;
    using Musico.DataContext.Entities;

    public class TrackMap
        : ObjectGraphType<Track>
    {
        public TrackMap()
        {
            Name = "Track";

            Field(x => x.Id, type: typeof(StringGraphType)).Description("The ID of the Track");
            Field(x => x.Name, type: typeof(StringGraphType)).Description("The name of the Track");
            Field(x => x.Album, type: typeof(AlbumMap)).Description("Track's album");
            Field(x => x.Artists, type: typeof(ListGraphType<ArtistMap>)).Description("Track's artists");
        }
    }
}
