namespace Musico.Services.Profiles
{
    using AutoMapper;
    using Musico.DataContext.Entities;
    using SpotifyAPI.Web.Models;

    public class AlbumProfile
        : Profile
    {
        public AlbumProfile()
        {
            CreateMap<FullAlbum, Album>();

            CreateMap<SimpleAlbum, Album>();

            CreateMap<SpotifyAPI.Web.Models.Image, DataContext.Entities.Image>();
        }
    }
}
