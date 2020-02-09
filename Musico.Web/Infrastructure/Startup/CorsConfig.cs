namespace Musico.Web.Infrastructure.Startup
{
    using Microsoft.AspNetCore.Builder;

    public static class CorsConfig
    {
        /// <summary>
        /// Adds Cors settup
        /// </summary>
        public static IApplicationBuilder UseAllowAllCors(this IApplicationBuilder application)
        {
            application.UseCors(options => options.WithOrigins("http://localhost:4000").AllowAnyMethod());

            return application;
        }
    }
}
