namespace Musico.Services.Profiles
{
    using AutoMapper;
    using Musico.DataContext.Entities;
    using SpotifyAPI.Web.Models;

    public class ArtistProfile
        : Profile
    {
        public ArtistProfile()
        {
            CreateMap<SimpleArtist, Artist>();
        }
    }
}
