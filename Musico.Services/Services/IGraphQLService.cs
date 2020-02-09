namespace Musico.Services.Services
{
    using GraphQL.Types;

    public interface IGraphQLService
    {
        IObjectGraphType GetArtistQuery();
    }
}
