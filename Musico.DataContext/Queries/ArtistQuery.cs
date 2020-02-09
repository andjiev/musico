namespace Musico.DataContext.Queries
{
    using GraphQL.Types;
    using Musico.DataContext.Mappings;
    using Musico.DataContext.Entities;
    using System.Collections.Generic;

    public class ArtistQuery
        : ObjectGraphType
    {
        public ArtistQuery()
        {
            Field<ArtistMap>(
                nameof(Artist),
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "id", Description = "The id of the Artist" },
                    new QueryArgument<StringGraphType> { Name = "name", Description = "The name of the Artist" }),
                resolve: context =>
                {
                    var id = context.HasArgument("id") ? context.GetArgument<int>("id") : 1;
                    var name = context.HasArgument("name") ? context.GetArgument<string>("name") : "Artist";

                    return new Artist
                    {
                        Id = id,
                        Name = name
                    };
                });
        }
    }
}
