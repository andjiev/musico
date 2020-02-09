namespace Musico.Web.Infrastructure.Startup
{
    using Microsoft.Extensions.DependencyInjection;
    using Musico.Services.Services;

    public static class ServicesConfig
    {
        /// <summary>
        /// Registers all Musico.Web used services
        /// </summary>
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services
                .AddTransient<IGraphQLService, GraphQLService>();

            return services;
        }
    }
}
