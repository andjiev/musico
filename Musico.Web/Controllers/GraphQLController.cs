namespace Musico.Web.Controllers
{
    using System.Threading.Tasks;
    using GraphQL;
    using GraphQL.Types;
    using Microsoft.AspNetCore.Mvc;
    using Musico.Services.Models;
    using Musico.Services.Services;

    [Route("graphql")]
    [ApiController]
    public class GraphQLController
        : Controller
    {
        private readonly IGraphQLService service;

        public GraphQLController(IGraphQLService service)
        {
            this.service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]GraphQLQuery query)
        {
            var inputs = query.Variables.ToInputs();

            var schema = new Schema
            {
                Query = service.GetArtistQuery()
            };

            var result = await new DocumentExecuter().ExecuteAsync(_ =>
            {
                _.Schema = schema;
                _.Query = query.Query;
                _.OperationName = query.OperationName;
                _.Inputs = inputs;
            });

            if (result.Errors?.Count > 0)
            {
                return BadRequest();
            }

            return Ok(result);
        }
    }
}
