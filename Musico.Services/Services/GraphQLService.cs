namespace Musico.Services.Services
{
    using GraphQL.Types;
    using Musico.Services.Queries;

    public class GraphQLService
        : IGraphQLService
    {
        public IObjectGraphType GetArtistQuery()
        {
            return new TrackQuery();
        }
    }
}
